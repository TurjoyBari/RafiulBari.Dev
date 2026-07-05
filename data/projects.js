export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
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
    id: "vigor",
    name: "Vigor",
    category: "business",
    image: "https://i.ibb.co.com/BVL7RQQ8/device-mockup-1-5x-postspark-2026-07-05-09-42-07.png",
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
    id: "shopnova",
    name: "ShopNova",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    shortDescription:
      "Modern e-commerce platform with real-time inventory, cart management, and secure checkout.",
    overview:
      "ShopNova is a full-featured online retail platform designed for seamless shopping experiences. It includes product catalogs, wishlists, order tracking, and an admin panel for inventory management.",
    keyFeatures: [
      "Dynamic product filtering and search",
      "Secure Stripe payment integration",
      "Real-time inventory tracking",
      "Admin dashboard with sales analytics",
    ],
    date: "2025 (6 Weeks)",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    description:
      "Optimized for performance with SSR, image optimization, and lazy-loaded product grids.",
    links: {
      live: "https://shopnova-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/shopnova",
      serverRepo: null,
    },
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    ],
  },
  {
    id: "devpulse",
    name: "DevPulse Blog",
    category: "blogs",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    shortDescription:
      "A developer-focused blog platform with markdown support, tags, and reading analytics.",
    overview:
      "DevPulse is a technical blog and media outlet for developers. It features rich markdown editing, code syntax highlighting, tag-based navigation, and newsletter subscriptions.",
    keyFeatures: [
      "Markdown editor with live preview",
      "Syntax-highlighted code blocks",
      "Tag and category filtering",
      "Newsletter subscription system",
    ],
    date: "2024 (3 Weeks)",
    role: "Frontend Developer",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    description:
      "Built with static generation for blazing-fast page loads and excellent SEO performance.",
    links: {
      live: "https://devpulse-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/devpulse",
      serverRepo: null,
    },
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ],
  },
  {
    id: "creatorspace",
    name: "CreatorSpace",
    category: "portfolios",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    shortDescription:
      "A premium portfolio template for creative professionals with animated sections.",
    overview:
      "CreatorSpace is a stunning personal portfolio website designed for designers, developers, and creatives. It features glassmorphism UI, smooth animations, and a project showcase gallery.",
    keyFeatures: [
      "Animated hero with typewriter effect",
      "Filterable project gallery",
      "Contact form with validation",
      "Dark mode with gradient accents",
    ],
    date: "2025 (2 Weeks)",
    role: "Frontend Developer",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "HeroUI"],
    description:
      "Crafted with pixel-perfect attention to detail and luxury micro-interactions throughout.",
    links: {
      live: "https://creatorspace-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/creatorspace",
      serverRepo: null,
    },
    screenshots: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    ],
  },
  {
    id: "learnhub",
    name: "LearnHub",
    category: "education",
    image: "https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription:
      "An e-learning platform with course management, progress tracking, and video lessons.",
    overview:
      "LearnHub is an educational platform that enables instructors to create and sell courses. Students can enroll, track progress, take quizzes, and earn certificates upon completion.",
    keyFeatures: [
      "Video course player with progress tracking",
      "Interactive quizzes and assessments",
      "Instructor dashboard and analytics",
      "Certificate generation on completion",
    ],
    date: "2025 (8 Weeks)",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "MongoDB", "Express", "AWS S3"],
    description:
      "Scalable architecture supporting thousands of concurrent learners with CDN-delivered video content.",
    links: {
      live: "https://learnhub-demo.vercel.app",
      clientRepo: "https://github.com/rafiulbariturjo/learnhub-client",
      serverRepo: "https://github.com/rafiulbariturjo/learnhub-server",
    },
    screenshots: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
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
