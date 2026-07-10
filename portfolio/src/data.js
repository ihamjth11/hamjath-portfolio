// All portfolio content lives here. To add a new project or experience entry,
// just add a new object to the relevant array below — no need to touch any component.

export const flagshipProjects = [
  {
    code: "SB",
    iconGradient: "linear-gradient(135deg,#5FE0CB,#3AA894)",
    status: "Live in production",
    statusColor: "text-signal",
    title: "SL Bus Tracker",
    description:
      "Helping Sri Lankans find bus routes, fares, and timings across all 25 districts — with live Google Maps integration and an AI chatbot that answers route questions instantly.",
    tags: ["React.js", "Google Maps API", "Groq AI Chatbot"],
    link: "https://slbustracker.vercel.app",
    linkLabel: "Open Live Site",
    bars: [70, 45, 85, 30],
  },
  {
    code: "TB",
    iconGradient: "linear-gradient(135deg,#E8C179,#D08A50)",
    status: "Live in production",
    statusColor: "text-signal",
    title: "TimeBank",
    description:
      "Sri Lanka's first time-exchange platform — people trade skills for time credits instead of money. Secure auth, real-time messaging, and support for 8 languages.",
    tags: ["React.js", "Node.js", "MongoDB Atlas", "JWT Auth"],
    link: "https://timebank-app.vercel.app",
    linkLabel: "Open Live Site",
    bars: [60, 80, 40, 55],
  },
  {
    code: "LM",
    iconGradient: "linear-gradient(135deg,#6C63FF,#F72585)",
    status: "In active development",
    statusColor: "text-danger",
    title: "Lumora",
    description:
      '"Learn in moments" — an education-only social platform with an Instagram/TikTok-style feed. Built as a React PWA with a custom indigo-and-pink glassmorphism identity.',
    tags: ["React.js", "PWA", "Firebase Auth", "Cloudflare R2"],
    link: null,
    linkLabel: null,
    bars: [50, 75, 65, 35],
  },
];

export const otherProjects = [
  {
    partNo: "CA-EC01",
    status: "live",
    title: "CodeAlpha E-commerce Store",
    description:
      "Full-stack e-commerce platform built during the CodeAlpha internship — product listings, cart, and checkout, with secure authentication.",
    tags: ["MERN Stack", "Vite", "JWT Auth"],
    link: "https://github.com/ihamjth11/CodeAlpha_EcommerceStore",
  },
  {
    partNo: "CA-SM01",
    status: "live",
    title: "CodeAlpha Social Media Platform",
    description:
      "A full-stack social platform with user profiles, posts, and interactions — built on the same MERN foundation as the e-commerce task.",
    tags: ["MERN Stack", "JWT Auth"],
    link: "https://github.com/ihamjth11/CodeAlpha_SocialMedia",
  },
  {
    partNo: "LKL-01",
    status: "dev",
    title: "LankaLens",
    description:
      "A civic issue reporting platform — people photograph public problems, and AI classifies them by type and severity on a live map.",
    tags: ["React", "Flask", "Gemini API"],
    link: null,
  },
  {
    partNo: "MOS-01",
    status: "dev",
    title: "MindOS",
    description:
      "An AI Life Operating System concept — goal tracking, habit tracking, and AI coaching in one dashboard prototype.",
    tags: ["React", "Tailwind", "Groq API"],
    link: null,
  },
];

export const iotProjects = [
  {
    partNo: "IOT-01",
    title: "Smart City",
    description: "Smart City IoT prototype by integrating various sensors, microcontrollers, and automation modules to enhance urban efficiency, safety, and sustainability.",
  },
  {
    partNo: "IOT-02",
    title: "Smart Home Control & Weather Monitoring System",
    description:
      "Clap-triggered home automation using Arduino Uno and Adafruit IO.Real-time temperature, humidity, and air-quality tracking with ESP8266, DHT11, and MQ-135 sensors on a live LCD display.",
  },
  {
    partNo: "IOT-03",
    title: "Smart Dustbin & Handwashing System",
    description: "Touchless operation using ultrasonic sensors, a servo motor, and a water pump.",
  },
];

export const experience = [
  {
    date: "JUL 2026 — PRESENT",
    title: "Full Stack Development Intern",
    sub: "CodeAlpha · Remote",
  },
  {
    date: "2024 — 2025",
    title: "Freelance Designer",
    sub: "Home · Remote",
  },
  {
    date: "2025",
    title: "Data Entry Operator",
    sub: "Remote",
  },
  {
    date: "2025",
    title: "Call Center Executive",
    sub: "Adamz (Pvt) Ltd.",
  },
];

export const education = [
  {
    date: "2023 — 2025",
    title: "Pearson BTEC HND, Software Engineering",
    sub: "British College of Applied Studies",
  },
  {
    date: "2022 — 2023",
    title: "Diploma in IT & Diploma in English",
    sub: "British College of Applied Studies",
  },
  {
    date: "2007 — 2022",
    title: "O/L & A/L",
    sub: "Zahira College, Anuradhapura",
  },
];

export const certifications = [
  { name: "Introduction to Cybersecurity", issuer: "Cisco", year: "2024" },
  { name: "UI/UX Design", issuer: "Simplilearn", year: "2024" },
  { name: "Programming Languages — Python & Java", issuer: "Great Learning", year: "2024" },
  { name: "IT & English", issuer: "BCAS", year: "2022 – 2023" },
];

export const skillBanks = [
  {
    label: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "UI/UX Design"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js & Express.js", "MongoDB Atlas", "JWT Authentication", "REST APIs", "Python · Java"],
  },
  {
    label: "Hardware & Tools",
    items: ["Arduino & ESP8266", "Sensors & Actuators", "Git & GitHub", "Office 365", "Figma / Adobe Suite"],
  },
  {
    label: "Engineering Practices",
    items: ["Problem Solving", "Teamwork & Leadership", "Communication", "Time Management", "Critical Thinking"],
  },
];
