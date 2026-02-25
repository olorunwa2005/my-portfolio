import profileImg from '../assets/images/profile.jpg';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'My Skills', href: '#skills' },
  { name: 'My Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Ongoing Course', href: '#course' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  name: "Justice",
  title: "Front-End Developer",
  subtitle: "Building Modern & Scalable Web Interfaces",
  resumeLink: "/cv.pdf",
};

export const ABOUT_DATA = {
  image: profileImg,
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
  ],
};

export const SKILLS_DATA = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 100 },
  { name: 'Tailwind', level: 100 },
  { name: 'JavaScript', level: 97 },
  { name: 'React.js', level: 83 },
  { name: 'Bootstrap', level: 60 },
];

export const PROJECTS_DATA = [
  {
    title: "EcoSphere Dashboard",
    description: "A sustainable energy monitoring dashboard with real-time data visualization and smart grid management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Recharts", "Framer Motion"],
    demo: "https://eco-sphere-dashboard.vercel.app/",
    github: "https://github.com/olorunwa2005"
  },
  {
    title: "Nova E-Commerce",
    description: "Premium fashion marketplace featuring high-performance image optimization and seamless checkout flow.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    tags: ["Next.js", "Shadcn UI", "Stripe", "Supabase"],
    demo: "https://github.com/olorunwa2005",
    github: "https://github.com/olorunwa2005"
  },
  {
    title: "Cipher Messenger",
    description: "End-to-end encrypted messaging application with focus on privacy and minimalist user interface.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "WebRTC", "Socket.io", "Tailwind"],
    demo: "https://github.com/olorunwa2005",
    github: "https://github.com/olorunwa2005"
  }
];

export const EXPERIENCE_DATA = [
  {
    title: "Front-End Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Specializing in React, Tailwind, and modern UI/UX design. Delivering high-performance web applications for various clients.",
    type: "work"
  },
  {
    title: "Junior Web Developer",
    company: "Tech Solutions",
    period: "2022 - 2023",
    description: "Worked on building responsive landing pages and integrating front-end components with back-end APIs.",
    type: "work"
  },
  {
    title: "Web Development Bootcamp",
    company: "Online Academy",
    period: "2021 - 2022",
    description: "Intensive training in modern web technologies including JavaScript, React, and CSS architectures.",
    type: "education"
  }
];

export const COURSES_DATA = [
  {
    title: "Node.js & Express.js",
    desc: "Building scalable server-side systems and RESTful APIs with focus on performance.",
    status: "In Progress"
  },
  {
    title: "Supabase & Database Design",
    desc: "Structuring complex data models and leveraging BaaS for rapid development.",
    status: "Core Concepts"
  },
  {
    title: "Authentication Systems",
    desc: "Implementing secure JWT and OAuth flows for modern web security.",
    status: "Exploring"
  }
];

export const CONTACT_DATA = {
  email: "olorunwajustice@gmail.com",
  phone: "+2349031441606",
  location: "Nigeria",
  socials: [
    { name: "Github", href: "https://github.com/olorunwa2005", platform: "github" },
    { name: "Linkedin", href: "#", platform: "linkedin" },
    { name: "Twitter", href: "#", platform: "twitter" }
  ]
};
