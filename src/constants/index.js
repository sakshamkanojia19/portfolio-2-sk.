import project1 from "../assets/projects/Project1.png";



export const HERO_CONTENT = ` 
I specialize in building scalable full-stack applications using React.js, Next.js, Node.js, and MongoDB, with a strong grasp of modern UI libraries like Tailwind CSS and ShadCN. Skilled in AI automation with ChatGPT, Gemini, and Python, I develop intelligent, workflow-optimizing solutions. I ensure quality with automated testing using Selenium, Postman, and Jest, and bring additional expertise in cloud computing, cybersecurity, and blockchain. Passionate about solving real-world problems through technology, I deliver secure, high-impact digital experiences.
`   
export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "   Business AI Automation Trainee",
    company: "Digital Web Solutions ",
    description: `Engineered AI-powered Automations and RPA solutions using ChatGPT, Gemini, and RAG models, Agentic AI automating workflows and 
reducing manual effort by 60%.     
• Co-develop and integrate LLM-powered Cognitive AI chatbots with dev team using Open AI, React, Node.js, Express, PostgreSQL & 
MongoDB, leveraging GenAI API and prompt engineering to deliver 3x more results, context-aware user interactions.    
• Automated complex business processes using Python, Zapier, Make, and polyglot programming—delivering scalable systems like 
cognitive AI chatbot, competitor analysis tool and hiring workflows.`,
    technologies: ["MongoDB","PostgreSQL","Node.js","Express.js","AI","Automation","Zapier","Make","RPA","LLM","Gemini","ChatGPT","Prompt Engineering","RAG","Open AI","GenAI"],
  },
  {
    year: "Jan 2025 - Mar 2025",
    role: "Full Stack Developer Intern",
    company: "Unified Mentor",
    description: `Deployed full-stack apps via CI/CD using React.js, Redux, FastAPI, Node.js, AWS(EC2), Docker, MongoDB & Socket.io, WebSocket, 
Figma, Agile & System Design boosting efficiency & user experience by 35%.   
• Participated in code reviews, maintained API and code documentation, wrote clean & efficient code increase in 60% project success rate. 
• Conducted unit testing and functional testing using selenium & Jest for web applications, reducing bugs by 40%.         
• Implemented API testing on RESTful APIs via Postman, ensuring backend accuracy by 30%. `,
    technologies: ["MERN","React","MongoDB","Node.js","Express.js","FastAPI","AWS","Docker","Agile","SDLC","Socket.io","websocket","recharts"],
  },
  {
    year: "Dec 2024 - Jan 2025",
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    description: ` Built MERN stack projects following SDLC, increasing efficiency by 35%.
 Optimized CI/CD workflows, reducing project deployment time by 20%.`,
    technologies: ["MERN","React","JavaScript","Restful API","MongoDB","Node.js","Express.js","Tailwind Css","CI/CD"],
  },{
    year: "Jan 2024 - Feb 2024",
    role: "Generative AI & Data Science Trainee",
    company: "IBM SkillBuild",
    description: `Explored Generative AI with a focus on prompt engineering and advanced techniques. Developed insightful data visualizations using Data Science principles and tools like R and RStudio, enhancing analytical capabilities.`,
    technologies: ["R", "RStudio", "Data Science", "Generative AI"],
  },
  {
    year: "Sep 2023 - Nov 2023",
    role: "Cybersecurity & Ethical Hacking Intern",
    company: "Rinex.ai",
    description: `Executed key cybersecurity tasks such as data gathering, vulnerability analysis, and network sniffing. Performed penetration testing using tools like NMAP, Wireshark, Zap, and Metasploit, ensuring secure coding standards. Conducted detailed vulnerability assessments and generated actionable reports using Zap.`,
    technologies: ["NMAP", "Wireshark", "Burp Suite", "Zap", "Metasploit"],
  },
  {
    year: "2023 - 2024",
    role: "Major Project Lead (Decentralized Cryptocurrency Exchange DApp)",
    company: "College Final Year Project",
    description: `Led the development of a decentralized cryptocurrency exchange platform, focusing on seamless MetaMask wallet integration and optimized transaction management. Implemented token slippage functionality and enhanced swapping efficiency through Agile methodologies.`,
    technologies: [
      "React.js",
      "Node.js",
      "Solidity",
      "Tailwind",
      "Ethereum Blockchain",
    ],
  },
];


