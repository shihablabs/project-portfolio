# Project Portfolio — Page & Architecture Notes

## ১. ওভারভিউ (Overview)
- **প্রজেক্টের ধরন:** মাল্টি-পেজ হাই-ফিডেলিটি পোর্টফোলিও ওয়েবসাইট (UX/UI Designer Sejuti Mehjabin).
- **থিম সাপোর্ট:** Light Mode & Dark Mode (উভয় থিম প্রতিটি পেজে সক্রিয় ও একই কালার প্যালেট অনুসরণ করবে).
- **কমন লেআউট:** প্রতিটি পেজের **Header / Sidebar** এবং **Footer** এক ও অভিন্ন থাকবে।
- **স্ট্যাটিক এক্সপোর্ট:** Next.js `output: 'export'` কনফিগারেশন অনুযায়ী স্ট্যাটিক সাইট হিসেবে বিল্ড হবে।

---

## ২. পেজ লিস্ট (Total Pages: ৭টি প্রধান পেজ/ভিউ)

| ক্রমানুসারে | পেজের নাম | প্রস্তাবিত রাউট (Route) | বিবরণ | স্ট্যাটাস |
|:---|:---|:---|:---|:---|
| ১ | **Home** | `/` | ল্যান্ডিং পেজ (Hero, About সংক্ষেপ, Featured Work, Blogs প্রিভিউ, Contact সেকশন) | প্রস্তুত (Light & Dark) |
| ২ | **About** | `/about` | সম্পূর্ণ পরিচিতি, ব্যাকগ্রাউন্ড, অভিজ্ঞতা, ডিজাইন দর্শন ও স্কিলস | ভিউ তৈরি আছে |
| ৩ | **Work** | `/work` | সব প্রজেক্টের ক্যাটাগরিভিত্তিক লিস্টিং (UX Websites, Mobile Apps, Softwares, Branding, ইত্যাদি) | তৈরি করতে হবে |
| ৪ | **Work Preview** | `/work/[slug]` | সিঙ্গেল কেস স্টাডি / প্রজেক্ট ডিটেইল পেজ (ওভারভিউ, চ্যালেঞ্জ, ডিজাইন প্রসেস, স্ক্রিনশট) | তৈরি করতে হবে |
| ৫ | **Blogs** | `/blogs` | সব আর্টিকেল/ব্লগ পোস্টের গ্রিড লিস্টিং | তৈরি করতে হবে |
| ৬ | **Blogs Details** | `/blogs/[slug]` | সিঙ্গেল ব্লগ পোস্ট রিডিং পেজ (রিচ কন্টেন্ট, সম্পর্কিত পোস্ট) | তৈরি করতে হবে |
| ৭ | **Contact** | `/contact` | ডেডিকেটেড যোগাযোগ পেজ (কন্টাক্ট ফর্ম, সোশ্যাল লিংক, ম্যাপ/অ্যাড্রেস) | তৈরি করতে হবে |

---

## ৩. ডিজাইন ও থিম কনসিস্টেন্সি (Design & Theme Rules)

1. **কালার প্যালেট (Tokens):**
   - **Light Mode:**
     - Background: `#FFF7E7` (warm cream)
     - Texture (Noise): Seamless tile `/assets/bg-noise-tile.png` (83 KB, Figma Mono 0.5 noise pattern, repeated seamlessly across all screen sizes)
     - Text / Ink: `#0A0F24` (deep navy)
     - Accent: `#DE4313` (vibrant coral/orange)
     - Accent Gold: `#FEC163`
     - Gradient: `linear-gradient(135deg, #FEC163 0%, #DE4313 96%)`
   - **Dark Mode:**
     - Background: `#0A0F24` (deep navy, solid)
     - Text / Ink: `#FFF7E7` (warm cream)
     - Card Background: `#101633`
     - Card Border: `rgba(255, 247, 231, 0.5)`
     - Accent & Gradient অপরিবর্তিত থাকবে

2. **লেআউট নিয়মাবলী (Layout System):**
   - **Desktop (≥1024px):** ফিক্সড লেফট সাইডবার (`160px` প্রস্থ) সব পেজে অপরিবর্তিত থাকবে। মূল কন্টেন্ট এরিয়া `lg:pl-[160px]` প্যাডিং নিয়ে স্ক্রল হবে।
   - **Mobile (<1024px):** ফিক্সড টপ বার ও ড্রয়ার মেন্যু সব পেজে কাজ করবে।
   - **Footer:** সব পেজের নিচে একই ব্র‍্যান্ডিং ফুটার থাকবে।

3. **টাইপোগ্রাফি ও ফন্ট ব্যবহারের নিয়ম (Typography Rules):**
   - **পুরো সাইটের ডিফল্ট প্যারাগ্রাফ ও বেস ফন্ট (Paragraphs & Base):** `Almarai` (রেগুলার টেক্সট ও প্যারাগ্রাফের জন্য পুরো সাইটে ডিফল্ট হিসেবে ব্যবহৃত হবে)।
   - **বোল্ড টেক্সট ও সাধারণ হেডিং (Bold & General Headings):** `Almarai` (বোল্ড বা এক্সট্রা-বোল্ড টেক্সট এবং সাধারণ টাইটেলের জন্য)।
   - **সেকশন হেডিং (Section Headings / Banners / H1-H6):** `DM Sans` (যেমন: সেকশনের মেইন টাইটেল বা ব্যানার হেডিংয়ের জন্য `font-dm` ক্লাস ব্যবহার হবে)।
   - **নাম্বারিং ও কাউন্টার (Numbers & Page Indicators):** `Concert One` (যেমন: পেজ নাম্বার, সেকশন কাউন্টার `01`, `02`, `03` ইত্যাদির জন্য `font-concert` ক্লাস ব্যবহার হবে)।
   - **ফন্ট ভেরিয়েবল ও ইউটিলিটি ক্লাস:**
     - `.font-almarai` → `var(--font-almarai)`
     - `.font-dm` → `var(--font-dm-sans)`
     - `.font-concert` → `var(--font-concert-one)`
     - `.font-merri` → `var(--font-merriweather)` (প্রয়োজনে কোট বা অ্যাকসেন্টের জন্য)

---

## ৪. পরবর্তী ধাপের রোডম্যাপ (Next Steps)
1. `src/app/work/` এবং `src/app/work/[slug]/` এর জন্য কম্পোনেন্ট ও পেজ তৈরি।
2. `src/app/blogs/` এবং `src/app/blogs/[slug]/` এর জন্য কম্পোনেন্ট ও পেজ তৈরি।
3. `src/app/contact/` পেজ তৈরি।
4. সাইডবারের নেভিগেশন লিংকগুলোকে সিঙ্গেল-পেজ অ্যাঙ্কর (`#work`) এবং মাল্টি-পেজ রাউট (`/work`) উভয়ের সাথে সামঞ্জস্যপূর্ণ করা।
