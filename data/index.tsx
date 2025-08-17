import { Mail, User, Zap } from "lucide-react";
import {
  discord,
  dribble,
  facebook,
  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
  pinterest,
  project_1,
  project_2,
  seoOptIcon,
  snapchat,
  spotify,
  perfectidLogo,
  webDesignIcon,
  webDevIcon,
  facebookIcon,

  FastAPI,
  Django,
  NextJSDark,
  JavaScript,
  HTML,
  CSS,
  Tailwind,
  Python,
  Java,
  Angular,
  PostgreSQL,
  Supabase,
  Docker,
  TypeScript,
  React,
  Gitlab,
  XLogo,
} from "@/app/assets/assets";
import { Github, Instagram, Linkedin} from "lucide-react";

import {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  socialBrandsTypes,
} from "@/types";
import { socialListsTypes } from "@/types";
import { pagesListsType } from "@/types";


//TODO ADD MORE PAGES SUCH AS BLOG
export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "Instagram",
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/ks.guo510/",
  },
  {
    id: 2,
    title: "Github",
    icon: <Github size={22} />,
    link: "https://www.github.com/ksguo",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/in/kesheng-guo/",
  },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Dribbble",
    icon: dribble,
    link: "https://dribbble.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Projects Completed",
    value: 10,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 1,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 6,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "2024-03 - 2024-08",
    title: "Student Software Developer",
    company: "Perfect-iD GmbH",
    label: "Data-Exchange",
    description:
      "Contributed to the development of a consumer-oriented web service that processes supermarket receipts and generates user-friendly summaries.",
    link: "https://www.perfect-id.com/",
    logo: perfectidLogo,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "FastAPI",
    description: "Web Framework ",
    logo: FastAPI,
    link: "https://www.fastapi.com",
  },
  {
    id: 2,
    title: "Django",
    description: "Python Web Framework",
    logo: Django,
    link: "https://www.djangoproject.com/",
  },
  {
    id: 3,
    title: "Next.js",
    description: "React Framework for Production",
    logo: NextJSDark,
    link: "https://nextjs.org/",
  },
  {
    id: 4,
    title: "JavaScript",
    description: "Programming Language",
    logo: JavaScript,
    link: "https://www.javascript.com/",
  },
  {
    id: 5,
    title: "HTML",
    description: "Markup Language",
    logo: HTML,
    link: "https://www.w3.org/TR/html52/",
  },
  {
    id: 6,
    title: "CSS",
    description: "Style Sheet Language",
    logo: CSS,
    link: "https://www.w3.org/Style/CSS/",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    description: "Utility-First CSS Framework",
    logo: Tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    id: 8,
    title: "Python",
    description: "Programming Language",
    logo: Python,
    link: "https://www.python.org/",
  },
  {
    id: 9,
    title: "Java",
    description: "Programming Language",
    logo: Java,
    link: "https://www.java.com/",
  },
  {
    id: 10,
    title: "Angular",
    description: "Web Framework",
    logo: Angular,
    link: "https://angular.io/",
  },
  {
    id: 11,
    title: "PostgreSQL",
    description: "Relational Database",
    logo: PostgreSQL,
    link: "https://www.postgresql.org/",
  },
  {
    id: 12,
    title: "Supabase",
    description: "Open Source Firebase ",
    logo: Supabase,
    link: "https://supabase.com/",
  },
  {
    id: 13,
    title: "Docker",
    description: "Containerization Platform",
    logo: Docker,
    link: "https://www.docker.com/",
  },
  {
    id: 14,
    title: "TypeScript",
    description: "Programming Language",
    logo: TypeScript,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 15,
    title: "React",
    description: "JavaScript Library for Building User Interfaces",
    logo: React,
    link: "https://reactjs.org/",
  },
  {
    id: 16,
    title: "GitLab",
    description: "Web-based DevOps Lifecycle Tool",
    logo: Gitlab,
    link: "https://about.gitlab.com/",
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    icon: webDesignIcon,
    link: "/services",
  },
  {
    id: 2,
    title: "API Development",
    description:
      "Designing and building scalable, secure, and well-documented RESTful APIs.",
    icon: webDevIcon,
    link: "/services",
  },
  {
    id: 3,
    title: 'Database Design and Integration',
    description: 'Modeling efficient database schemas and integrating with SQL and NoSQL.',
    icon: graphicDesignIcon,
    link: "/services",
  },
  {
    id: 4,
    title: 'Content Management System',
    description: 'Building and integrating CMS for seamless content delivery.',
    icon: seoOptIcon,
    link: "/services",
  }

];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: "Intelligence Spend",
    description:
      "AI-driven insights for smarter spending.",
    link: "intelligence-spend-frontend.vercel.app/",
    linkText: "Intelligence Spend",
    type: "Finance",
    theme: "Dark",
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Showcasing my work and projects.",
    link: "portfolio-alpha-sepia-44.vercel.app/",
    linkText: "Portfolio",
    type: "Portfolio",
    theme: "Light",
    pages: 5,
    image: project_2,
  },
];



export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: "Web Development",
    price: "$50",
    description:
      "Building responsive and high-performance web applications.",
    completedWorks: "25+",
    experience: "5+",
    totalHoursWorked: "500 hours",
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: "API Development",
    price: "$60",
    description:
      "Designing and building scalable, secure, and well-documented RESTful APIs.",
    completedWorks: "30+",
    experience: "6+",
    totalHoursWorked: "420 hours",
    icon: webDevIcon,
  },
  {
    id: 3,
    service: "Database Design",
    price: "$40",
    description:
      "Modeling efficient database schemas and integrating with SQL and NoSQL.",
    completedWorks: "40+",
    experience: "8+",
    totalHoursWorked: "328 hours",
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: "CMS",
    price: "$70",
    description:
      "Building and integrating CMS for seamless content delivery.",
    completedWorks: "20+",
    experience: "4+",
    totalHoursWorked: "223 hours",
    icon: seoOptIcon,
  },
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer:
      "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer:
      "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer:
      "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "12.6K",
    url: "https://twitter.com/",
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "8.3K",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "2.5K",
    url: "https://www.linkedin.com/",
    icon: linkedInIcon,
  },
  {
    platform: "Facebook",
    followers: "3.2K",
    url: "https://www.facebook.com/",
    icon: facebookIcon
  },
];
