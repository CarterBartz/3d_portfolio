import {
  mobile,
  backend,
  creator,
  web,
  swift,
  javascript,
  html,
  css,
  dart,
  reactjs,
  tailwind,
  java,
  git,
  figma,
  flutter,
  entuity,
  ppt,
  python3,
  menards,
  bbby,
  target,
  RSV,
  kalimba,
  coffeeandcode,
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

const certs = [
  {
    title: "Learn Swift",
    source: "~Codecademy~",
    date: "Jan. 2024",
    description: "This course is an introduction to Variables, Conditionals & Logic, Loops, Arrays & Sets, Fucntions, Structures, and Classes",
    icon: swift,
  },
  {
    title: "Python3",
    source: "~Codecademy~",
    date: "In Progress",
    description: "This course is an introduction to Control Flow, Lists, Loops, Functions, Strings, Modules, Files, and Classes",
    icon: python3,
  },
  {
    title: "Java",
    source: "~Codecademy~",
    date: "In Progress",
    description: "This course is an introduction to Object-Oriented Java, Conditionals & Control Logic, Arrays and ArrayLists, Loops, String Methods, Access, Encapsulations, Static Methods, Inheritance & Polymorphism, Debugging, and Two-Dimentional Arrays",
    icon: java,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python3",
    icon: python3,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Entuity",
    icon: entuity,
  },
];

const experiences = [
  {
    title: "QA Engineer",
    company_name: "Park Place Technologies",
    icon: ppt,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Acquire a thorough understanding of and comply with Entuity’s software development life cycle and its associated processes.",
      "Work with QA Manager and Development Manager to translate functional specifications into a thorough set of test cases, and document as appropriate using the QTest system.",
      "Continue to work closely with the Product Manager and software engineers throughout the software development life cycle to capture additional test scenarios and acceptance criteria covering both functional and non-functional requirements.",
      "Detailed bug reporting and providing help on reproducing issues, along with constructive feedback to software engineers.",
      "Perform manual execution of test cases, capturing the results (in QTest) and logging a detailed report for any bugs found into the defect tracking system (Jira).",
    ],
  },
  {
    title: "QA Engineer Intern",
    company_name: "Park Place Technologies",
    icon: ppt,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jun 2022",
    points: [
      "Acquire a thorough understanding of and comply with Entuity’s software development life cycle and its associated processes.",
      "Work with QA Manager and Development Manager to translate functional specifications into a thorough set of test cases, and document as appropriate using the QTest system.",
      "Continue to work closely with the Product Manager and software engineers throughout the software development life cycle to capture additional test scenarios and acceptance criteria covering both functional and non-functional requirements.",
      "Detailed bug reporting and providing help on reproducing issues, along with constructive feedback to software engineers.",
      "Perform manual execution of test cases, capturing the results (in QTest) and logging a detailed report for any bugs found into the defect tracking system (Jira).",
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
    name: "Ready, Set, Vote!",
    description:
      "This application aims to inform and involve voters. To be as unbiased as possible, we consolidate the facts and make voting that much easier! Making a one stop shop for all your voting needs!",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: RSV,
    source_code_link: "https://github.com/CarterBartz/ready_set_vote",
  },
  {
    name: "Kalimba",
    description:
      "This application is designed to assist users in effectivly managing and alleviating stress by offering a diverse range of therapeutic techniques such as journaling, mood tracking, and guided meditation!",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: kalimba,
    source_code_link: "https://github.com/CarterBartz/Kalimba",
  },
  {
    name: "Coffee and Code",
    description:
      "This application was my groups final project. We were given one week to create an app design to help developer record they're coffee consumption, as well as find coffee shops near them!",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase", 
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: coffeeandcode,
    source_code_link: "https://github.com/CarterBartz/Coffee_and_Code/tree/main",
  },
];

export { services, certs, technologies, experiences, testimonials, projects };