"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

/**
 * ============================================================================
 * LOADER CONTEXT & HOOK (ব্যবহার নির্দেশিকা / USAGE GUIDE)
 * ============================================================================
 *
 * এই Loader টি পুরো ওয়েবসাইটের যেকোনো জায়গা থেকে খুব সহজে কল করা যাবে।
 *
 * ১. React Hook দিয়ে কল করার উপায়:
 *    -----------------------------------------------------
 *    import { useLoader } from "@/context/LoaderContext";
 *
 *    export default function MyComponent() {
 *      const { showLoader, hideLoader, isLoading } = useLoader();
 *
 *      const fetchData = async () => {
 *        showLoader(); // লোডার চালু হবে
 *        try {
 *          await doSomething();
 *        } finally {
 *          hideLoader(); // লোডার বন্ধ হবে
 *        }
 *      };
 *    }
 *
 * ২. React এর বাইরে বা সাধারণ JavaScript / Event দিয়ে কল করার উপায়:
 *    -----------------------------------------------------
 *    // লোডার দেখাতে চাইলে:
 *    window.dispatchEvent(new CustomEvent("site-loader", { detail: true }));
 *
 *    // লোডার বন্ধ করতে চাইলে:
 *    window.dispatchEvent(new CustomEvent("site-loader", { detail: false }));
 * ============================================================================
 */

interface LoaderContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  setLoading: (state: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  showLoader: () => {},
  hideLoader: () => {},
  setLoading: () => {},
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  // Initial dummy state: পেজ লোড হওয়ার সময় দেখানোর জন্য ডিফল্ট true
  // প্রয়োজন না হলে useState(false) করে দিলে ইনিশিয়াল লোড বন্ধ থাকবে
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const showLoader = useCallback(() => setIsLoading(true), []);
  const hideLoader = useCallback(() => setIsLoading(false), []);
  const setLoading = useCallback((state: boolean) => setIsLoading(state), []);

  // ── ১. ডামি পেজ লোডার (Page Load / Refresh এর সময় স্বল্প সময়ের জন্য প্রদর্শিত হবে) ──
  useEffect(() => {
    // ৮০০ মিলিসেকেন্ড পর লোডার নিজে থেকেই হাইড হয়ে যাবে
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  // ── ২. Global Custom Event Listener ("site-loader") ──
  // যেকোনো কম্পোনেন্ট বা ফাইল থেকে window.dispatchEvent দিয়ে সরাসরি টগল করা যাবে
  useEffect(() => {
    const handleLoaderEvent = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      if (typeof customEvent.detail === "boolean") {
        setIsLoading(customEvent.detail);
      }
    };

    window.addEventListener("site-loader", handleLoaderEvent);
    return () => window.removeEventListener("site-loader", handleLoaderEvent);
  }, []);

  return (
    <LoaderContext.Provider
      value={{ isLoading, showLoader, hideLoader, setLoading }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

/**
 * useLoader Hook:
 * যেকোনো কম্পোনেন্ট থেকে Loader কন্ট্রোল করার জন্য ব্যবহার করুন।
 */
export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
