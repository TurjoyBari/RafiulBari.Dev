export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI Integrated Projects" },
  { id: "ecommerce", label: "E-Commerce & Retail" },
  { id: "business", label: "Business & Corporate" },
  { id: "blogs", label: "Blogs & Media Outlets" },
  { id: "portfolios", label: "Portfolios & Personal Sites" },
  { id: "education", label: "Educational & E-Learning" },
  { id: "social", label: "Social Media & Community Forums" },
  { id: "landing", label: "Landing Pages & Event Sites" },
];

export const PROJECTS = [
  {
    id: "ai-mock-interview",
    name: "AI Mock Interview",
    category: "ai",
    image: "https://i.ibb.co.com/pq4cRc1/AIMock.png",
  
    shortDescription:
      "A production-ready AI-powered interview preparation platform featuring voice & text interviews, ATS resume analysis, coding challenges, personalized feedback, and interview analytics.",
  
    overview:
      "AI Mock Interview is a comprehensive full-stack interview preparation platform built to simulate real-world software engineering interviews. Users can practice Technical, HR, Behavioral, Coding, System Design, Frontend, Backend, and Full-Stack interviews through intelligent AI-powered conversations. The platform provides personalized interview sessions, real-time voice and text interactions, ATS resume analysis, coding assessments, detailed interview reports, and progress analytics to help users improve their interview performance and confidence.",
  
    keyFeatures: [
      "AI-powered mock interviews with dynamic follow-up questions and personalized feedback",
      "Voice & Text interview modes using Speech-to-Text and Text-to-Speech for realistic interview simulations",
      "Topic-based interview generation with customizable topics, difficulty levels, and question distribution",
      "Integrated coding interview environment with AI-assisted code evaluation and technical assessments",
      "ATS Resume Analyzer with Resume vs Job Description matching and actionable improvement suggestions",
      "Comprehensive interview reports featuring ideal answers, strengths, weaknesses, AI insights, and personalized learning roadmaps",
      "Progress tracking dashboard with interview analytics, weak topic detection, interview readiness score, and performance trends",
      "Secure authentication, responsive design, and modern UI optimized for desktop, tablet, and mobile devices"
    ],
  
    date: "2026 (6+ Weeks)",
  
    role: "Full-Stack AI Developer",
  
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Prisma ORM",
      "PostgreSQL",
      "Clerk Authentication",
      "Google Gemini API",
      "Speech-to-Text",
      "Text-to-Speech",
      "UploadThing",
      "Vercel"
    ],
  
    description:
      "Developed a production-ready AI-powered interview preparation platform that delivers realistic interview experiences through intelligent AI conversations. The application supports multiple interview types, customizable topic-based interview generation, Voice & Text modes, ATS resume analysis, coding interviews, detailed AI feedback, interview reports, and performance analytics. Built with a scalable architecture, secure authentication, optimized database design, and a modern responsive user experience.",
  
    links: {
      live: "https://ai-mock-interview-rust-one.vercel.app/",
      clientRepo: "https://github.com/TurjoyBari/ai-mock-interview",
      serverRepo: "https://github.com/TurjoyBari/ai-mock-interview",
    },
  
    screenshots: [
      "https://i.ibb.co.com/wNV9pRJk/Ai-Mock-Home.png",
      "https://i.ibb.co.com/cKmcMvgC/Ai-Mock-Feture.png",
      "https://i.ibb.co.com/MkNYCs6T/Ai-Mock-Dashbord.png",
      "https://i.ibb.co.com/jPbMJLYD/Ai-Mock-Interview.png",
      "https://i.ibb.co.com/yBFp5T3r/Ai-Mock-Interview-Text.png",
      "https://i.ibb.co.com/39WQ9154/Ai-Mock-Interview-Voice.png",
      "https://i.ibb.co.com/GfS378QJ/Ai-Mock-Report.png",
      "https://i.ibb.co.com/b5Y2xyBG/Ai-Mock-Details.png",
      "https://i.ibb.co.com/GgBb7kh/AIMock.png"
    ],
  },
  {
    id: "vigor",
    name: "Vigor",
    category: "business",
    image: "https://i.ibb.co.com/Z6hL5Lfk/Vigor.png",
    shortDescription:
      "A modern full-stack fitness and gym management platform with role-based dashboards, class booking, payments, and community engagement.",
    overview:
      "Vigor is a comprehensive fitness and gym management platform designed for fitness enthusiasts, trainers, and administrators. Users can explore fitness classes, book sessions, save favorites, participate in community discussions, and manage their fitness journey. Trainers can create and manage classes, while administrators oversee users, trainers, classes, payments, and platform activities through dedicated dashboards.",
    keyFeatures: [
      "Role-based authentication and dashboards for User, Trainer, and Admin",
      "Fitness class booking with secure Stripe payment integration",
      "Advanced class search, category filtering, and favorite management",
      "Trainer application workflow with admin approval and moderation",
      "Interactive community forum with posts, comments, likes, and replies",
      "Admin dashboard for managing users, trainers, classes, and transactions"
    ],
    date: "2026 (4 Weeks)",
    role: "Full-Stack MERN Developer",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Better Auth",
      "JWT",
      "Stripe"
    ],
    description:
      "Developed a production-ready full-stack fitness management platform featuring secure authentication, role-based access control, online class booking, Stripe payment integration, community forum, trainer management, and responsive dashboards. Focused on scalable architecture, optimized performance, and modern UI/UX.",
    links: {
      live: "https://vigor-client.vercel.app/",
      clientRepo: "https://github.com/TurjoyBari/vigor-client",
      serverRepo: "https://github.com/TurjoyBari/vigor-server",
    },
    screenshots: [
      "https://i.ibb.co.com/JwkfvqfJ/Screenshot-2026-07-05-092855.png",
      "https://i.ibb.co.com/nMJHLcp2/Screenshot-2026-07-05-092945.png",
      "https://i.ibb.co.com/PvDVz39Y/Screenshot-2026-07-05-093022.png",
      "https://i.ibb.co.com/3m4B1bmn/Screenshot-2026-07-05-093111.png",
      "https://i.ibb.co.com/h3Sgzw5/device-mockup-1-5x-postspark-2026-07-05-09-51-24.png",
    ],
  },
  {
    id: "dreams-car",
    name: "Dreams Car",
    category: "business",
  
    image: "https://i.ibb.co.com/20GmP2BB/Dream-Car-Dashbord.png",
  
    shortDescription:
      "A modern full-stack car marketplace platform that enables users to explore, search, compare, and manage vehicle listings through a responsive and user-friendly interface.",
  
    overview:
      "Dreams Car is a full-stack automotive marketplace designed to simplify the car buying experience. Users can browse available vehicles, search using advanced filters, explore detailed specifications, save favorite cars, and view comprehensive vehicle information. The platform focuses on delivering a seamless browsing experience with modern UI/UX, responsive design, and optimized performance.",
  
    keyFeatures: [
      "Browse and explore a wide range of vehicle listings with detailed specifications",
      "Advanced search, filtering, sorting, and category-based car discovery",
      "Detailed vehicle pages featuring specifications, pricing, images, and key information",
      "Responsive user interface optimized for desktop, tablet, and mobile devices",
      "Modern dashboard for managing listings, favorites, and user activities",
      "Fast loading performance with optimized images and smooth user experience"
    ],
  
    date: "2026 (3–4 Weeks)",
  
    role: "Full-Stack MERN Developer",
  
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Firebase",
      "Vercel"
    ],
  
    description:
      "Developed a production-ready full-stack car marketplace platform that enables users to search, filter, and explore vehicle listings through a clean and intuitive interface. The application emphasizes responsive design, scalable architecture, optimized performance, and an engaging user experience for discovering and managing cars.",
  
    links: {
      live: "https://dreams-car-client.vercel.app/",
      clientRepo: "https://github.com/TurjoyBari/dreamscar-client",
      serverRepo: "https://github.com/TurjoyBari/dreamscar-server",
    },
  
    screenshots: [
      "https://i.ibb.co.com/4RmhJ5QG/Dream-Car-Explore.png",
      "https://i.ibb.co.com/3x2Z5mb/Dream-Car-Details.png",
      "https://i.ibb.co.com/Gf09GpG6/Dream-Car-Booking.png",
      "https://i.ibb.co.com/ksvCPJqR/Dream-Car-Add.png",
      "https://i.ibb.co.com/20GmP2BB/Dream-Car-Dashbord.png",
    ],
  },
  {
    id: "book-borrowing",
    name: "Book Borrowing Management System",
    category: "education",
  
    image: "https://i.ibb.co.com/vx8pF9yJ/Book-Borrowing-Dashbord.png",
  
    shortDescription:
      "A modern full-stack library management platform that enables users to discover, borrow, and manage books through an intuitive and responsive interface.",
  
    overview:
      "Book Borrowing Management System is a full-stack web application designed to simplify library operations and book borrowing. Users can browse available books, view detailed information, borrow books, monitor their borrowing history, and manage returns through a clean and user-friendly interface. The platform provides secure authentication, efficient book management, and a seamless borrowing experience for both users and administrators.",
  
    keyFeatures: [
      "Secure user authentication with role-based access control",
      "Browse, search, and filter books with detailed information",
      "Book borrowing and return management with availability tracking",
      "Admin dashboard for managing books, users, and borrowing records",
      "Real-time borrowing status updates with responsive user interface",
      "Fully responsive design optimized for desktop, tablet, and mobile devices"
    ],
  
    date: "2026 (2–3 Weeks)",
  
    role: "Full-Stack MERN Developer",
  
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST API",
      "Vercel"
    ],
  
    description:
      "Developed a production-ready full-stack library management system that streamlines book borrowing and inventory management. The application features secure authentication, efficient CRUD operations, advanced search and filtering, borrowing workflows, and an intuitive dashboard to enhance the overall user experience while maintaining a scalable and maintainable architecture.",
  
    links: {
      live: "https://book-borrowing.vercel.app/",
      clientRepo: "https://github.com/TurjoyBari/Book-Borrowing",
      serverRepo: null,
    },
  
    screenshots: [
      "https://i.ibb.co.com/8gymNbqL/Book-Borrowing-All.png",
      "https://i.ibb.co.com/s9V6g4vR/Book-Borrowing-Details.png",
      "https://i.ibb.co.com/vx8pF9yJ/Book-Borrowing-Dashbord.png",
    ],
  },
  {
    id: "digitools",
    name: "DigiTools",
    category: "landing",
  
    image: "https://i.ibb.co.com/3YMb8ScD/Digi-Tol-Dashbord.png",
  
    shortDescription:
      "A modern all-in-one digital utility platform offering a collection of productivity tools for developers, students, and everyday users through a fast, responsive, and user-friendly interface.",
  
    overview:
      "DigiTools is a comprehensive web-based utility platform designed to simplify everyday digital tasks. The application provides a wide range of useful tools, allowing users to perform common operations such as text manipulation, data conversion, calculations, encoding/decoding, and other productivity-focused tasks from a single, intuitive interface. The platform emphasizes speed, accessibility, responsive design, and an exceptional user experience.",
  
    keyFeatures: [
      "Collection of multiple productivity tools in a single application",
      "Powerful search, filtering, and category-based tool discovery",
      "Fast client-side processing with instant results",
      "Responsive and modern UI optimized for desktop, tablet, and mobile devices",
      "Clean and intuitive user experience with reusable components",
      "Optimized performance with scalable architecture and maintainable codebase"
    ],
  
    date: "2026 (3 Weeks)",
  
    role: "Frontend Developer",
  
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Vercel"
    ],
  
    description:
      "Developed a modern digital utility platform that brings together multiple productivity tools into a single, user-friendly application. The project focuses on performance, responsive design, reusable component architecture, and seamless user experience, enabling users to complete common digital tasks efficiently without switching between multiple websites.",
  
    links: {
      live: "https://digitools-alpha.vercel.app/",
      clientRepo: "https://github.com/TurjoyBari/digitools",
      serverRepo: null,
    },
  
    screenshots: [
      "https://i.ibb.co.com/BHp2kwHP/Digi-Tol-Card.png",
      "https://i.ibb.co.com/3YMb8ScD/Digi-Tol-Dashbord.png",
      "https://i.ibb.co.com/tT4G2Cfz/Digi-Tol-All.png",
    ],
  },
  {
    id: "kinkeeper",
    name: "KinKeeper",
    category: "social",
  
    image: "https://i.ibb.co.com/dsLbTqYt/Keen-Keeper-Dashbord.png",
  
    shortDescription:
      "A modern full-stack relationship management platform that helps users organize, strengthen, and manage meaningful personal connections through an intuitive and responsive interface.",
  
    overview:
      "KinKeeper is a full-stack relationship management platform designed to help users build and maintain stronger personal relationships. The application enables users to organize contacts, categorize relationships, track important events, set reminders, and manage meaningful interactions through a clean and user-friendly interface. Built with scalability, responsiveness, and modern UI/UX principles, KinKeeper provides a seamless experience across all devices.",
  
    keyFeatures: [
      "Secure authentication and personalized user dashboard",
      "Create, organize, edit, and manage relationship profiles with ease",
      "Categorize relationships and maintain detailed personal information",
      "Track important dates, reminders, and memorable events",
      "Advanced search, filtering, and sorting for quick relationship management",
      "Fully responsive and modern UI optimized for desktop, tablet, and mobile devices"
    ],
  
    date: "2026 (3 Weeks)",
  
    role: "Full-Stack MERN Developer",
  
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST API",
      "Framer Motion",
      "Vercel"
    ],
  
    description:
      "Developed a production-ready relationship management platform that enables users to organize and strengthen personal connections through intuitive relationship tracking, reminders, advanced search capabilities, and a responsive dashboard. The project focuses on clean architecture, reusable components, responsive design, and an engaging user experience.",
  
    links: {
      live: "https://kinkeeper-six.vercel.app/",
      clientRepo: "https://github.com/TurjoyBari/kinkeeper",
      serverRepo: null,
    },
  
    screenshots: [
      "https://i.ibb.co.com/dsLbTqYt/Keen-Keeper-Dashbord.png",
      "https://i.ibb.co.com/nMK7HCvV/Keen-Keeper-Friend.png",
      "https://i.ibb.co.com/cKm2sB26/Keen-Keeper-Timeline.png",
    ],
  
  },
  {
    id: "connectify",
    name: "Connectify",
    category: "social",
    image: "https://images.unsplash.com/photo-1724754608847-afa768169635?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription:
      "A community forum platform with real-time messaging, threads, and user profiles.",
    overview:
      "Connectify is a social community platform where users can create threads, join discussions, follow topics, and connect with like-minded individuals in real time.",
    keyFeatures: [
      "Real-time chat and notifications",
      "Thread-based discussion forums",
      "User profiles with activity feeds",
      "Moderation tools and reporting system",
    ],
    date: "2024 (5 Weeks)",
    role: "Full-Stack Developer",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    description:
      "Built with WebSocket-powered real-time features and optimistic UI updates for instant feedback.",
    links: {
      live: "https://connectify-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/connectify-client",
      serverRepo: "https://github.com/rafiulbariturjo/connectify-server",
    },
    screenshots: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    ],
  },
  {
    id: "launchpad",
    name: "LaunchPad",
    category: "landing",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    shortDescription:
      "A high-converting SaaS landing page with animated sections and lead capture forms.",
    overview:
      "LaunchPad is a premium landing page template for SaaS products and startup launches. It includes hero sections, feature grids, pricing tables, testimonials, and CTA funnels.",
    keyFeatures: [
      "Scroll-triggered reveal animations",
      "Pricing comparison tables",
      "Email capture with validation",
      "Mobile-first responsive design",
    ],
    date: "2024 (1 Week)",
    role: "Frontend Developer",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description:
      "Designed for maximum conversion with A/B-testable sections and Lighthouse score of 98+.",
    links: {
      live: "https://launchpad-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/launchpad",
      serverRepo: null,
    },
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    ],
  },
  {
    id: "corporatex",
    name: "CorporateX",
    category: "business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    shortDescription:
      "A corporate business website with team profiles, service pages, and client portal.",
    overview:
      "CorporateX is a professional business website for enterprise clients. It showcases services, team members, case studies, and includes a secure client portal for project management.",
    keyFeatures: [
      "Dynamic service and team pages",
      "Case study showcase with filters",
      "Secure client login portal",
      "Contact and inquiry management",
    ],
    date: "2025 (4 Weeks)",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    description:
      "Enterprise-grade architecture with role-based access control and comprehensive admin panel.",
    links: {
      live: "https://corporatex-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/corporatex",
      serverRepo: null,
    },
    screenshots: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    ],
  },
];
