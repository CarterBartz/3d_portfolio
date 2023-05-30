import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ppt,
  menards,
  bbby,
  target,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "App Developer",
    icon: backend,
  },
  {
    title: "App Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cashier",
    company_name: "Target",
    icon: target,
    iconBg: "#E6DEDD",
    date: "2016 - 2017",
    points: [
      "Greet customers warmly and provide excellent customer service.",
      "Operate cash registers and handle cash transactions accurately.",
      "Scan, bag, and process items promptly and efficiently.",
      "Handle customer complaints or issues, escalating them to the appropriate supervisor if necessary.",
      "Follow all cash handling and security procedures to prevent theft or fraud.",
    ],
  },
  {
    title: "Softside Sales Associate",
    company_name: "Bed Bath & Beyond",
    icon: bbby,
    iconBg: "#E6DEDD",
    date: "Sept 2018 - Apr 2020",
    points: [
      "Provide exceptional customer service and assist customers in finding and selecting products in the soft side categories such as bedding, bath, and home decor.",
      "Maintain a deep understanding of the soft side product lines, including features, benefits, and pricing information.",
      "Ensure the sales floor is well-organized, stocked, and visually appealing.",
      "Continuously seek opportunities to improve product knowledge and enhance sales skills.",
      "Collaborate with team members to achieve sales targets and contribute to a positive working environment.",
    ],
  },
  {
    title: "Plumbing Sales Associate",
    company_name: "Menards",
    icon: menards,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Jun 2022",
    points: [
      "Greet customers, offer assistance, and provide product knowledge and recommendations related to plumbing supplies, fixtures, and equipment.",
      "Monitor inventory levels, restock shelves, and ensure the department is well-organized and visually appealing.",
      "Process customer transactions accurately and efficiently using the store's POS system.",
      "Continuously expand product knowledge and stay informed about industry trends and new plumbing technologies.",
    ],
  },
  {
    title: "QA Engineer Intern",
    company_name: "Park Place Technologies",
    icon: ppt,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Acquire a thorough understanding of and comply with Entuity’ s software development life cycle and its associated processes.",
      "Work with QA Manager and Development Manager to translate functional specifications into a thorough set of test cases, and document as appropriate using the QTest system.",
      "Continue to work closely with the Product Manager and software engineers throughout the software development life cycle to capture additional test scenarios and acceptance criteria covering both functional and non-functional requirements.",
      "Detailed bug reporting and providing help on reproducing issues, along with constructive feedback to software engineers.",
      "Perform manual execution of test cases, capturing the results (in QTest) and logging a detailed report for any bugs found into the defect tracking system (Jira).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css", 
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };