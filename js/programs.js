document.addEventListener("DOMContentLoaded", () => {
  const courseNames = [
    "React JS Development",
    "Node JS Development",
    "WordPress Development",
    "Web Designer",
    "React Native Development",
    "Business Development Manager",
    "Business Development Executive",
    "Human Resource Management",
    "Finance Management",
    "Python",
    "Next JS",
    "Power BI",
    "C++",
    "Java",
    "Database Management System",
    "Advanced Excel",
    "SQL",
    "Graphic Design",
    "DSA with C++",
    "DSA with Java",
    "DSA with Python",
    "HTML",
    "CSS",
    "Digital Marketing",
    "Digital Analytics",
    "Business Analytics",
    "Express JS",
    "Deep Learning",
    "AI Tools",
    "Docker & Kubernetes",
    "Cloud Computing with AWS",
    "SEO",
    "Financial Analysis",
    "Canva",
    "Performance Marketing",
    "Flutter Development",
    "Python & Data Analysis",
    "Statistics & Data Visualization",
    "Advanced Data Science & Predictive Analytics",
    "Machine Learning Fundamentals",
    "Advanced Machine Learning & Model Optimization",
    "Machine Learning Deployment & MLOps",
    "Generative AI & Prompt Engineering",
    "LLM Applications & RAG Development",
    "AI Agents & Advanced Generative AI",
    "R-Programming",
    "Julia",
    "PHP",
    "C-Programming",
    "Kotlin",
    "Ruby",
    "Cybersecurity Fundamentals",
    "Ethical Hacking & Penetration Testing",
    "Advanced Cybersecurity & Security Operations",
    "Experience Design & Interface Foundations",
    "Product Design & User Experience"
  ];
  const courseImages = {
  "Python": "assets/images/programs/python-development.png",
  "Python Full Stack Development": "assets/images/programs/python-development.png",

  "Human Resource Management": "assets/images/programs/human-resource-management.png",

  "Finance Management": "assets/images/programs/finance-management.png",

  "Business Development Executive":
    "assets/images/programs/business-development-executive.png",

  "Flutter Development": "assets/images/programs/flutter-development.png",

  "Business Development Manager":
    "assets/images/programs/business-development-manager.png",
  
  "React JS Development":"assets/images/all_programs/react-js-development.png",
  "Node JS Development":"assets/images/all_programs/node-js-development.png",
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
  "Statistics & Data Visualization" : "assets/images/all_programs/statistics-and-data-visualization.png",
  "Advanced Data Science & Predictive Analytics":"assets/images/all_programs/Advanced-Data-Science-&-Predictive-Analytics.png",
  "Machine Learning Fundamentals":"assets/images/all_programs/Machine-Learning-Fundamentals.png",
  "Advanced Machine Learning & Model Optimization" : "assets/images/all_programs/Advanced-Machine-Learning-&-Model-Optimization.png",
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

  const nonTechnicalCourses = [
    "Business Development Manager",
    "Business Development Executive",
    "Human Resource Management",
    "Finance Management",
    "Advanced Excel",
    "Digital Marketing",
    "Digital Analytics",
    "Business Analytics",
    "SEO",
    "Financial Analysis",
    "Canva",
    "Performance Marketing",
    "Copywriting"
  ];

  const mobileCourses = [
    "React Native Development",
    "Flutter Development"
  ];

  const designCourses = [
    "UI/UX Design",
    "Graphic Design",
    "Canva",
    "Web Designer"
  ];

  const backendCourses = [
    "Node JS Development",
    "Python",
    "Java",
    "Database Management System",
    "SQL",
    "Express JS",
    "Cloud Computing with AWS",
    "Docker & Kubernetes",
    "PHP",
    "Machine Learning Deployment & MLOps"
  ];

  function getCategories(courseName) {
    const categories = [];

    if (!nonTechnicalCourses.includes(courseName)) {
      categories.push("Software & Tech");
    }

    if (backendCourses.includes(courseName)) {
      categories.push("Backend Development");
    }

    if (mobileCourses.includes(courseName)) {
      categories.push("Mobile App Development");
    }

    if (designCourses.includes(courseName)) {
      categories.push("UI & UX Design");
    }

    if (nonTechnicalCourses.includes(courseName)) {
      categories.push("Non-Technical Programs");
    }

    return categories;
  }

  function getDescription(courseName) {
    return `
      Learn practical ${courseName} skills through expert-led sessions,
      real-world projects, and career-focused guidance.
    `;
  }

  const courses = courseNames.map(courseName => ({
    title: courseName,
    image: courseImages[courseName] || "",
    categories: getCategories(courseName),
    description: getDescription(courseName)
  }));

  const programsGrid = document.getElementById("programs-grid");
  const searchInput = document.getElementById("program-search-input");
  const searchResult = document.getElementById("search-result");
  const categoryTabs = document.querySelectorAll(".tab");

  let selectedCategory = "All Programs";

  function renderPrograms(courseList) {
    if (courseList.length === 0) {
      programsGrid.innerHTML = `
        <p class="no-results">
          No course found. Try another course name.
        </p>
      `;
      return;
    }

    programsGrid.innerHTML = courseList.map(course => {
      const imageArea = course.image
        ? `<img src="${course.image}" alt="${course.title}">`
        : `
          <div class="program-image-placeholder">
            <i class="ri-image-add-line"></i>
            <span>Add Course Image</span>
          </div>
        `;

      return `
        <article
          class="program-card"
          data-categories="${course.categories.join(",")}"
          data-href="program.html?name=${encodeURIComponent(course.title)}"
        >
          ${imageArea}

          <div class="program-content">
            <span class="program-tag">${course.categories[0]}</span>

            <h3>${course.title}</h3>

            <p>${course.description}</p>

            <a href="program.html?name=${encodeURIComponent(course.title)}" class="program-link">
              Explore Program <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }

  function applyFilters() {
    const searchValue = searchInput.value.trim().toLowerCase();

    const filteredCourses = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchValue);

      const matchesCategory =
        selectedCategory === "All Programs" ||
        course.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });

    renderPrograms(filteredCourses);

    if (searchValue === "" && selectedCategory === "All Programs") {
      searchResult.textContent = "";
    } else {
      searchResult.textContent = `${filteredCourses.length} course(s) found`;
    }
  }
searchInput.addEventListener("input", applyFilters);

  programsGrid.addEventListener("click", (e) => {
    if (e.target.closest(".program-link")) return;

    const card = e.target.closest(".program-card");
    if (card && card.dataset.href) {
      window.location.href = card.dataset.href;
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const initialSearch = urlParams.get("search");

  if (initialSearch) {
    searchInput.value = initialSearch;
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(button => button.classList.remove("active"));

      tab.classList.add("active");
      selectedCategory = tab.dataset.category;

      applyFilters();
    });
  });

  if (initialSearch) {
    applyFilters();
  } else {
    renderPrograms(courses);
  }
});

