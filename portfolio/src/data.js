// All portfolio content lives here. To add a new project or experience entry,
// just add a new object to the relevant array below — no need to touch any component.

export const flagshipProjects = [
  {
    code: "LK",
    iconGradient: "linear-gradient(135deg,#5FE0CB,#3AA894)",
    status: "Live in production",
    statusColor: "text-signal",
    title: "Lankora",
    description:
      "A complete Sri Lanka travel + bus companion — 257 verified routes across all 25 districts, an AI travel assistant, live user reviews, multi-stop transfer planning, and a Book page for buses, trains, and hotels. The redesigned evolution of my original SL Bus Tracker project.",
    tags: ["React.js", "Google Maps API", "Groq AI Chatbot", "PWA"],
    link: "https://lankora-lk.vercel.app",
    linkLabel: "Open Live Site",
    screenshot: "/screenshots/lankora.png",
    logo: "/logos/lankora.png",
    bars: [75, 55, 90, 40],
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
    screenshot: "/screenshots/timebank.png",
    logo: "/logos/timebank.png",
    bars: [60, 80, 40, 55],
  },
  {
    code: "SK",
    iconGradient: "linear-gradient(135deg,#5FE0CB,#7A5334)",
    status: "Live in production",
    statusColor: "text-signal",
    title: "Skilloop",
    description:
      "An AI mentor platform that teaches by generating real mini-projects, Socratic style — 4 specialized AI agents guide learners through hands-on practice instead of passive lessons.",
    tags: ["MERN Stack", "Groq (LLaMA 3.3 70B)", "AI Agents", "JWT Auth"],
    link: "https://skilloop-iota.vercel.app",
    linkLabel: "Open Live Site",
    screenshot: "/screenshots/skilloop.png",
    logo: null,
    bars: [65, 85, 50, 70],
  },
  {
    code: "VY",
    iconGradient: "linear-gradient(135deg,#6C63FF,#F72585)",
    status: "Live in production",
    statusColor: "text-signal",
    title: "Veysh",
    description:
      "A browser-based AR project — no install needed. Hero gesture controls (Spider-Man's web-shot, Iron Man's repulsor blast, Thor's lightning, and more) powered by real-time hand tracking, straight in the browser.",
    tags: ["React.js", "MediaPipe", "Canvas API", "Framer Motion"],
    link: "https://veysh.vercel.app",
    linkLabel: "Open Live Site",
    screenshot: "/screenshots/veysh.png",
    logo: null,
    bars: [55, 70, 85, 45],
  },
];

export const otherProjects = [
  {
    partNo: "LUM-01",
    status: "dev",
    linkLabel: "Open Live Site",
    title: "Lumora",
    description:
      '"Learn in moments" — an education-only social platform with an Instagram/TikTok-style feed. Custom indigo-and-pink glassmorphism identity, live and actively growing.',
    tags: ["React.js", "PWA", "Firebase Auth", "Cloudinary"],
    link: "https://lumora-orpin-tau.vercel.app",
  },
  {
    partNo: "TS-01",
    status: "dev",
    linkLabel: "View on GitHub",
    title: "TrapSight",
    description:
      "An AI + Cybersecurity phishing URL detector — Chrome extension that scans any URL in real time and explains WHY it's flagged. Random Forest model at 96.94% accuracy on 11,430 URLs.",
    tags: ["Python", "Scikit-learn", "Flask API", "Chrome Extension"],
    link: "https://github.com/ihamjth11/TrapSight",
  },
  {
    partNo: "IAI-01",
    status: "live",
    linkLabel: "View on GitHub",
    title: "Multi-Agent Internship Finder AI",
    description:
      "A Python multi-agent system — Researcher, Matcher, and Reporter agents work together using Google Gemini to find and rank internships that fit a given profile.",
    tags: ["Python", "Gemini API", "Multi-Agent AI"],
    link: "https://github.com/ihamjth11/internship-agent-ai",
  },
  {
    partNo: "LKL-01",
    status: "dev",
    linkLabel: "View on GitHub",
    title: "LankaLens",
    description:
      "A civic issue reporting platform — people photograph public problems, and AI classifies them by type and severity on a live map. ~90% complete.",
    tags: ["React", "Flask", "Gemini API"],
    link: null,
  },
  {
    partNo: "MOS-01",
    status: "dev",
    linkLabel: "View on GitHub",
    title: "MindOS",
    description:
      "An AI Life Operating System concept — goal tracking, habit tracking, and AI coaching in one dashboard prototype.",
    tags: ["React", "Tailwind", "Groq API"],
    link: null,
  },
  {
    partNo: "CA-EC01",
    status: "live",
    linkLabel: "View on GitHub",
    title: "CodeAlpha E-commerce Store",
    description:
      "Full-stack e-commerce platform — product listings, cart, and checkout, with secure authentication.",
    tags: ["MERN Stack", "Vite", "JWT Auth"],
    link: "https://github.com/ihamjth11/CodeAlpha_EcommerceStore",
  },
  {
    partNo: "CA-SM01",
    status: "live",
    linkLabel: "View on GitHub",
    title: "CodeAlpha Social Media Platform",
    description:
      "A full-stack social platform with user profiles, posts, and interactions — built on the same MERN foundation as the e-commerce task.",
    tags: ["MERN Stack", "JWT Auth"],
    link: "https://github.com/ihamjth11/CodeAlpha_SocialMedia",
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
      "Clap-triggered home automation using Arduino Uno and Adafruit IO. Real-time temperature, humidity, and air-quality tracking with ESP8266, DHT11, and MQ-135 sensors on a live LCD display.",
  },
  {
    partNo: "IOT-03",
    title: "Smart Dustbin & Handwashing System",
    description: "Touchless operation using ultrasonic sensors, a servo motor, and a water pump.",
  },
];

export const experience = [
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
    label: "Currently Growing",
    items: [
      "AI & Machine Learning",
      "Cybersecurity",
      "Cloud (AWS · GCP · Azure)",
      "DevOps (Docker · CI/CD · Linux)",
      "Next.js",
    ],
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