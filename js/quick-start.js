document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    {
      title: "HTML",
      image: "assets/images/quick_start/html.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "CSS",
      image: "assets/images/quick_start/css.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "WordPress Development",
      image: "assets/images/quick_start/wordpress_development.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Web Designer",
      image: "assets/images/quick_start/web_designer.png",
      categories: ["Web & Software Development", "Digital Marketing & Design"],
    },
    {
      title: "PHP",
      image: "assets/images/quick_start/php.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "C-Programming",
      image: "assets/images/quick_start/C-Porgramming.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "C++",
      image: "assets/images/quick_start/c++.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Java",
      image: "assets/images/quick_start/java.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Kotlin",
      image: "assets/images/quick_start/Kotlin.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Ruby",
      image: "assets/images/quick_start/Ruby.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Python",
      image: "assets/images/quick_start/Python.png",
      categories: ["Web & Software Development", "Data & Analytics"],
    },
    {
      title: "React JS Development",
      image: "assets/images/quick_start/React JS Development.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Node JS Development",
      image: "assets/images/quick_start/Node JS.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Express JS",
      image: "assets/images/quick_start/Express JS.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Next JS",
      image: "assets/images/quick_start/Next JS.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "React Native Development",
      image: "assets/images/quick_start/React Native Development.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "Flutter Development",
      image: "assets/images/quick_start/Flutter Development.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "SQL",
      image: "assets/images/quick_start/SQL.png",
      categories: ["Web & Software Development", "Data & Analytics"],
    },
    {
      title: "Database Management System",
      image: "assets/images/quick_start/DBMS.png",
      categories: ["Web & Software Development", "Data & Analytics"],
    },
    {
      title: "Advanced Excel",
      image: "assets/images/quick_start/Advanced Excel.png",
      categories: ["Data & Analytics", "Business & Management"],
    },
    {
      title: "Power BI",
      image: "assets/images/quick_start/Power BI.png",
      categories: ["Data & Analytics"],
    },
    {
      title: "Python & Data Analysis",
      image: "assets/images/quick_start/Python & Data Analysis.png",
      categories: ["Data & Analytics"],
    },
    {
      title: "Statistics & Data Visualization",
      image: "assets/images/quick_start/Statistics & Data Visualization.png",
      categories: ["Data & Analytics"],
    },
    {
      title: "DSA with C++",
      image: "assets/images/quick_start/DSA with C++.png",
      categories: ["Web & Software Development", "Data & Analytics"],
    },
    {
      title: "DSA with Java",
      image: "assets/images/quick_start/DSA with Java.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "DSA with Python",
      image: "assets/images/quick_start/DSA with Python.png",
      categories: ["Web & Software Development"],
    },
    {
      title: "R-Programming",
      image: "assets/images/quick_start/R Programming.png",
      categories: ["Data & Analytics"],
    },
    {
      title: "Business Development Executive",
      image: "assets/images/quick_start/Busniess Development Executive.png",
      categories: ["Business & Management"],
    },
    {
      title: "Business Development Manager",
      image: "assets/images/quick_start/Business Development Manager.png",
      categories: ["Business & Management"],
    },
    {
      title: "Human Resource Management",
      image: "assets/images/quick_start/Human Resource Management.png",
      categories: ["Business & Management"],
    },
    {
      title: "Finance Management",
      image: "assets/images/quick_start/Finance Management.png",
      categories: ["Business & Management"],
    },
    {
      title: "Business Analytics",
      image: "assets/images/quick_start/Business Analytics.png",
      categories: ["Business & Management", "Data & Analytics"],
    },
    {
      title: "Financial Analytics",
      image: "assets/images/quick_start/Financial Analytics.png",
      categories: ["Business & Management", "Data & Analytics"],
    },
    {
      title: "Digital Marketing",
      image: "assets/images/quick_start/Digital Marketing.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "Digital Analytics",
      image: "assets/images/quick_start/Digital Analytics.png",
      categories: ["Digital Marketing & Design", "Data & Analytics"],
    },
    {
      title: "SEO",
      image: "assets/images/quick_start/SEO.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "Performance Marketing",
      image: "assets/images/quick_start/Performance Marketing.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "Graphic Design",
      image: "assets/images/quick_start/Graphic Design.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "Canva",
      image: "assets/images/quick_start/Canva.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "Experience Design & Interface Foundations",
      image: "assets/images/quick_start/Experience Design & Interface Foundation.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "Product Design & User Experience",
      image: "assets/images/quick_start/Product Designer & User Experience.png",
      categories: ["Digital Marketing & Design"],
    },
    {
      title: "AI Tools",
      image: "assets/images/quick_start/AI Tools.png",
      categories: ["General / Other"],
    }
  ];

  function getDescription(courseName) {
    return `Learn practical ${courseName} skills through expert-led sessions, real-world projects, and career-focused guidance.`;
  }

  // Populate descriptions
  courses.forEach(course => {
    course.description = getDescription(course.title);
  });

  const programsGrid = document.getElementById("programs-grid");
  const searchInput = document.getElementById("program-search-input");
  const searchResult = document.getElementById("search-result");
  const categoryTabs = document.querySelectorAll(".tab");

  let selectedCategory = "All";

  function renderPrograms(courseList) {
    if (!programsGrid) return;
    if (courseList.length === 0) {
      programsGrid.innerHTML = `
        <p class="no-results" style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: var(--text-secondary); padding: 40px 0;">
          No course found. Try another search query.
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

      const primaryTag = course.categories[0] || "Program";

      return `
        <article
          class="program-card"
          data-categories="${course.categories.join(",")}"
          data-href="program.html?name=${encodeURIComponent(course.title)}"
        >
          ${imageArea}

          <div class="program-content">
            <span class="program-tag">${primaryTag}</span>

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
    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filteredCourses = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchValue);

      const matchesCategory =
        selectedCategory === "All" ||
        course.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });

    renderPrograms(filteredCourses);

    if (searchResult) {
      if (searchValue === "" && selectedCategory === "All") {
        searchResult.textContent = "";
      } else {
        searchResult.textContent = `${filteredCourses.length} course(s) found`;
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  if (programsGrid) {
    programsGrid.addEventListener("click", (e) => {
      if (e.target.closest(".program-link")) return;

      const card = e.target.closest(".program-card");
      if (card && card.dataset.href) {
        window.location.href = card.dataset.href;
      }
    });
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      selectedCategory = tab.dataset.category || "All";
      applyFilters();
    });
  });

  // Initial render
  renderPrograms(courses);
});