export const PROJECTS = [
  {
    title: "AI-ChatBot",
    image: project1,
    category: "Tech",
    description:
      "Launched a Next.js-based AI chatbot SaaS platform for seamless user site integration, increasing engagement by 40%. Optimized performance by 30% through faster builds, efficient delivery, and automated testing.",
    technologies:["HTML","CSS","Javascript","TypeScript","Next.js","ShadCN","API","Gemini AI","AI","Framer Motion"],
      link:"https://botic-ai-chatbot.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project1,
    category: "Tech",
    description:
      "Launched a personal portfolio website to showcase design projects, increasing client and employer engagement by 40%. Enhanced performance by 30% using Vite for faster builds and optimized delivery.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Vite","Framer motion"],
    link:"https://portfolio-2-sk.vercel.app/"
  },
  {
    title: "Modern Real Estate Website",
    image: project1,
    category: "Tech",
    description:
      "Deployed a responsive real estate platform allowing users to search and book properties. Integrated advanced search filters, location services with Leaflet, and user authentication with Auth0, reducing customer search time by 30% and increasing platform feasibility by 45%. Automation testing with Selenium improved fault tolerance by 20%.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Selenium",
      "MongoDB",
      "Prisma",
      "Mantine UI",
      "MERN stack",
    ],
    link:"https://sk-homes-phi.vercel.app/"
  },
  {
    title: "Decentralized Cryptocurrency Exchange DApp",
    image: project1,
    category: "Tech",
    description:
      "Developed a decentralized cryptocurrency exchange platform with MetaMask wallet integration, improving user experience and reducing transaction time by 20%. Implemented token slippage functionality, optimizing trade fluctuation management by 15%, and enhanced swapping efficiency by 25% using Agile methodologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "API",
      "Finance",
      "Solidity",
      "Ant-Design",
      "Tailwind",
      "Ethereum Blockchain",
    ],
    link:"https://bit-exchangex.netlify.app/"
  },
  // {
  //   title: "Retail Sales & Customer Analysis",
  //   description:
  //     "Analyzed transaction data to identify sales trends and customer behavior, improving insight accuracy by 45%. Optimized data processing using Python, pandas, and NumPy, enhancing data merging and cleaning by 30%.",
  //   technologies: [
  //     "Python",
  //     "pandas",
  //     "NumPy",
  //     "Jupyter Notebook",
  //     "Excel",
  //     "Data Visualization",
  //   ],
  //   category: "Data Analyst",
  //   image: project1,
  //   link: "https://github.com/sakshamkanojia19/quantium-DA-Tasks-Project",
  // },
  // {
  //   title: "People BMI Analysis",
  //   description:
  //     "Analyzed BMI trends from demographic data, improving insight accuracy by 40%. Streamlined data processing using R and RStudio, enhancing efficiency by 35%.",
  //   technologies: ["R", "RStudio", "Data Visualization"],
  //   category: "Data Analyst",
  //   image: project1,
  //   link: "https://github.com/sakshamkanojia19/IBM-DataScience-DataAnalyst-Project",
  // },
  // {
  //   title: "Apparels Sales Dashboard",
  //   description:
  //     "Built an interactive sales dashboard to analyze purchase trends and customer segmentation, increasing sales insights by 40%. Automated reporting using advanced Excel functions, reducing manual effort by 30%.",
  //   technologies: [
  //     "Excel",
  //     "PivotTables",
  //     "Data Analysis",
  //     "Data Visualization",
  //   ],
  //   category: "Data Analyst",
  //   image: project1,
  //   link: "https://github.com/sakshamkanojia19/Data-Analyis-p3-Sales-Dashborad",
  // },
];


export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 9310277188",
  email: "sakshamkanojia2002@gmail.com",
};
