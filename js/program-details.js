document.addEventListener("DOMContentLoaded", () => {
  const courseImages = {
    "Python": "assets/images/programs/python-development.png",
    "Python Full Stack Development": "assets/images/programs/python-development.png",
    "Human Resource Management": "assets/images/programs/human-resource-management.png",
    "Finance Management": "assets/images/programs/finance-management.png",
    "Business Development Executive": "assets/images/programs/business-development-executive.png",
    "Flutter Development": "assets/images/programs/flutter-development.png",
    "Business Development Manager": "assets/images/programs/business-development-manager.png",
    "React JS Development": "assets/images/all_programs/react-js-development.png",
    "Node JS Development": "assets/images/all_programs/node-js-development.png",
    "WordPress Development": "assets/images/all_programs/wordpress-development.png",
    "Web Designer": "assets/images/all_programs/web-designer.png",
    "React Native Development": "assets/images/all_programs/react-native-development.png",
    "Next JS": "assets/images/all_programs/next-js.png",
    "Power BI": "assets/images/all_programs/power-bi.png",
    "C++": "assets/images/all_programs/c++.png",
    "Java": "assets/images/all_programs/java.png",
    "Database Management System": "assets/images/all_programs/database-management-system.png",
    "Advanced Excel": "assets/images/all_programs/advanced-excel.png",
    "SQL": "assets/images/all_programs/sql.png",
    "Graphic Design": "assets/images/all_programs/graphic-design.png",
    "DSA with C++": "assets/images/all_programs/dsa-with-c++.png",
    "DSA with Java": "assets/images/all_programs/dsa-with-java.png",
    "DSA with Python": "assets/images/all_programs/dsa-with-python.png",
    "HTML": "assets/images/all_programs/html.png",
    "CSS": "assets/images/all_programs/css.png",
    "Digital Marketing": "assets/images/all_programs/digital-marketing.png",
    "Digital Analytics": "assets/images/all_programs/digital-analytics.png",
    "Business Analytics": "assets/images/all_programs/business-analytics.png",
    "Express JS": "assets/images/all_programs/express-js.png",
    "Deep Learning": "assets/images/all_programs/deep-learning.png",
    "AI Tools": "assets/images/all_programs/ai-tools.png",
    "Docker & Kubernetes": "assets/images/all_programs/docker-&-kubernetes.png",
    "Cloud Computing with AWS": "assets/images/all_programs/cloud-computing-with-aws.png",
    "SEO": "assets/images/all_programs/seo.png",
    "Financial Analysis": "assets/images/all_programs/financial-analysis.png",
    "Canva": "assets/images/all_programs/canva.png",
    "Performance Marketing": "assets/images/all_programs/performance-marketing.png",
    "Python & Data Analysis":"assets/images/all_programs/python-and-data-analysis.png",
    "Statistics & Data Visualization":"assets/images/all_programs/statistics-and-data-visualization.png",
    "Advanced Data Science & Predictive Analytics":"assets/images/all_programs/Advanced-Data-Science-&-Predictive-Analytics.png",
    "Machine Learning Fundamentals":"assets/images/all_programs/Machine-Learning-Fundamentals.png",
    "Advanced Machine Learning & Model Optimization":"assets/images/all_programs/Advanced-Machine-Learning-&-Model-Optimization.png",
    "Machine Learning Deployment & MLOps":"assets/images/all_programs/Machine-Learning-Deployment-&-MLOps.png",
    "Generative AI & Prompt Engineering":"assets/images/all_programs/Generative-AI-&-Prompt-Engineering.png",
    "LLM Applications & RAG Development":"assets/images/all_programs/LLM-Applications-&-RAG-Development.png",
    "AI Agents & Advanced Generative AI":"assets/images/all_programs/AI-Agents-&-Advanced-Generative-AI.png",
    "R-Programming":"assets/images/all_programs/R-Programming.png",
    "Julia":"assets/images/all_programs/Julia.png",
    "PHP":"assets/images/all_programs/PHP.png",
    "C-Programming":"assets/images/all_programs/C-Programming.png",
    "Kotlin":"assets/images/all_programs/Kotlin.png",
    "Ruby":"assets/images/all_programs/Ruby.png",
    "Cybersecurity Fundamentals":"assets/images/all_programs/Cybersecurity-Fundamentals.png",
    "Ethical Hacking & Penetration Testing":"assets/images/all_programs/Ethical-Hacking-&-Penetration-Testing.png",
    "Advanced Cybersecurity & Security Operations":"assets/images/all_programs/Advanced Cybersecurity & Security Operations.png",
    "Experience Design & Interface Foundations":"assets/images/all_programs/Experience-Design-&-Interface-Foundations.png",
    "Product Design & User Experience":"assets/images/all_programs/Product-Design-&-User-Experience.png"
  };

  // Dynamic Generator for any unlisted course
  function generateDynamicCurriculum(name) {
    return [
      {
        module: "Module 1",
        title: `${name} Foundations & Basics`,
        topics: [
          `Introduction to ${name} & Core Architecture`,
          `Essential Tools, Environment Setup & Conventions`,
          `Fundamental Syntax, Data Structures & Workflows`,
          `Hands-on Guided Lab & Problem Solving`
        ]
      },
      {
        module: "Module 2",
        title: `Intermediate ${name} Concepts & Frameworks`,
        topics: [
          `Advanced Features, Functional Components & Libraries`,
          `Data Handling, API Integration & State Operations`,
          `Best Practices for Modular & Clean Development`,
          `Building Functional Prototype Project`
        ]
      },
      {
        module: "Module 3",
        title: `Industry Projects & Portfolio Mastery`,
        topics: [
          `Scalable Architecture & Industrial Standards`,
          `Testing, Debugging & Performance Optimization`,
          `Version Control & Continuous Delivery Workflows`,
          `Capstone Real-World Project & Placement Preparation`
        ]
      }
    ];
  }

  // Dedicated Program-Specific Curriculums for all courses
  const programCurriculums = {
    "Product Design & User Experience": [
  {
    module: "Module 1",
    title: "Product Discovery & User-Centered Design",
    topics: [
      "Product Design Principles, Design Thinking & User-Centered Methodologies",
      "User Research, Interviews, Personas & Customer Journey Mapping",
      "Problem Definition, User Stories & Product Requirements",
      "Information Architecture, User Flows & Wireframing"
    ]
  },
  {
    module: "Module 2",
    title: "UI Design, Prototyping & Design Systems",
    topics: [
      "Visual Design, Typography, Color Systems & Layout Principles",
      "High-Fidelity UI Design & Interactive Prototyping with Figma",
      "Design Systems, Components, Variants & Reusable UI Patterns",
      "Responsive Design, Mobile Interfaces & Cross-Platform Experiences"
    ]
  },
  {
    module: "Module 3",
    title: "Product Strategy, Usability & Design Delivery",
    topics: [
      "Usability Testing, A/B Testing & Data-Driven Design Decisions",
      "Accessibility, Inclusive Design & Experience Optimization",
      "Design Handoff, Developer Collaboration & Product Documentation",
      "Industry Capstone: Designing an End-to-End Digital Product Experience"
    ]
  }
],
    "Experience Design & Interface Foundations": [
  {
    module: "Module 1",
    title: "UX Fundamentals & Experience Design",
    topics: [
      "UX Design Principles, User-Centered Design & Design Thinking",
      "User Research, Personas, User Journeys & Problem Definition",
      "Information Architecture, User Flows & Navigation Design",
      "Wireframing, Low-Fidelity Prototypes & Usability Fundamentals"
    ]
  },
  {
    module: "Module 2",
    title: "Interface Design & Visual Systems",
    topics: [
      "UI Design Principles, Layouts, Grids & Visual Hierarchy",
      "Typography, Color Theory, Spacing & Design Consistency",
      "Components, Design Systems, UI Patterns & Responsive Interfaces",
      "High-Fidelity Prototyping & Interactive Interfaces with Figma"
    ]
  },
  {
    module: "Module 3",
    title: "Usability, Accessibility & Portfolio Development",
    topics: [
      "Usability Testing, User Feedback & Iterative Design",
      "Accessibility, Inclusive Design & Mobile-First Experiences",
      "Design Handoff, Developer Collaboration & Design Documentation",
      "Industry Capstone: Designing a Complete User Experience & Interface System"
    ]
  }
],
    "Advanced Cybersecurity & Security Operations": [
  {
    module: "Module 1",
    title: "Advanced Threat Detection & Security Operations",
    topics: [
      "Security Operations Center (SOC) Architecture & Incident Lifecycle",
      "SIEM Fundamentals, Log Analysis & Security Event Correlation",
      "Threat Intelligence, IOC Analysis & Attack Detection Techniques",
      "Endpoint Detection, Network Monitoring & Security Alert Investigation"
    ]
  },
  {
    module: "Module 2",
    title: "Incident Response, Digital Forensics & Threat Hunting",
    topics: [
      "Incident Response Planning, Containment, Eradication & Recovery",
      "Digital Forensics Fundamentals, Evidence Handling & Timeline Analysis",
      "Threat Hunting, MITRE ATT&CK Framework & Adversary Techniques",
      "Malware Analysis Fundamentals & Suspicious Activity Investigation"
    ]
  },
  {
    module: "Module 3",
    title: "Cloud Security, Risk Management & Advanced Defense",
    topics: [
      "Cloud Security Architecture, Identity Management & Access Controls",
      "Vulnerability Management, Risk Assessment & Security Hardening",
      "Security Automation, Detection Engineering & Continuous Monitoring",
      "Industry Capstone: Building & Operating an End-to-End Security Operations Center"
    ]
  }
],

    "Ethical Hacking & Penetration Testing": [
  {
    module: "Module 1",
    title: "Ethical Hacking Fundamentals & Reconnaissance",
    topics: [
      "Ethical Hacking Methodology, Scope, Authorization & Security Principles",
      "Networking, Operating Systems & Common Attack Surfaces",
      "Information Gathering, Footprinting & Passive Reconnaissance",
      "Vulnerability Discovery, Scanning & Security Assessment"
    ]
  },
  {
    module: "Module 2",
    title: "Penetration Testing & Web Security",
    topics: [
      "Network Penetration Testing, Enumeration & Security Validation",
      "Web Application Security & OWASP Top 10 Vulnerabilities",
      "Authentication, Session Security & Input Validation Testing",
      "Security Tools, Exploit Validation & Controlled Attack Simulation"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Security Testing & Professional Reporting",
    topics: [
      "Privilege Escalation Concepts & Post-Exploitation Assessment",
      "Wireless, API & Cloud Security Testing Fundamentals",
      "Risk Rating, Evidence Collection & Professional Penetration Testing Reports",
      "Industry Capstone: Conducting an Authorized End-to-End Penetration Test"
    ]
  }
],
    "Cybersecurity Fundamentals": [
  {
    module: "Module 1",
    title: "Cybersecurity Foundations & Threat Landscape",
    topics: [
      "Cybersecurity Concepts, CIA Triad & Common Security Principles",
      "Cyber Threats, Malware, Phishing, Social Engineering & Attack Vectors",
      "Networking Fundamentals, TCP/IP, DNS, HTTP & Network Security Basics",
      "Authentication, Authorization, Password Security & Access Control"
    ]
  },
  {
    module: "Module 2",
    title: "Network Security & Defensive Techniques",
    topics: [
      "Firewalls, Proxies, VPNs & Network Segmentation",
      "Encryption, Hashing, Digital Signatures & Public Key Infrastructure",
      "Endpoint Security, Secure Configurations & Vulnerability Management",
      "Security Monitoring, Logging, Incident Detection & Response"
    ]
  },
  {
    module: "Module 3",
    title: "Application Security, Risk & Security Operations",
    topics: [
      "Web Application Security, OWASP Top 10 & Secure Development Practices",
      "Risk Assessment, Security Policies & Vulnerability Management",
      "Security Auditing, Incident Response & Digital Forensics Fundamentals",
      "Industry Capstone: Designing a Comprehensive Cybersecurity Defense Strategy"
    ]
  }
],
    "Ruby": [
  {
    module: "Module 1",
    title: "Ruby Fundamentals & Object-Oriented Programming",
    topics: [
      "Ruby Syntax, Variables, Data Types, Operators & Control Flow",
      "Arrays, Hashes, Strings & Enumerable Collections",
      "Methods, Blocks, Iterators, Procs & Lambdas",
      "Classes, Objects, Inheritance, Modules & Exception Handling"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced Ruby & Web Application Development",
    topics: [
      "Ruby Gems, Bundler & Project Dependency Management",
      "File Handling, Regular Expressions & JSON Processing",
      "Database Integration, SQL & Active Record Fundamentals",
      "REST APIs, HTTP Requests & Third-Party Service Integration"
    ]
  },
  {
    module: "Module 3",
    title: "Ruby on Rails & Production Development",
    topics: [
      "Ruby on Rails Architecture, MVC & Application Routing",
      "Models, Controllers, Views, Active Record & CRUD Operations",
      "Authentication, Security, Testing & Application Optimization",
      "Industry Capstone: Building & Deploying a Complete Rails Web Application"
    ]
  }
],

    "Kotlin": [
  {
    module: "Module 1",
    title: "Kotlin Fundamentals & Object-Oriented Programming",
    topics: [
      "Kotlin Syntax, Variables, Data Types, Operators & Control Flow",
      "Functions, Lambdas, Higher-Order Functions & Null Safety",
      "Classes, Objects, Inheritance, Interfaces & Data Classes",
      "Collections, Generics & Exception Handling"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced Kotlin & Application Development",
    topics: [
      "Extension Functions, Scope Functions & Sealed Classes",
      "Coroutines, Asynchronous Programming & Structured Concurrency",
      "File Handling, Serialization & API Integration",
      "Kotlin Standard Library, Gradle & Project Architecture"
    ]
  },
  {
    module: "Module 3",
    title: "Android Development & Production Applications",
    topics: [
      "Android Fundamentals, Activities, Fragments & Jetpack Components",
      "UI Development with Jetpack Compose & Material Design",
      "Room Database, Networking, Authentication & State Management",
      "Industry Capstone: Building & Deploying a Production-Ready Kotlin Application"
    ]
  }
],
    "C-Programming": [
  {
    module: "Module 1",
    title: "C Programming Fundamentals & Core Concepts",
    topics: [
      "C Syntax, Variables, Data Types, Operators & Input/Output",
      "Conditional Statements, Loops & Control Flow",
      "Functions, Recursion & Modular Programming",
      "Arrays, Strings & Basic Problem-Solving Techniques"
    ]
  },
  {
    module: "Module 2",
    title: "Pointers, Structures & Memory Management",
    topics: [
      "Pointers, Pointer Arithmetic & Dynamic Memory Allocation",
      "Structures, Unions, Enumerations & User-Defined Data Types",
      "File Handling, Preprocessor Directives & Header Files",
      "Memory Management, Debugging & Common C Programming Errors"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced C Programming & Practical Applications",
    topics: [
      "Advanced Pointers, Function Pointers & Dynamic Data Structures",
      "Linked Lists, Stacks, Queues & Data Structure Implementation",
      "Modular Program Design, Compilation & Performance Optimization",
      "Industry Capstone: Building a Complete C-Based Application"
    ]
  }
],
    "PHP": [
  {
    module: "Module 1",
    title: "PHP Fundamentals & Server-Side Programming",
    topics: [
      "PHP Syntax, Variables, Data Types, Operators & Control Flow",
      "Functions, Arrays, Strings & Form Handling",
      "Sessions, Cookies, File Handling & Error Management",
      "PHP Project Structure, Composer & Development Environment"
    ]
  },
  {
    module: "Module 2",
    title: "Object-Oriented PHP & Database Development",
    topics: [
      "Classes, Objects, Inheritance, Interfaces & Traits",
      "MySQL Integration, Database Design & CRUD Operations",
      "Prepared Statements, Transactions & Secure Database Queries",
      "Building Dynamic Web Applications with PHP & MySQL"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced PHP, APIs & Production Development",
    topics: [
      "REST API Development, JSON Handling & Third-Party API Integration",
      "Authentication, Authorization, Password Security & Web Protection",
      "MVC Architecture, Laravel Fundamentals & Application Development",
      "Industry Capstone: Building & Deploying a Complete PHP Web Application"
    ]
  }
],

    "Julia": [
  {
    module: "Module 1",
    title: "Julia Programming Fundamentals & Data Structures",
    topics: [
      "Julia Syntax, Variables, Data Types, Operators & Control Flow",
      "Arrays, Tuples, Dictionaries, Sets & Composite Data Structures",
      "Functions, Multiple Dispatch, Scope & Exception Handling",
      "Packages, Environments & Julia Development Workflow"
    ]
  },
  {
    module: "Module 2",
    title: "Numerical Computing, Data Analysis & Visualization",
    topics: [
      "Numerical Computing with Arrays, Linear Algebra & Broadcasting",
      "DataFrames.jl for Data Cleaning, Transformation & Aggregation",
      "Statistical Analysis, Probability & Exploratory Data Analysis",
      "Data Visualization with Plots.jl, Makie & Interactive Charts"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Julia & High-Performance Applications",
    topics: [
      "Performance Optimization, Type Stability & Benchmarking",
      "Parallel Computing, Multithreading & Distributed Processing",
      "Machine Learning and Scientific Computing with Julia Ecosystem",
      "Industry Capstone: Building a High-Performance Data Analytics Application"
    ]
  }
],
    "R-Programming": [
  {
    module: "Module 1",
    title: "R Programming Fundamentals & Data Structures",
    topics: [
      "R Syntax, Variables, Data Types, Operators & Control Flow",
      "Vectors, Lists, Matrices, Arrays & Data Frames",
      "Functions, Loops, Conditional Statements & Error Handling",
      "Packages, Libraries & RStudio Development Workflow"
    ]
  },
  {
    module: "Module 2",
    title: "Data Manipulation, Statistics & Visualization",
    topics: [
      "Data Import, Cleaning & Transformation with dplyr and tidyr",
      "Descriptive Statistics, Probability & Statistical Analysis",
      "Exploratory Data Analysis with ggplot2",
      "Advanced Visualizations, Custom Themes & Data Storytelling"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced R Analytics & Industry Applications",
    topics: [
      "Statistical Testing, Correlation, Regression & ANOVA",
      "Advanced Data Modeling & Predictive Analytics with R",
      "Interactive Dashboards with Shiny & Automated Reporting",
      "Industry Capstone: End-to-End Data Analysis Project Using R"
    ]
  }
],
    "AI Agents & Advanced Generative AI": [
  {
    module: "Module 1",
    title: "AI Agents Fundamentals & LLM-Based Workflows",
    topics: [
      "AI Agent Architecture, LLM Reasoning & Autonomous Task Execution",
      "Tool Calling, Function Calling & External API Integration",
      "Memory, Context Management & Multi-Step Agent Workflows",
      "Building AI Agents with Python & Modern Agent Frameworks"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced Generative AI & Agentic Systems",
    topics: [
      "Retrieval-Augmented Generation (RAG), Embeddings & Vector Databases",
      "Multi-Agent Systems, Agent Collaboration & Task Delegation",
      "Planning, Reasoning, Reflection & Agent Decision-Making",
      "Structured Outputs, Guardrails & Reliable Agent Behavior"
    ]
  },
  {
    module: "Module 3",
    title: "Production AI Agents & Enterprise Applications",
    topics: [
      "Agent Evaluation, Observability, Error Handling & Performance Optimization",
      "Deploying AI Agents with APIs, Cloud Services & Scalable Infrastructure",
      "AI Agent Security, Prompt Injection Protection & Responsible AI",
      "Industry Capstone: Building & Deploying an Autonomous AI Agent System"
    ]
  }
],
    "Digital Marketing": [
  {
    module: "Module 1",
    title: "Digital Marketing Fundamentals & Strategy",
    topics: [
      "Digital Marketing Ecosystem, Customer Journey & Marketing Funnels",
      "Audience Research, Buyer Personas & Digital Marketing Strategy",
      "Content Marketing, Brand Positioning & Online Presence",
      "Marketing KPIs, Budget Planning & Campaign Measurement"
    ]
  },
  {
    module: "Module 2",
    title: "SEO, Social Media & Paid Advertising",
    topics: [
      "Search Engine Optimization, Keyword Research & Content Optimization",
      "Social Media Marketing, Content Planning & Community Engagement",
      "Google Ads, Meta Ads & Paid Campaign Management",
      "Email Marketing, Lead Generation & Conversion Optimization"
    ]
  },
  {
    module: "Module 3",
    title: "Analytics, Automation & Growth Marketing",
    topics: [
      "Google Analytics, Conversion Tracking & Marketing Attribution",
      "Social Media Analytics, Campaign Reporting & Performance Insights",
      "Marketing Automation, Retargeting & Customer Segmentation",
      "Industry Capstone: Planning & Executing an End-to-End Digital Marketing Campaign"
    ]
  }
],
    "Node JS Development": [
  {
    module: "Module 1",
    title: "Node.js Fundamentals & Backend Development",
    topics: [
      "Node.js Runtime, Modules, NPM & Project Architecture",
      "Asynchronous Programming, Callbacks, Promises & Async/Await",
      "File System, Events, Streams & Core Node.js Modules",
      "Building HTTP Servers & Handling Requests and Responses"
    ]
  },
  {
    module: "Module 2",
    title: "Express.js, REST APIs & Database Integration",
    topics: [
      "Express.js Routing, Middleware & REST API Architecture",
      "MongoDB, Mongoose & Database CRUD Operations",
      "Authentication, JWT, Sessions & Role-Based Authorization",
      "API Validation, Error Handling, Testing & Documentation"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Node.js & Production Deployment",
    topics: [
      "Real-Time Applications with WebSockets & Socket.IO",
      "Security, Rate Limiting, CORS & Secure API Development",
      "Performance Optimization, Logging & Production Monitoring",
      "Industry Capstone: Building & Deploying a Production-Ready Node.js Application"
    ]
  }
],
    "React JS Development": [
  {
    module: "Module 1",
    title: "React Fundamentals & Component-Based Development",
    topics: [
      "React Setup, JSX, Components, Props & Project Structure",
      "State Management, Event Handling & Component Lifecycle",
      "Hooks: useState, useEffect, useContext & Custom Hooks",
      "Forms, Lists, Conditional Rendering & Reusable Components"
    ]
  },
  {
    module: "Module 2",
    title: "Routing, APIs & Application State Management",
    topics: [
      "React Router, Nested Routes & Dynamic Navigation",
      "REST API Integration with Fetch, Axios & Async Operations",
      "Global State Management with Context API & Redux Toolkit",
      "Authentication, Form Validation & Protected Routes"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced React & Production Applications",
    topics: [
      "Performance Optimization with Memoization, Lazy Loading & Code Splitting",
      "Advanced Hooks, Error Boundaries & Component Architecture",
      "Testing, Environment Configuration & Production Build Optimization",
      "Industry Capstone: Building & Deploying a Complete React.js Application"
    ]
  }
],
    "Flutter Development": [
  {
    module: "Module 1",
    title: "Flutter Fundamentals & Mobile UI Development",
    topics: [
      "Flutter Setup, Dart Fundamentals & Project Architecture",
      "Widgets, Stateless/Stateful Components & Widget Lifecycle",
      "Layouts, Styling, Themes & Responsive Mobile Interfaces",
      "Forms, User Input, Lists & Gesture-Based Interactions"
    ]
  },
  {
    module: "Module 2",
    title: "Navigation, APIs & Application State Management",
    topics: [
      "Navigation, Routes, Named Routes & Screen Management",
      "REST API Integration, JSON Parsing & Asynchronous Programming",
      "State Management with Provider, Riverpod & Reactive Patterns",
      "Local Storage, SQLite & Secure Data Persistence"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Flutter & Production Deployment",
    topics: [
      "Firebase Authentication, Firestore & Push Notifications",
      "Camera, Location, Permissions & Native Device Features",
      "Performance Optimization, Debugging & App Testing",
      "Industry Capstone: Building & Deploying a Production-Ready Flutter App"
    ]
  }
],
    "LLM Applications & RAG Development": [
  {
    module: "Module 1",
    title: "LLM Foundations & Application Development",
    topics: [
      "Large Language Models, Transformers, Tokens & Context Windows",
      "Working with LLM APIs, Model Parameters & Structured Outputs",
      "Prompt Engineering, System Instructions & Context Management",
      "Building Conversational AI Applications with Python & LLM APIs"
    ]
  },
  {
    module: "Module 2",
    title: "RAG Architecture & Knowledge Retrieval",
    topics: [
      "Retrieval-Augmented Generation (RAG) Architecture & Workflows",
      "Document Loading, Chunking, Embeddings & Semantic Search",
      "Vector Databases, Similarity Search & Metadata Filtering",
      "Building RAG Pipelines with LangChain & Retrieval Strategies"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced RAG, Agents & Production Deployment",
    topics: [
      "Advanced Retrieval, Hybrid Search, Reranking & Query Optimization",
      "RAG Evaluation, Hallucination Reduction & Response Quality",
      "AI Agents, Tool Calling & Multi-Step LLM Workflows",
      "Industry Capstone: Building & Deploying a Production-Ready RAG Application"
    ]
  }
],
    "Generative AI & Prompt Engineering": [
  {
    module: "Module 1",
    title: "Generative AI Foundations & Large Language Models",
    topics: [
      "Generative AI Concepts, LLM Architecture & Real-World Applications",
      "Tokens, Context Windows, Embeddings & Transformer Fundamentals",
      "Working with AI Models for Text, Code, Image & Content Generation",
      "AI Safety, Hallucinations, Bias & Responsible AI Practices"
    ]
  },
  {
    module: "Module 2",
    title: "Prompt Engineering & AI Application Development",
    topics: [
      "Prompt Structure, Role Prompting, Few-Shot & Zero-Shot Techniques",
      "Chain-of-Thought, Structured Outputs & Context Engineering",
      "Prompt Testing, Evaluation & Optimization Strategies",
      "Building AI Workflows with APIs, Function Calling & Tool Integration"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Generative AI & Industry Applications",
    topics: [
      "Retrieval-Augmented Generation (RAG), Embeddings & Vector Databases",
      "AI Agents, Multi-Step Workflows & Autonomous Task Execution",
      "Fine-Tuning, Model Selection & Generative AI Application Deployment",
      "Industry Capstone: Building an End-to-End Generative AI Application"
    ]
  }
],
    "Machine Learning Deployment & MLOps": [
  {
    module: "Module 1",
    title: "ML Deployment Fundamentals & Production Pipelines",
    topics: [
      "Machine Learning Lifecycle, Model Packaging & Production Workflows",
      "Model Serialization with Pickle, Joblib & Version Management",
      "Building Prediction APIs with Flask, FastAPI & REST Architecture",
      "Containerizing Machine Learning Applications with Docker"
    ]
  },
  {
    module: "Module 2",
    title: "MLOps Automation, Monitoring & Model Management",
    topics: [
      "CI/CD Pipelines for Machine Learning with GitHub Actions",
      "Experiment Tracking, Model Registry & Version Control with MLflow",
      "Model Monitoring, Data Drift, Concept Drift & Performance Tracking",
      "Automated Retraining, Testing & Continuous Machine Learning Workflows"
    ]
  },
  {
    module: "Module 3",
    title: "Cloud MLOps & Production-Ready AI Systems",
    topics: [
      "Deploying ML Models on Cloud Platforms & Scalable Infrastructure",
      "Kubernetes-Based Model Serving, Scaling & Resource Management",
      "Production Logging, Monitoring, Security & Cost Optimization",
      "Industry Capstone: Building an End-to-End Automated MLOps Pipeline"
    ]
  }
],
    "Advanced Machine Learning & Model Optimization": [
  {
    module: "Module 1",
    title: "Advanced Feature Engineering & Model Development",
    topics: [
      "Advanced Feature Engineering, Selection & Transformation Techniques",
      "Handling Imbalanced Datasets, Outliers & Complex Missing Data",
      "Ensemble Learning with Random Forest, Gradient Boosting & XGBoost",
      "Advanced Cross-Validation Strategies & Robust Model Evaluation"
    ]
  },
  {
    module: "Module 2",
    title: "Hyperparameter Optimization & Advanced Modeling",
    topics: [
      "Grid Search, Random Search & Bayesian Hyperparameter Optimization",
      "Regularization Techniques with Ridge, Lasso & Elastic Net",
      "Model Stacking, Bagging, Boosting & Voting Ensembles",
      "Feature Importance, SHAP Analysis & Model Interpretability"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Predictive Modeling & Production Deployment",
    topics: [
      "Advanced Time Series Forecasting & Predictive Modeling",
      "Automated Machine Learning Pipelines & Experiment Tracking",
      "Model Optimization, Serialization, APIs & Production Deployment",
      "Industry Capstone: Building & Optimizing a Production-Ready ML Solution"
    ]
  }
],

    "Machine Learning Fundamentals": [
  {
    module: "Module 1",
    title: "Machine Learning Foundations & Data Preparation",
    topics: [
      "Machine Learning Concepts, Types, Workflows & Real-World Applications",
      "Data Preprocessing, Cleaning, Encoding & Feature Scaling",
      "Exploratory Data Analysis, Feature Engineering & Data Splitting",
      "Bias, Variance, Overfitting & Underfitting Fundamentals"
    ]
  },
  {
    module: "Module 2",
    title: "Supervised & Unsupervised Learning Algorithms",
    topics: [
      "Linear Regression, Logistic Regression & Model Training",
      "Decision Trees, Random Forests & K-Nearest Neighbors",
      "K-Means Clustering, PCA & Unsupervised Learning Techniques",
      "Model Evaluation with Accuracy, Precision, Recall, F1-Score & RMSE"
    ]
  },
  {
    module: "Module 3",
    title: "Model Optimization & Practical Machine Learning",
    topics: [
      "Cross-Validation, Hyperparameter Tuning & GridSearchCV",
      "Feature Selection, Regularization & Ensemble Learning",
      "Scikit-Learn Pipelines, Model Persistence & Prediction Workflows",
      "Industry Capstone: Building an End-to-End Machine Learning Model"
    ]
  }
],
    "Advanced Data Science & Predictive Analytics": [
  {
    module: "Module 1",
    title: "Advanced Data Science & Feature Engineering",
    topics: [
      "Advanced Data Cleaning, Transformation & Exploratory Data Analysis",
      "Feature Engineering, Selection, Encoding & Scaling Techniques",
      "Statistical Analysis, Correlation & Multivariate Data Exploration",
      "Handling Imbalanced Data, Outliers & Missing Values"
    ]
  },
  {
    module: "Module 2",
    title: "Predictive Modeling & Machine Learning",
    topics: [
      "Regression, Classification & Ensemble Learning Algorithms",
      "Random Forest, Gradient Boosting, XGBoost & Advanced Models",
      "Model Evaluation, Cross-Validation & Hyperparameter Optimization",
      "Time Series Forecasting, Trend Analysis & Predictive Modeling"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Analytics, Deployment & Industry Applications",
    topics: [
      "End-to-End Machine Learning Pipelines with Scikit-Learn",
      "Explainable AI, Feature Importance & Model Interpretability",
      "Model Deployment with Streamlit, Flask & Production APIs",
      "Industry Capstone: Building & Deploying an End-to-End Predictive Analytics Solution"
    ]
  }
],
    "Statistics & Data Visualization": [
  {
    module: "Module 1",
    title: "Statistical Foundations & Data Analysis",
    topics: [
      "Descriptive Statistics: Mean, Median, Mode & Measures of Spread",
      "Probability, Distributions & Sampling Techniques",
      "Variance, Standard Deviation, Percentiles & Z-Scores",
      "Correlation, Covariance & Identifying Data Relationships"
    ]
  },
  {
    module: "Module 2",
    title: "Data Visualization & Exploratory Analysis",
    topics: [
      "Data Visualization Principles, Chart Selection & Visual Storytelling",
      "Bar Charts, Histograms, Box Plots & Distribution Analysis",
      "Scatter Plots, Line Charts, Heatmaps & Correlation Visualization",
      "Exploratory Data Analysis (EDA) & Identifying Patterns and Outliers"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Statistics & Interactive Visualization",
    topics: [
      "Hypothesis Testing, Confidence Intervals & Statistical Inference",
      "Regression Analysis, Trend Analysis & Predictive Visualization",
      "Interactive Dashboards with Python, Matplotlib, Seaborn & Plotly",
      "Industry Capstone: Statistical Analysis & Interactive Data Visualization Project"
    ]
  }
],
    "Python & Data Analysis": [
  {
    module: "Module 1",
    title: "Python Programming & Data Handling Foundations",
    topics: [
      "Python Syntax, Variables, Data Types, Operators & Control Flow",
      "Functions, Modules, Exception Handling & File Operations",
      "NumPy Arrays, Vectorization & Numerical Computing",
      "Pandas DataFrames, Data Importing & Data Cleaning"
    ]
  },
  {
    module: "Module 2",
    title: "Data Analysis, Statistics & Visualization",
    topics: [
      "Data Wrangling, Filtering, Grouping, Merging & Aggregation",
      "Descriptive Statistics, Correlation & Statistical Data Analysis",
      "Exploratory Data Analysis (EDA) & Outlier Detection",
      "Data Visualization with Matplotlib, Seaborn & Interactive Charts"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Data Analysis & Industry Applications",
    topics: [
      "Time Series Analysis, Trend Detection & Business Forecasting",
      "Feature Engineering & Preparing Data for Machine Learning",
      "Automated Reports, Interactive Dashboards & Data Storytelling",
      "Industry Capstone: End-to-End Python Data Analysis Project"
    ]
  }
],
    "Performance Marketing": [
  {
    module: "Module 1",
    title: "Performance Marketing Fundamentals & Strategy",
    topics: [
      "Performance Marketing Concepts, Funnels, KPIs & Conversion Goals",
      "Audience Research, Customer Personas & Campaign Planning",
      "Landing Pages, Conversion Tracking & Marketing Attribution",
      "Budget Planning, Bidding Strategies & Return on Ad Spend (ROAS)"
    ]
  },
  {
    module: "Module 2",
    title: "Paid Advertising & Campaign Optimization",
    topics: [
      "Google Ads: Search, Display, Shopping & Performance Max Campaigns",
      "Meta Ads: Facebook & Instagram Campaign Setup and Targeting",
      "Audience Segmentation, Retargeting & Lookalike Audiences",
      "A/B Testing, Ad Creative Optimization & Conversion Rate Optimization"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Performance Marketing & Growth Analytics",
    topics: [
      "Google Analytics 4, Conversion Tracking & Campaign Attribution",
      "Funnel Analytics, Customer Acquisition Cost & Lifetime Value",
      "Campaign Reporting, Budget Optimization & Performance Forecasting",
      "Industry Capstone: Planning, Launching & Optimizing a Complete Paid Media Campaign"
    ]
  }
],
    "Canva": [
  {
    module: "Module 1",
    title: "Canva Fundamentals & Visual Design",
    topics: [
      "Canva Interface, Templates, Layouts & Design Workspace",
      "Typography, Color Theory, Elements & Visual Hierarchy",
      "Images, Graphics, Shapes, Icons & Background Editing",
      "Brand Kits, Design Consistency & Reusable Creative Assets"
    ]
  },
  {
    module: "Module 2",
    title: "Social Media, Marketing & Content Creation",
    topics: [
      "Social Media Posts, Stories, Reels Covers & Content Templates",
      "Presentations, Posters, Flyers, Brochures & Marketing Creatives",
      "YouTube Thumbnails, Banners & Digital Advertising Designs",
      "Canva AI Tools for Text, Images, Backgrounds & Creative Generation"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Canva, Branding & Professional Design",
    topics: [
      "Brand Identity, Logo Design & Complete Visual Branding Systems",
      "Animations, Video Editing, Transitions & Interactive Presentations",
      "Team Collaboration, Content Planning & Design Workflow Automation",
      "Industry Capstone: Creating a Complete Professional Brand & Marketing Kit"
    ]
  }
],
    "Financial Analysis": [
  {
    module: "Module 1",
    title: "Financial Analysis Fundamentals & Accounting Essentials",
    topics: [
      "Financial Statements, Accounting Principles & Financial Data Structure",
      "Income Statement, Balance Sheet & Cash Flow Statement Analysis",
      "Ratio Analysis: Profitability, Liquidity, Solvency & Efficiency",
      "Excel for Financial Modeling, Data Cleaning & Financial Calculations"
    ]
  },
  {
    module: "Module 2",
    title: "Financial Modeling, Forecasting & Business Valuation",
    topics: [
      "Building Integrated Three-Statement Financial Models",
      "Revenue, Expense, Cash Flow & Financial Forecasting Techniques",
      "Discounted Cash Flow (DCF), NPV, IRR & Valuation Fundamentals",
      "Scenario Analysis, Sensitivity Analysis & Financial Decision Making"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Financial Analysis & Investment Applications",
    topics: [
      "Company Performance Analysis, Benchmarking & Industry Comparisons",
      "Investment Analysis, Capital Budgeting & Risk Assessment",
      "Financial Dashboards, KPI Tracking & Management Reporting",
      "Industry Capstone: Building a Complete Financial Analysis & Valuation Model"
    ]
  }
],
    "SEO": [
  {
    module: "Module 1",
    title: "SEO Fundamentals & On-Page Optimization",
    topics: [
      "Search Engine Fundamentals, Crawling, Indexing & Ranking",
      "Keyword Research, Search Intent & Keyword Mapping",
      "On-Page SEO: Titles, Meta Descriptions, Headings & Content Optimization",
      "Internal Linking, URL Structure, Image SEO & Schema Markup Basics"
    ]
  },
  {
    module: "Module 2",
    title: "Technical SEO & Off-Page Strategies",
    topics: [
      "Technical SEO, Site Architecture, XML Sitemaps & Robots.txt",
      "Core Web Vitals, Page Speed, Mobile Optimization & HTTPS",
      "Link Building, Digital PR, Backlink Analysis & Domain Authority",
      "Local SEO, Google Business Profile & Local Search Optimization"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced SEO, Analytics & Growth Strategy",
    topics: [
      "Google Search Console, Analytics & SEO Performance Tracking",
      "Competitor Analysis, Content Gaps & Advanced SEO Audits",
      "E-E-A-T, Content Strategy & Search Engine Algorithm Updates",
      "Industry Capstone: Developing & Executing a Complete SEO Growth Campaign"
    ]
  }
],
    "Cloud Computing with AWS": [
  {
    module: "Module 1",
    title: "Cloud Computing Fundamentals & AWS Essentials",
    topics: [
      "Cloud Computing Models, Service Types & AWS Global Infrastructure",
      "AWS IAM, Users, Roles, Policies & Security Fundamentals",
      "EC2 Instances, AMIs, Instance Types & Elastic Scaling",
      "S3 Storage, Buckets, Permissions & Data Lifecycle Management"
    ]
  },
  {
    module: "Module 2",
    title: "AWS Networking, Databases & Application Services",
    topics: [
      "VPC, Subnets, Route Tables, Internet Gateways & Security Groups",
      "RDS, DynamoDB & AWS Database Selection Strategies",
      "Load Balancing, Auto Scaling & High-Availability Architecture",
      "AWS Lambda, API Gateway & Serverless Application Development"
    ]
  },
  {
    module: "Module 3",
    title: "AWS DevOps, Security & Production Architecture",
    topics: [
      "CloudWatch Monitoring, CloudTrail Logging & AWS Cost Management",
      "AWS DevOps Services, CI/CD Pipelines & Automated Deployments",
      "Cloud Security, Encryption, Backup & Disaster Recovery",
      "Industry Capstone: Designing & Deploying a Scalable AWS Cloud Application"
    ]
  }
],
    "Docker & Kubernetes": [
  {
    module: "Module 1",
    title: "Docker Fundamentals & Containerization",
    topics: [
      "Containerization Concepts, Docker Architecture & CLI Fundamentals",
      "Images, Containers, Dockerfiles & Docker Compose",
      "Container Networking, Volumes & Persistent Data Management",
      "Building, Tagging & Managing Production-Ready Docker Images"
    ]
  },
  {
    module: "Module 2",
    title: "Kubernetes Fundamentals & Container Orchestration",
    topics: [
      "Kubernetes Architecture, Cluster Components & Core Concepts",
      "Pods, Deployments, ReplicaSets & Services",
      "ConfigMaps, Secrets, Namespaces & Persistent Volumes",
      "Scaling, Rolling Updates, Rollbacks & Application Management"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Kubernetes, DevOps & Cloud Deployment",
    topics: [
      "Ingress, Load Balancing & Kubernetes Networking",
      "Helm Charts, Resource Management & Health Probes",
      "CI/CD Pipelines, Monitoring & Production Cluster Management",
      "Industry Capstone: Containerizing & Deploying a Scalable Application on Kubernetes"
    ]
  }
],
    "AI Tools": [
  {
    module: "Module 1",
    title: "AI Fundamentals & Productivity Tools",
    topics: [
      "Generative AI Concepts, LLMs & Modern AI Workflows",
      "Prompt Engineering, Context Design & Effective AI Instructions",
      "AI Tools for Research, Writing, Summarization & Knowledge Work",
      "AI-Powered Productivity for Documents, Presentations & Spreadsheets"
    ]
  },
  {
    module: "Module 2",
    title: "Creative AI & Content Generation",
    topics: [
      "AI Tools for Image Generation, Editing & Graphic Design",
      "AI-Powered Video Generation, Editing & Content Creation",
      "AI Voice, Audio, Music & Text-to-Speech Generation",
      "Building Social Media Content, Marketing Assets & Creative Campaigns"
    ]
  },
  {
    module: "Module 3",
    title: "AI Automation, Development & Professional Workflows",
    topics: [
      "AI Coding Assistants, Code Generation, Debugging & Documentation",
      "No-Code/Low-Code AI Automation & Workflow Integration",
      "AI Agents, APIs & Connecting AI Tools with Business Processes",
      "Industry Capstone: Building an End-to-End AI-Powered Productivity Workflow"
    ]
  }
],
    "Deep Learning": [
  {
    module: "Module 1",
    title: "Deep Learning Fundamentals & Neural Networks",
    topics: [
      "Neural Networks, Perceptrons, Activation Functions & Loss Functions",
      "Forward Propagation, Backpropagation & Gradient Descent",
      "TensorFlow/PyTorch Fundamentals, Tensors & Model Architecture",
      "Data Preprocessing, Training, Validation & Model Evaluation"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced Neural Networks & Deep Learning Architectures",
    topics: [
      "Convolutional Neural Networks (CNNs) for Image Processing",
      "Recurrent Neural Networks, LSTM & GRU for Sequential Data",
      "Transfer Learning, Pretrained Models & Fine-Tuning",
      "Regularization, Dropout, Batch Normalization & Hyperparameter Tuning"
    ]
  },
  {
    module: "Module 3",
    title: "Generative AI, Model Deployment & Industry Applications",
    topics: [
      "Transformers, Attention Mechanisms & Modern Deep Learning Models",
      "Natural Language Processing & Text Classification with Deep Learning",
      "Model Optimization, Deployment APIs & Production Inference",
      "Industry Capstone: Building & Deploying an End-to-End Deep Learning Solution"
    ]
  }
],
    "Express JS": [
  {
    module: "Module 1",
    title: "Express.js Fundamentals & Backend Development",
    topics: [
      "Node.js, Express.js Setup & Project Architecture",
      "Routing, HTTP Methods, Request & Response Handling",
      "Middleware, Error Handling & Application Configuration",
      "REST API Design, JSON Data & HTTP Status Codes"
    ]
  },
  {
    module: "Module 2",
    title: "Database Integration & API Development",
    topics: [
      "MongoDB Integration with Mongoose & Data Modeling",
      "CRUD Operations, Validation & Schema Design",
      "Authentication with JWT, Sessions & Password Security",
      "File Uploads, API Testing & Request Validation"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Express.js & Production Deployment",
    topics: [
      "Advanced Middleware, Authorization & Role-Based Access Control",
      "API Security, Rate Limiting, CORS & Environment Management",
      "Performance Optimization, Logging & Production Error Monitoring",
      "Industry Capstone: Building & Deploying a Production-Ready REST API"
    ]
  }
],
    "Business Analytics": [
  {
    module: "Module 1",
    title: "Business Analytics Fundamentals & Data Preparation",
    topics: [
      "Business Analytics Concepts, KPIs & Data-Driven Decision Making",
      "Excel for Business Data Cleaning, Formulas & Data Management",
      "Descriptive Statistics, Data Exploration & Business Metrics",
      "Data Visualization with Charts, PivotTables & Interactive Reports"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced Analytics & Business Intelligence",
    topics: [
      "SQL for Business Data Extraction, Joins & Aggregations",
      "Power BI for Interactive Dashboards, Reports & KPI Tracking",
      "Power Query, Data Modeling & Business Intelligence Workflows",
      "Trend Analysis, Segmentation & Performance Measurement"
    ]
  },
  {
    module: "Module 3",
    title: "Predictive Analytics, Strategy & Industry Applications",
    topics: [
      "Regression, Forecasting & Predictive Business Analytics",
      "Customer, Sales & Marketing Analytics for Business Growth",
      "What-If Analysis, Scenario Planning & Data-Driven Strategy",
      "Industry Capstone: Building an End-to-End Business Analytics Dashboard"
    ]
  }
],
    "Digital Analytics": [
  {
    module: "Module 1",
    title: "Digital Analytics Fundamentals & Data Collection",
    topics: [
      "Digital Analytics Concepts, Metrics, KPIs & Measurement Frameworks",
      "Web Traffic, User Behavior, Sessions & Conversion Tracking",
      "Google Analytics 4 Setup, Events, Parameters & User Properties",
      "UTM Tracking, Campaign Attribution & Data Collection Strategies"
    ]
  },
  {
    module: "Module 2",
    title: "Data Analysis, Reporting & Customer Insights",
    topics: [
      "GA4 Reports, Explorations, Segments & Audience Analysis",
      "Conversion Funnels, Cohort Analysis & Customer Journey Mapping",
      "Marketing Channel Performance, Attribution & ROI Analysis",
      "Dashboards & Data Visualization with Looker Studio"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Analytics, Optimization & Business Intelligence",
    topics: [
      "Advanced Event Tracking, Custom Dimensions & Enhanced Measurement",
      "A/B Testing, Experimentation & Conversion Rate Optimization",
      "Predictive Insights, Customer Segmentation & Performance Forecasting",
      "Industry Capstone: Building an End-to-End Digital Analytics Dashboard"
    ]
  }
],
    "CSS": [
  {
    module: "Module 1",
    title: "CSS Fundamentals & Styling Foundations",
    topics: [
      "CSS Syntax, Selectors, Properties & Cascade",
      "Colors, Typography, Backgrounds, Borders & Shadows",
      "Box Model, Margins, Padding & Element Sizing",
      "Display, Positioning, Units & Basic Layout Techniques"
    ]
  },
  {
    module: "Module 2",
    title: "Responsive Layouts & Modern CSS",
    topics: [
      "Flexbox for Responsive One-Dimensional Layouts",
      "CSS Grid for Advanced Two-Dimensional Layouts",
      "Media Queries, Responsive Design & Mobile-First Development",
      "Transitions, Transforms, Animations & Interactive Effects"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced CSS & Professional Web Design",
    topics: [
      "CSS Variables, Functions, Pseudo-Classes & Pseudo-Elements",
      "Advanced Responsive Components & Reusable Design Patterns",
      "CSS Architecture, Performance Optimization & Cross-Browser Compatibility",
      "Industry Capstone: Designing & Styling a Complete Responsive Website"
    ]
  }
],
    "HTML": [
  {
    module: "Module 1",
    title: "HTML Fundamentals & Web Page Structure",
    topics: [
      "HTML Syntax, Document Structure & Semantic Elements",
      "Headings, Paragraphs, Links, Images & Multimedia Elements",
      "Lists, Tables, Forms & User Input Controls",
      "HTML Attributes, Metadata & Accessibility Fundamentals"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced HTML & Interactive Web Content",
    topics: [
      "Semantic HTML5 Elements & Modern Page Layout Structure",
      "Advanced Forms, Validation, Input Types & Form Controls",
      "Audio, Video, Iframes, SVG & Embedded Web Content",
      "Accessibility, SEO-Friendly Markup & Cross-Browser Compatibility"
    ]
  },
  {
    module: "Module 3",
    title: "Professional HTML & Real-World Web Projects",
    topics: [
      "Responsive HTML Structure for Modern Websites",
      "HTML Integration with CSS, JavaScript & External Resources",
      "Performance Optimization, Clean Code & Web Standards",
      "Industry Capstone: Building a Complete Multi-Page Website"
    ]
  }
],
    "DSA with Python": [
  {
    module: "Module 1",
    title: "Python Foundations & Core Data Structures",
    topics: [
      "Python Syntax, Functions, Recursion & Object-Oriented Programming",
      "Lists, Tuples, Dictionaries, Sets & String Manipulation",
      "Linked Lists, Stacks & Queues Implementation",
      "Searching, Sorting & Two-Pointer Problem-Solving Techniques"
    ]
  },
  {
    module: "Module 2",
    title: "Trees, Graphs & Advanced Data Structures",
    topics: [
      "Binary Trees, Binary Search Trees & Tree Traversal Techniques",
      "Heaps, Priority Queues, Hashing & Advanced Collections",
      "Graphs, BFS, DFS & Shortest Path Algorithms",
      "Greedy Algorithms, Backtracking & Divide-and-Conquer Strategies"
    ]
  },
  {
    module: "Module 3",
    title: "Dynamic Programming, Optimization & Interview Preparation",
    topics: [
      "Dynamic Programming: Memoization, Tabulation & State Transitions",
      "Advanced Graph Algorithms, Union-Find & Minimum Spanning Trees",
      "Time & Space Complexity, Optimization & Competitive Problem Solving",
      "Industry Capstone: Solving Real-World Algorithmic Problems with Python"
    ]
  }
],
    "DSA with Java": [
  {
    module: "Module 1",
    title: "Java Foundations & Core Data Structures",
    topics: [
      "Java Syntax, OOP Concepts, Classes, Objects & Collections",
      "Arrays, Strings, ArrayList & HashMap Fundamentals",
      "Linked Lists, Stacks & Queues Implementation",
      "Recursion, Searching & Sorting Algorithms"
    ]
  },
  {
    module: "Module 2",
    title: "Trees, Graphs & Advanced Data Structures",
    topics: [
      "Binary Trees, Binary Search Trees & Tree Traversals",
      "Heaps, Priority Queues & Hashing with Java Collections",
      "Graphs, BFS, DFS & Shortest Path Algorithms",
      "Greedy Algorithms, Backtracking & Divide-and-Conquer"
    ]
  },
  {
    module: "Module 3",
    title: "Dynamic Programming, Optimization & Problem Solving",
    topics: [
      "Dynamic Programming: Memoization, Tabulation & State Design",
      "Advanced Graph Algorithms: MST, Topological Sort & Union-Find",
      "Time & Space Complexity, Optimization & Interview Problem Solving",
      "Industry Capstone: Building Algorithmic Solutions with Java"
    ]
  }
],
    "DSA with C++": [
  {
    module: "Module 1",
    title: "C++ Foundations & Core Data Structures",
    topics: [
      "C++ Syntax, Functions, Pointers & Object-Oriented Programming",
      "Arrays, Strings, Vectors & STL Containers",
      "Linked Lists, Stacks & Queues Implementation",
      "Recursion, Searching & Sorting Algorithms"
    ]
  },
  {
    module: "Module 2",
    title: "Trees, Graphs & Advanced Data Structures",
    topics: [
      "Binary Trees, Binary Search Trees & Tree Traversals",
      "Heaps, Priority Queues & Hashing Techniques",
      "Graphs, BFS, DFS & Shortest Path Algorithms",
      "Greedy Algorithms, Backtracking & Divide-and-Conquer"
    ]
  },
  {
    module: "Module 3",
    title: "Dynamic Programming, Optimization & Problem Solving",
    topics: [
      "Dynamic Programming: Memoization, Tabulation & State Design",
      "Advanced Graph Algorithms: MST, Topological Sort & Union-Find",
      "Time & Space Complexity, Optimization & Competitive Problem Solving",
      "Industry Capstone: Solving Real-World Problems with Advanced DSA"
    ]
  }
],
    "Graphic Design": [
  {
    module: "Module 1",
    title: "Graphic Design Fundamentals & Visual Communication",
    topics: [
      "Design Principles, Composition, Balance & Visual Hierarchy",
      "Color Theory, Typography & Font Pairing Techniques",
      "Brand Identity, Moodboards & Creative Design Concepts",
      "Image Editing, Shapes, Layers & Professional Design Workflows"
    ]
  },
  {
    module: "Module 2",
    title: "Digital Design Tools & Creative Production",
    topics: [
      "Adobe Photoshop: Photo Editing, Retouching & Compositing",
      "Adobe Illustrator: Vector Graphics, Logos & Illustrations",
      "Figma for UI Graphics, Layouts & Collaborative Design",
      "Social Media Creatives, Posters, Banners & Marketing Materials"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Graphic Design & Professional Portfolio",
    topics: [
      "Advanced Branding, Logo Systems & Visual Identity Guidelines",
      "Print Design, Packaging, Brochures & Publication Layouts",
      "Design Mockups, Presentation Techniques & Client Requirements",
      "Industry Capstone: Complete Brand Identity & Professional Portfolio"
    ]
  }
],
    "Database Management System": [
  {
    module: "Module 1",
    title: "Database Fundamentals & SQL Foundations",
    topics: [
      "DBMS Architecture, Database Models & Relational Concepts",
      "Tables, Keys, Constraints & Entity Relationship Modeling",
      "SQL Queries: SELECT, INSERT, UPDATE, DELETE & Filtering",
      "Sorting, Grouping, Aggregate Functions & Multi-Table Queries"
    ]
  },
  {
    module: "Module 2",
    title: "Advanced SQL, Database Design & Transactions",
    topics: [
      "Joins, Subqueries, Common Table Expressions & Set Operations",
      "Normalization, Functional Dependencies & Database Optimization",
      "Views, Stored Procedures, Functions & Triggers",
      "Transactions, ACID Properties, Concurrency & Database Recovery"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced DBMS, Security & Industry Applications",
    topics: [
      "Indexing, Query Optimization & Execution Plans",
      "Database Security, User Roles, Permissions & Access Control",
      "Introduction to NoSQL Databases & SQL vs NoSQL Architecture",
      "Industry Capstone: Designing & Implementing a Complete Database System"
    ]
  }
],
    "Next JS": [
  {
    module: "Module 1",
    title: "Next.js Fundamentals & Modern Web Architecture",
    topics: [
      "Next.js Setup, App Router, Pages & Project Structure",
      "React Components, Props, State & Server Components",
      "Layouts, Routing, Dynamic Routes & Navigation",
      "Styling with CSS Modules, Tailwind CSS & Responsive Design"
    ]
  },
  {
    module: "Module 2",
    title: "Data Fetching, APIs & Full-Stack Development",
    topics: [
      "Server-Side Rendering, Static Generation & Dynamic Rendering",
      "Data Fetching, Caching, Revalidation & Loading States",
      "Building API Routes, Route Handlers & Backend Services",
      "Database Integration, Authentication & Form Handling"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Next.js & Production Deployment",
    topics: [
      "Middleware, Authorization & Secure Application Architecture",
      "Performance Optimization, SEO & Image Optimization",
      "Testing, Error Handling, Environment Variables & Security",
      "Industry Capstone: Building & Deploying a Full-Stack Next.js Application"
    ]
  }
],
    "React Native Development": [
  {
    module: "Module 1",
    title: "React Native Fundamentals & Mobile UI Development",
    topics: [
      "React Native Setup, Components, JSX & Project Structure",
      "Props, State, Hooks & Component-Based Architecture",
      "Flexbox, Styling & Responsive Mobile Interfaces",
      "Handling User Input, Forms, Lists & Touch Interactions"
    ]
  },
  {
    module: "Module 2",
    title: "Navigation, APIs & Application Data Management",
    topics: [
      "React Navigation, Stack, Tab & Drawer Navigation",
      "REST API Integration with Fetch & Axios",
      "AsyncStorage, Local Data Handling & State Management",
      "Authentication, Form Validation & Secure User Sessions"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced React Native & Production Deployment",
    topics: [
      "Native Device Features: Camera, Location, Notifications & Permissions",
      "Performance Optimization, Debugging & Error Handling",
      "Firebase Integration, Push Notifications & Cloud Services",
      "Industry Capstone: Building & Deploying a Production-Ready Mobile App"
    ]
  }
],
    "Web Designer": [
  {
    module: "Module 1",
    title: "Web Design Fundamentals & Visual Principles",
    topics: [
      "UI Design Principles, Layouts, Grids & Visual Hierarchy",
      "Color Theory, Typography & Design System Fundamentals",
      "Wireframing, User Flows & Website Information Architecture",
      "Responsive Design Principles for Desktop, Tablet & Mobile"
    ]
  },
  {
    module: "Module 2",
    title: "Modern UI Design & Frontend Foundations",
    topics: [
      "HTML5 Semantic Structure & Accessible Web Layouts",
      "CSS3 Styling, Flexbox, Grid & Responsive Components",
      "Interactive Interfaces with JavaScript & CSS Animations",
      "Figma-Based Prototyping, Design Handoff & Component Systems"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced Web Design & Portfolio Projects",
    topics: [
      "Modern Landing Pages, Dashboards & Conversion-Focused Design",
      "Website Accessibility, Cross-Browser Compatibility & Optimization",
      "UX Testing, Design Iteration & Performance Best Practices",
      "Industry Capstone: Designing & Launching a Complete Responsive Website"
    ]
  }
],
    "WordPress Development": [
  {
    module: "Module 1",
    title: "WordPress Fundamentals & Website Development",
    topics: [
      "WordPress Installation, Dashboard & Website Configuration",
      "Themes, Plugins, Pages, Posts & Content Management",
      "Menus, Widgets, Media Library & Custom Taxonomies",
      "Domain, Hosting, SSL & WordPress Deployment"
    ]
  },
  {
    module: "Module 2",
    title: "Custom WordPress Design & Development",
    topics: [
      "HTML, CSS & JavaScript for WordPress Customization",
      "Theme Customization, Child Themes & Template Hierarchy",
      "Page Builders, Responsive Layouts & Custom UI Components",
      "Custom Post Types, Custom Fields & Dynamic Content"
    ]
  },
  {
    module: "Module 3",
    title: "Advanced WordPress, Security & Production",
    topics: [
      "Custom Plugin Development & WordPress Hooks",
      "WooCommerce Setup, Product Management & Payment Integration",
      "WordPress Security, Performance Optimization & SEO",
      "Industry Capstone: Building & Deploying a Complete WordPress Website"
    ]
  }
],
    "Advanced Excel": [
  {
    module: "Module 1",
    title: "Advanced Excel Formulas & Data Management",
    topics: [
      "Advanced Formulas with XLOOKUP, INDEX-MATCH & XMATCH",
      "Logical Functions: IF, IFS, AND, OR & Nested Conditions",
      "Dynamic Arrays, FILTER, SORT, UNIQUE & SEQUENCE",
      "Data Validation, Named Ranges & Advanced Data Cleaning"
    ]
  },
  {
    module: "Module 2",
    title: "Data Analysis, PivotTables & Business Intelligence",
    topics: [
      "Advanced PivotTables, Grouping, Slicers & Timelines",
      "PivotCharts & Interactive Dashboard Development",
      "Power Query for Data Import, Transformation & Automation",
      "What-If Analysis, Goal Seek, Scenario Manager & Solver"
    ]
  },
  {
    module: "Module 3",
    title: "Excel Automation, Dashboards & Industry Projects",
    topics: [
      "Advanced Charts, Conditional Formatting & KPI Visualization",
      "Introduction to Power Pivot, Data Models & DAX Basics",
      "Excel Macros & VBA for Task Automation",
      "Industry Capstone: Interactive Business Analytics Dashboard"
    ]
  }
],
    "Python": [
      {
        module: "Module 1",
        title: "Python Syntax, Data Structures & Control Flow",
        topics: [
          "Python Variables, Data Types & Operators",
          "Lists, Tuples, Dictionaries & Sets Mastery",
          "Conditional Logic, Loops & List Comprehensions",
          "Writing Modular Functions & Error Handling"
        ]
      },
      {
        module: "Module 2",
        title: "OOPs, File I/O & Module Ecosystem",
        topics: [
          "Classes, Objects, Inheritance & Polymorphism",
          "File Reading/Writing & JSON Processing",
          "Working with Standard Libraries (os, sys, datetime, math)",
          "Virtual Environments & Package Management (pip)"
        ]
      },
      {
        module: "Module 3",
        title: "Advanced Python & Industry Capstone",
        topics: [
          "Decorators, Generators & Context Managers",
          "Web Scraping with BeautifulSoup & Requests",
          "Building Automation Scripts & REST API Consumption",
          "End-to-End Capstone Project & Deployment"
        ]
      }
    ],
    "Human Resource Management": [
      {
        module: "Module 1",
        title: "HR Foundations & Talent Acquisition",
        topics: [
          "Principles of Modern Human Resource Management",
          "Job Analysis, Description & Candidate Sourcing Strategies",
          "Structured Interview Techniques & Selection Frameworks",
          "Offer Management, Salary Negotiation & Onboarding"
        ]
      },
      {
        module: "Module 2",
        title: "Employee Relations, Payroll & Compliance",
        topics: [
          "Labor Laws, Statutory Compliance & HR Policies",
          "Payroll Structure, Taxation & Compensation Management",
          "Performance Appraisal Systems & KPI/OKR Management",
          "Employee Engagement, Retention & Conflict Resolution"
        ]
      },
      {
        module: "Module 3",
        title: "HR Analytics & Strategic HR Leadership",
        topics: [
          "HR Metrics & People Analytics using Excel & HRIS",
          "Organizational Behaviour & Change Management",
          "Employer Branding & Culture Building",
          "Live HR Audit Case Study & Portfolio Project"
        ]
      }
    ],
    "Finance Management": [
      {
        module: "Module 1",
        title: "Financial Accounting & Reporting Analysis",
        topics: [
          "Financial Statements: Balance Sheet, P&L, Cash Flow",
          "Ratio Analysis & Financial Performance Evaluation",
          "Working Capital Management & Cash Budgeting",
          "Corporate Financial Policies & Ethics"
        ]
      },
      {
        module: "Module 2",
        title: "Corporate Finance & Capital Budgeting",
        topics: [
          "Cost of Capital, WACC & Leverage Analysis",
          "Capital Budgeting Techniques (NPV, IRR, Payback Period)",
          "Risk & Return: Portfolio Theory & CAPM",
          "Valuation Methods: Discounted Cash Flow (DCF)"
        ]
      },
      {
        module: "Module 3",
        title: "Financial Modeling & Investment Strategy",
        topics: [
          "Building Dynamic Financial Models in Excel",
          "Equity Research & Merger & Acquisition (M&A) Basics",
          "Financial Forecasting & Scenario Analysis",
          "Capstone Project: Full Company Valuation Model"
        ]
      }
    ],
    "Business Development Manager": [
      {
        module: "Module 1",
        title: "Strategic Sales & Market Expansion",
        topics: [
          "Market Research, Lead Generation & Pipeline Building",
          "B2B vs B2C Sales Funnel Architecture",
          "Client Prospecting & Cold Outreach Mastery",
          "Sales CRM Tools (HubSpot, Salesforce) Workflow"
        ]
      },
      {
        module: "Module 2",
        title: "Negotiation, Pitching & Key Account Management",
        topics: [
          "Crafting Winning Pitch Decks & Proposals",
          "High-Stakes Negotiation & Objection Handling",
          "Key Account Management & Customer Retention",
          "Contract Closing & Partnership Structuring"
        ]
      },
      {
        module: "Module 3",
        title: "Revenue Scaling & Leadership",
        topics: [
          "Revenue Forecasting & Sales Target Setting",
          "Cross-functional Alignment & Team Leadership",
          "Go-To-Market (GTM) Strategy Execution",
          "Live Business Strategy Capstone Project"
        ]
      }
    ],
    "Business Development Executive": [
      {
        module: "Module 1",
        title: "Lead Sourcing & Prospect Communication",
        topics: [
          "Cold Calling, Email Copywriting & Prospecting Techniques",
          "Qualifying Leads & BANT Framework Analysis",
          "CRM Data Management & Daily Outreach Routines",
          "Communication & Active Listening Skills"
        ]
      },
      {
        module: "Module 2",
        title: "Product Demos & Handling Sales Objections",
        topics: [
          "Delivering Engaging Product Demos & Presentations",
          "Overcoming Common Price & Product Objections",
          "Follow-up Strategies & Pipeline Conversion Metrics",
          "Building Relationship & Trust with Clients"
        ]
      },
      {
        module: "Module 3",
        title: "Closing Sales & Performance Growth",
        topics: [
          "Closing Techniques & Contract Finalization",
          "Achieving Monthly Targets & Incentive Optimization",
          "Industry Roleplay Practice & Mock Client Calls",
          "Career Roadmap & Transition to Managerial Roles"
        ]
      }
    ],
    "Power BI": [
      {
        module: "Module 1",
        title: "Data Transformation & Power Query",
        topics: [
          "Connecting to Multi-Source Data (Excel, SQL, Web)",
          "Data Cleaning & Transformation in Power Query Editor",
          "Data Types, Merging, Appending & Unpivoting Columns",
          "Creating Star Schema & Data Models"
        ]
      },
      {
        module: "Module 2",
        title: "DAX Formulas & Analytical Calculations",
        topics: [
          "Calculated Columns vs Measures",
          "DAX Functions: CALCULATE, SUMX, FILTER, ALL",
          "Time Intelligence Functions (YTD, QTD, SamePeriodLastYear)",
          "Performance Tuning DAX Calculations"
        ]
      },
      {
        module: "Module 3",
        title: "Interactive Dashboards & Power BI Service",
        topics: [
          "Designing Executive Dashboards & Custom Visuals",
          "Bookmarks, Drillthroughs & Tooltips",
          "Publishing to Power BI Service & Automated Refresh",
          "Capstone: End-to-End Enterprise Executive Dashboard"
        ]
      }
    ],
    "C++": [
      {
        module: "Module 1",
        title: "C++ Language Syntax & Memory Management",
        topics: [
          "Data Types, Operators & Control Flow",
          "Functions, Recursion & Pass-by-Value vs Pass-by-Reference",
          "Pointers, Dynamic Memory Allocation (new/delete) & References",
          "Arrays, Strings & C++ Standard I/O"
        ]
      },
      {
        module: "Module 2",
        title: "Object-Oriented Programming (OOP) in C++",
        topics: [
          "Classes, Objects & Constructor/Destructor Mechanics",
          "Inheritance, Polymorphism & Virtual Functions",
          "Operator Overloading & Friend Functions",
          "Templates & Generic Programming"
        ]
      },
      {
        module: "Module 3",
        title: "Standard Template Library (STL) & Advanced C++",
        topics: [
          "STL Containers: Vector, List, Map, Set, Queue, Stack",
          "Iterators & STL Algorithms (sort, search, transform)",
          "Modern C++ Features (Smart Pointers, Lambda Expressions)",
          "Capstone Project: High-Performance Console App"
        ]
      }
    ],
    "Java": [
      {
        module: "Module 1",
        title: "Java Fundamentals & Core Syntax",
        topics: [
          "JDK/JRE/JVM Architecture & Environment Setup",
          "Java Syntax, Variables, Operators & Control Statements",
          "Arrays, String Handling & StringBuilder",
          "Methods, Scope & Exception Handling (try-catch-finally)"
        ]
      },
      {
        module: "Module 2",
        title: "Object-Oriented Java & Collections Framework",
        topics: [
          "Classes, Encapsulation, Inheritance & Interfaces",
          "Abstract Classes & Polymorphism in Action",
          "Java Collections Framework (ArrayList, HashMap, HashSet)",
          "Generics, Multithreading & Concurrency Basics"
        ]
      },
      {
        module: "Module 3",
        title: "Advanced Java, JDBC & Spring Boot Intro",
        topics: [
          "File Handling, Streams API & Lambda Expressions",
          "Database Connectivity using JDBC & SQL",
          "Introduction to Spring Boot & REST Microservices",
          "Capstone Project: Enterprise Backend System"
        ]
      }
    ],
    "SQL": [
      {
        module: "Module 1",
        title: "Relational Database Fundamentals & Querying",
        topics: [
          "Database Architecture, Tables, Primary & Foreign Keys",
          "SQL DDL & DML Commands (SELECT, INSERT, UPDATE, DELETE)",
          "Filtering Data with WHERE, LIKE, IN, BETWEEN",
          "Sorting & Grouping Data (ORDER BY, GROUP BY, HAVING)"
        ]
      },
      {
        module: "Module 2",
        title: "Advanced Joins, Subqueries & Aggregate Functions",
        topics: [
          "Inner, Left, Right, Full Outer & Cross Joins",
          "Subqueries, Correlated Subqueries & CTEs (WITH Clause)",
          "SQL String, Date & Mathematical Functions",
          "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG)"
        ]
      },
      {
        module: "Module 3",
        title: "Database Design, Indexing & Optimization",
        topics: [
          "Database Normalization (1NF, 2NF, 3NF)",
          "Indexes, Execution Plans & Query Optimization",
          "Transactions, ACID Properties & Locking",
          "Capstone Project: Real-World Business Database Analysis"
        ]
      }
    ]
  };

  const defaultFaqs = [
    {
      question: "Who can enroll in these programs?",
      answer: "Anyone interested in learning a new skill can enroll. Programs are suitable for students, freshers, working professionals, and career switchers."
    },
    {
      question: "Will I get practical projects or assignments?",
      answer:"Yes. Programs can include practical assignments, projects, case studies, or hands-on activities to help you apply what you learn."
    },

    {
      question:"Will these programs help me become job-ready?",
      answer: "Programs are designed to build practical, career-relevant skills. Your job readiness will also depend on practice, projects, interview preparation, and individual effort."
    },

      {
        question: "What are the prerequisites for this program?",
      answer: "No prior experience is required! We start from basic fundamentals and gradually build up to industry-level projects."
      },
    {
      question: "Will I receive a completion certificate?",
      answer: "Yes, after completing all module projects and assignments, you will receive an industry-recognized CountryEdu certificate."
    },
    {
      question: "How do doubt resolution and live mentorship work?",
      answer: "You get access to daily live doubt sessions and dedicated 1:1 mentorship from experienced industry experts."
    }
  ];

  // Get course name from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const programName = urlParams.get("name") || urlParams.get("id") || "Python";

  // Elements
  const nameSpanEl = document.getElementById("program-name-span");
  const descEl = document.getElementById("program-description");
  const bannerImgEl = document.getElementById("program-banner-img");
  const pageTitleEl = document.getElementById("program-page-title");
  const curriculumContainer = document.getElementById("curriculum-modules-list");
  const faqsContainer = document.getElementById("program-faqs-list");

  // Populate Header Data
  pageTitleEl.textContent = `${programName} Program | CountryEdu`;
  if (nameSpanEl) nameSpanEl.textContent = programName;
  if (descEl) {
    descEl.textContent = `Master industry-level ${programName} skills through real-world projects, expert 1:1 mentorship, certifications, and career support.`;
  }

  // Populate Banner Image
  if (bannerImgEl) {
    const imgSrc = courseImages[programName] || "assets/images/programs/python-development.png";
    bannerImgEl.src = imgSrc;
    bannerImgEl.alt = `${programName} Banner`;
  }

  // Select Curriculum: specific or dynamic generator
  const activeCurriculum = programCurriculums[programName] || generateDynamicCurriculum(programName);

  // Render Curriculum Accordion
// Render Curriculum Roadmap
  if (curriculumContainer) {
    const moduleIcons = ["ri-box-3-line", "ri-route-line", "ri-rocket-2-line"];

    curriculumContainer.innerHTML = activeCurriculum.map((item, index) => {
      const icon = moduleIcons[index % moduleIcons.length];
      const number = String(index + 1).padStart(2, "0");
      const shortDesc = item.topics && item.topics.length ? item.topics[0] : "";

      return `
        <div class="curriculum-module ${index === 0}">
          <div class="curriculum-icon-box">
            <i class="${icon}"></i>
            <span class="curriculum-number">${number}</span>
          </div>
          <span class="curriculum-dot"></span>
          <div class="curriculum-content">
            <span class="curriculum-badge">${item.module.toUpperCase()}</span>
            <h4>${item.title}</h4>
            <p class="curriculum-desc">${shortDesc}</p>
            <div class="curriculum-body">
              <ul>
                ${item.topics.map(topic => `<li><i class="ri-checkbox-circle-line"></i> ${topic}</li>`).join("")}
              </ul>
            </div>
          </div>
          <button type="button" class="curriculum-toggle" aria-label="Toggle module details">
            <i class="ri-add-line"></i>
          </button>
        </div>
      `;
    }).join("");

    // Add click toggle to curriculum modules
    document.querySelectorAll(".curriculum-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const moduleCard = btn.closest(".curriculum-module");
        moduleCard.classList.toggle("active");
      });
    });
  }

  // Render FAQs
  if (faqsContainer) {
    faqsContainer.innerHTML = defaultFaqs.map((faq, index) => `
      <div class="faq-item ${index === 0 }">
        <div class="faq-question">
          <h3>${faq.question}</h3>
          <i class="ri-add-line"></i>
        </div>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join("");

    // Add click toggle to FAQ headers
    document.querySelectorAll("#program-faqs-list .faq-question").forEach(q => {
      q.addEventListener("click", () => {
        const item = q.parentElement;
        item.classList.toggle("active");
      });
    });
  }
});
