export const profile = {
  name: "Victor Lee",
  title: "Senior Full-Stack Developer",
  location: "Postbauer-Heng, Bavaria, Germany",
  email: "digitalnexus685@gmail.com",
  phone: "+49 1523 3889202",
  summary:
    "Senior Full-Stack Developer with 5 years of experience specializing in Sanity CMS, Next.js, React, and modern web development. Delivering scalable applications with AI-assisted workflows, strong technical judgment, and a focus on high-quality results.",
};

export const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "Digital Heroes",
    location: "Germany",
    period: "Aug 2024 – Present",
    points: [
      "Develop websites and applications using Next.js, React, and Sanity CMS.",
      "Build and customize Sanity Studio and content structures.",
      "Create responsive and reusable UI components.",
      "Leverage AI prompting and AI-assisted development to improve speed and quality.",
      "Optimize website performance and SEO.",
      "Manage deployment, maintenance, and troubleshooting.",
      "Collaborate with teams to deliver high-quality projects.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    location: "Remote",
    period: "May 2021 – Aug 2024",
    points: [
      "Delivered web projects for clients across different industries.",
      "Built sites and apps with Next.js, React, Sanity CMS, Shopify, and WordPress.",
      "Developed custom features, CMS solutions, and API integrations.",
      "Created responsive, user-friendly interfaces.",
      "Managed projects from development through deployment and client communication.",
    ],
  },
] as const;

export const skillGroups = [
  {
    label: "AI",
    items: ["AI Training", "AI Prompting", "AI-Assisted Development"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "CMS",
    items: ["Sanity CMS", "Sanity Studio", "Shopify", "WordPress"],
  },
  {
    label: "Tools & DevOps",
    items: ["Git", "Docker", "Linux", "CI/CD"],
  },
  {
    label: "Other",
    items: ["SEO", "Responsive Design", "Performance Optimization"],
  },
] as const;

export const education = {
  school: "University of British Columbia (UBC)",
  degree: "Bachelor of Science in Computer Science",
  location: "Vancouver, BC, Canada",
  period: "09/2017 – 05/2021",
};

export const projects = [
  {
    name: "Digital Heroes",
    url: "https://www.digi-hero.com/en",
    role: "The global network for remote talents",
    image: "/projects/digital-heroes.jpg",
    imageAlt: "Digital Heroes marketing agency site",
    summary:
      "Data-driven marketing powered by AI — SEO, paid media, automation, and analytics built for measurable growth.",
    stack: [
      { label: "Next.js", tone: "core" },
      { label: "Sanity", tone: "core" },
      { label: "SEO", tone: "focus" },
      { label: "AI", tone: "focus" },
    ],
  },
  {
    name: "Alliance RV",
    url: "https://www.alliancerv.com/",
    role: "Luxury RVs · Elkhart, IN",
    image: "/projects/alliance-rv.svg",
    imageAlt: "Alliance RV luxury fifth wheels brand",
    summary:
      "Crowdsourced luxury fifth wheels and trailers — model discovery, dealer inventory, built for the 100th trip.",
    stack: [
      { label: "Next.js", tone: "core" },
      { label: "React", tone: "core" },
      { label: "Catalog", tone: "focus" },
      { label: "Dealers", tone: "focus" },
    ],
  },
  {
    name: "Alera Marine",
    url: "https://www.aleramarine.com/",
    role: "Premium pontoons",
    image: "/projects/alera-marine.jpg",
    imageAlt: "Alera Marine premium pontoon boats",
    summary:
      "Premium pontoon brand with intentional design — interactive boat builder, VR preview, and dealer paths.",
    stack: [
      { label: "Next.js", tone: "core" },
      { label: "Sanity", tone: "core" },
      { label: "Builder", tone: "focus" },
      { label: "VR", tone: "focus" },
    ],
  },
  {
    name: "Midwest Electric",
    url: "https://www.midwestelectric.com/",
    role: "Electrical products",
    image: "/projects/midwest-electric.webp",
    imageAlt: "Midwest Electric weatherproof electrical products",
    summary:
      "Weatherproof electrical gear for construction, outdoor living, and agriculture — catalog and distributor tools.",
    stack: [
      { label: "CMS", tone: "core" },
      { label: "Catalog", tone: "focus" },
      { label: "Distributors", tone: "focus" },
      { label: "SEO", tone: "focus" },
    ],
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
