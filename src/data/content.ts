export const profile = {
  name: "Rushil Krishna Sai Narendula",
  tagline: "Math & Computing @ IIT Dharwad — Systems, Databases, and Competitive Programming",
  blurb:
    "B.Tech student in Mathematics and Computing at IIT Dharwad, building at the intersection of database systems research and full-stack software engineering. Currently digging into query-workload synthesis and benchmarking, mentoring 100+ juniors as Wing Lead of the Competitive Programming Wing, and leveling up into deep learning and generative AI.",
  location: "Dharwad, Karnataka, India",
  email: "rushilkrishnasainarendula@gmail.com",
  phone: "+91-9059830764",
  resumeUrl: "/Rushil_Narendula_Resume.pdf",
  links: {
    github: "https://github.com/Rushilx03",
    linkedin: "https://www.linkedin.com/in/rushil-krishna-sai-narendula-4a2893323/",
    leetcode: "https://leetcode.com/u/RushilN/",
    codeforces: "https://codeforces.com/profile/rushil3",
  },
};

export const education = {
  institution: "Indian Institute of Technology Dharwad",
  degree: "B.Tech in Mathematics and Computing",
  period: "Jul 2024 – May 2028",
  cgpa: "9.64 / 10",
  coursework: [
    "Probability & Statistics",
    "Linear Algebra (AP)",
    "DBMS",
    "Data Structures & Algorithms",
    "Design & Analysis of Algorithms (AP)",
    "Operating Systems",
    "Computer Networks",
    "Computer Architecture",
    "Numerical Methods",
    "Data Analysis",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "C", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Systems & Networking",
    items: ["Process Management", "System Calls", "IPC", "Linux", "x86 Assembly", "TCP/IP", "DNS", "Routing"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "DuckDB", "Query Optimization", "EXPLAIN/ANALYZE Profiling"],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "CNNs/RNNs", "Bayesian Optimization"],
  },
  {
    category: "Backend & Frontend",
    items: ["Node.js", "Express.js", "REST APIs", "React", "Next.js", "FastAPI"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
];

export const experience = [
  {
    role: "Research Intern — Evaluating Custom SQL Query Workload Generators for Database Benchmarking",
    org: "Indian Institute of Technology Hyderabad",
    period: "May 2026 – Present",
    link: { label: "Code", url: "https://github.com/Rushilx03/Application-aware-Benchmarking" },
    points: [
      "Studied how realistic synthetic SQL workloads can be generated and evaluated in a principled manner for database benchmarking",
      "Explored recent workload generation approaches — SQLStorm, RedBench, and SQLBarber — working primarily with SQLBarber as the base framework",
      "Developed techniques and supporting tooling for evaluating synthetic SQL workloads beyond the original framework, enabling automated analysis and large-scale experimentation",
      "Gained hands-on exposure to query execution, database benchmarking, and systems research; advised by Dr. Anupam Sanghi, with mentorship from Mayank Yadav and Jaideep Kaler, Dept. of CSE, IIT Hyderabad",
    ],
  },
  {
    role: "Research Intern — Mathematical Foundations of Machine Learning",
    org: "Indian Institute of Technology Indore",
    period: "Dec 2024 – Jan 2025",
    points: [
      "Implemented matrix decomposition techniques (Gram-Schmidt, QR) and validated core ML algorithms (KNN, SVM, linear/logistic regression) against expected outputs; certificate of completion awarded",
    ],
  },
];

export const projects = [
  {
    name: "Facial Recognition under Varying Illumination",
    stack: "PyTorch, Scikit-learn, OpenCV, PCA",
    points: [
      "Benchmarked 5 modeling approaches on a 16,000+ image dataset spanning 28 subjects; fine-tuned ResNet50 reached 98.13% accuracy, outperforming a custom 5-block CNN (96.13%)",
      "Built PCA-based Eigenface dimensionality reduction (450 components, ~95% variance retained), achieving 91.06% accuracy with SVM (RBF kernel) and 83.15% with KNN",
      "Built a FaceNet embedding pipeline with CLAHE and gamma-correction preprocessing to recover facial features under heavy shadow occlusion",
    ],
    links: [{ label: "Code", url: "https://github.com/Rushilx03/face-recognition-ml" }],
    featured: true,
  },
  {
    name: "UNIHUB — University Community Platform",
    stack: "Node.js, Express.js, MongoDB, JWT, OAuth",
    points: [
      "Implemented JWT and Google OAuth authentication with role-based access control across the platform",
      "Designed MongoDB schemas and REST APIs for threaded discussions, nested comments, and permission management on a production-deployed platform",
    ],
    links: [{ label: "Demo", url: "https://codingclub.iitdh.ac.in/peerhive/" }],
    featured: true,
  },
  {
    name: "TravelNext — Tourist Listing and Review Platform",
    stack: "Node.js, Express, MongoDB, EJS, Joi",
    points: [
      "Built a full-stack MVC application with RESTful CRUD architecture, independently deployed to Render with MongoDB Atlas",
      "Designed centralized Joi validation middleware and error-handling logic to enforce data integrity across API endpoints",
    ],
    links: [
      { label: "Code", url: "https://github.com/Rushilx03/tourist-app" },
      { label: "Demo", url: "https://tourist-app-xmgv.onrender.com/listings" },
    ],
    featured: true,
  },
  {
    name: "Adaptive Academic System",
    stack: "React, Node.js",
    points: [
      "Built a student productivity platform integrating AI-powered resume generation, DSA scheduling, GPA planning, flashcards, and academic analytics",
      "Implemented authentication, gamification mechanics, and real-time progress tracking to drive user engagement",
    ],
    links: [],
    badge: "3rd Place — DevHack 7.0",
    featured: false,
  },
];

export const competitiveProgramming = {
  summary:
    "680+ algorithmic problems solved, with contest-tested experience in graph algorithms, dynamic programming, and greedy algorithms.",
  stats: [
    { label: "LeetCode", value: "500+ solved", sub: "Rating 1650+", url: "https://leetcode.com/u/RushilN/" },
    { label: "Codeforces", value: "180+ solved", sub: "Rating 1056", url: "https://codeforces.com/profile/rushil3" },
    { label: "Total Problems", value: "680+", sub: "DP · Graphs · Greedy" },
  ],
};

export const leadership = [
  {
    title: "Head, Competitive Programming Wing — Coding Club, IIT Dharwad",
    detail: "Organize daily DSA practice, contest mashups, and mentor 100+ juniors.",
  },
  {
    title: "3rd Place, DevHack 7.0 Hackathon",
    detail: "Placed among 40+ teams.",
  },
  {
    title: "Participant, Smart India Hackathon (SIH) 2025",
    detail: "National-level hackathon.",
  },
  {
    title: "6 AP (Highest Distinction) Grades",
    detail: "Including Design & Analysis of Algorithms and Linear Algebra. Member, Quiz Club.",
  },
];
