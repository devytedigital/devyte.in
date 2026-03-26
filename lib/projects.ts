export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  year?: string;
  domain?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DX™ Fashion",
    category: "Web app",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774514466/this_laptop_wallpaper_202603261302_wr5yzk.jpg",
    description:
      "A premium t-shirt store built with a focus on design, speed, and seamless user experience",
    year: "2026",
    domain: "https://dx-tee.vercel.app/",
  },
  {
    id: 2,
    title: "Reem Date",
    category: "Web app",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774514995/this_laptop_wallpaper_202603261419_qxwqn7.jpg",
    description:
      "A premium platform showcasing high-quality dates and dry fruits with a smooth user experience.",
    year: "2025",
    domain: "https://reemdates.in",
  },
  {
    id: 3,
    title: "MAMMASCRIB",
    category: "Web app",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774517449/ChatGPT_Image_Mar_26_2026_02_58_16_PM_qjilun.png",
    description:
      "A clean and modern website for a skincare brand, showcasing baby-safe and gentle soaps with a focus on trust, care, and simplicity.",
    year: "2024",
    domain: "https://mammascrib.vercel.app/",
  },
  {
    id: 4,
    title: "Softell",
    category: "Product Website",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774516554/this_laptop_wallpaper_202603261445_wotfhj.jpg",
    description:
      "A modern product-focused website showcasing car cup holder tissues with a clean design and smooth browsing experience.",
    year: "2023",
    domain: "https://softell.in",
  },
  {
    id: 5,
    title: "Ferrari Beta Landing Page",
    category: "Landing Page",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774516267/this_laptop_wallpaper_202603261440_a7fgna.jpg",
    description:
      "A sleek and modern landing page designed to showcase the Ferrari Beta experience with clean visuals and engaging layout.",
    year: "2025",
    domain: "https://ferrari-beta.vercel.app/",
  },
  {
    id: 6,
    title: "Aurora Branding",
    category: "Visual Identity",
    image:
      "https://i.pinimg.com/1200x/19/37/41/19374174a254102a7de773308ed07bd2.jpg",
    description:
      "Dynamic visual storytelling and minimalist branding for the modern creative.",
    year: "2024",
    domain: "aurora-design.com",
  },
  {
    id: 7,
    title: "Solaris Hub",
    category: "Mobile App",
    image:
      "https://i.pinimg.com/1200x/f5/4a/d8/f54ad8591227f8c2710b4b8255080455.jpg",
    description:
      "Integrated smart home control system with seamless biometric authentication.",
    year: "2023",
    domain: "solaris-hub.io",
  },
];
