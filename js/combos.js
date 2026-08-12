document.addEventListener("DOMContentLoaded", () => {

const combos = [

    {
        title: "Web Development",
        image: "assets/images/combos/web-development.png",
        description: "• HTML<br>• CSS<br>• React JS<br>• Node JS<br>• WordPress<br>• PHP"
    },
    {
        title:"ML Engineer",
        image:"assets/images/combos/ml-engineer.png",
     description: "• Python<br>• Machine Learning Fundamentals<br>• Deep Learning<br>• Advanced Machine Learning & Model Optimization<br>• Machine Learning Deployment & MLOps"
    },

    {
        title: "MEAN Full Stack Developer",
        image: "assets/images/combos/mean-full-stack-developer.png",
        description: "• HTML<br>• CSS<br>• JavaScript<br>• Angular<br>• Node JS<br>• Express JS<br>• MongoDB"
    },

    {
        title: "Data Scientist",
        image: "assets/images/combos/data-scientist.png",
        description: "• Python<br>• SQL<br>• Power BI<br>• Python & Data Analytics<br>• Machine Learning Fundamentals<br>• Deep Learning<br>• Advanced Machine Learning & Model Optimization"
    },

    {
        title: "API Developer",
        image: "assets/images/combos/api-developer.png",
        description: "• Node JS<br>• Express JS<br>• Python<br>• SQL<br>• Java<br>• Database Management"
    },

    

     {
        title: "Python Full Stack Developer",
        image: "assets/images/combos/python-full-stack-developer.png",
        description: "• Python<br>• Django<br>• SQL<br>• HTML<br>• CSS<br>• React JS"
    },

    {
        title: "Full Stack Developer",
        image: "assets/images/combos/full-stack-developer.png",
        description: "• HTML<br>• CSS<br>• React JS<br>• Node JS<br>• Express JS<br>• MongoDB"
    },

    {
        title: "AI Engineer",
        image: "assets/images/combos/ai-engineer.png",
        description: "• Python<br>• Deep Learning<br>• AI Tools<br>• Generative AI & Prompt Engineering<br>• LLM Applications & RAG Development<br>• AI Agents & Advanced Generative AI"
    },

    {
        title: "Marketing Specialist",
        image: "assets/images/combos/marketer.png",
       description: "• Digital Marketing<br>• SEO<br>• Performance Marketing<br>• Canva"
    },

    {
        title: "Design Specialist",
        image: "assets/images/combos/designer.png",
        description: "• Digital Design<br>• Canva<br>• Experience Design & Interface Engineering<br>• Product Design & User Experience"
    },

    {
        title: "Tech Professional",
        image: "assets/images/combos/tech-geeks.png",
        description: "• Python, C++, JAVA (Select Any One)<br>• DSA with Selected Language<br>• Cloud Computing with AWS<br>• Docker & Kubernetes"
    },

    {
        title: "Cloud Development Engineer",
        image: "assets/images/combos/cloud-development-engineer.png",
        description: "• Cloud Computing with AWS<br>• Docker & Kubernetes<br>• Python"
    },

    {
        title: "Finance Professional",
        image: "assets/images/combos/finance-professional.png",
         description: "• Financial Analysis <br>• Advanced Excel <br> •Power BI"
    },

    {
        title: "DevOps Engineer",
        image: "assets/images/combos/devops-engineer.png",
        description: "• Docker & Kubernetes<br>• Cloud Computing with AWS<br> • Python"
    },

    

     {
        title: "Android Developer",
        image: "assets/images/combos/android-developer.png",
        description: "• Java<br>• Kotlin<br>• Android Development"
    },

    {
        title: "IOS Developer",
        image: "assets/images/combos/ios-developer.png",
        description: "• Swift <br>• iOS Development <br> •XCode"
    }

];
/* =====================================================
   DOM ELEMENTS
===================================================== */

const programsGrid = document.getElementById("programs-grid");
const searchInput = document.getElementById("program-search-input");
const searchResult = document.getElementById("search-result");


/* =====================================================
   RENDER COMBO PROGRAMS
===================================================== */

function renderPrograms(programList) {

    if (programList.length === 0) {

        programsGrid.innerHTML = `
            <p class="no-results">
                No Combo Program Found.
            </p>
        `;

        return;
    }

    programsGrid.innerHTML = programList.map(program => {

        const imageSection = program.image

            ? `<img src="${program.image}" alt="${program.title}">`

            : `
                <div class="program-image-placeholder">

                    <i class="ri-image-add-line"></i>

                    <span>Image Coming Soon</span>

                </div>
            `;

        return `

            <article class="program-card"role="link" tabindex="0" onclick="window.location.href='pricing.html'" onkeypress="if(event.key==='Enter'){window.location.href='pricing.html'}">


                ${imageSection}

                <div class="program-content">

                    <span class="program-tag">

                        Combo Program

                    </span>

                    <h3>

                        ${program.title}

                    </h3>

                    <p>

                        ${program.description}

                    </p>
                </div>

            </article>

        `;

    }).join("");

}


/* =====================================================
   SEARCH
===================================================== */

function searchPrograms() {

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    const filteredPrograms = combos.filter(program =>

        program.title
            .toLowerCase()
            .includes(searchValue)

    );

    renderPrograms(filteredPrograms);

    if (searchValue === "") {

        searchResult.textContent = "";

    } else {

        searchResult.textContent =
            `${filteredPrograms.length} Combo Program(s) Found`;

    }

}


/* =====================================================
   EVENTS
===================================================== */

searchInput.addEventListener(
    "input",
    searchPrograms
);

const urlParams = new URLSearchParams(window.location.search);
const initialSearch = urlParams.get("search");

if (initialSearch) {
    searchInput.value = initialSearch;
}

/* =====================================================
   INITIAL LOAD
===================================================== */

renderPrograms(combos);

/* =====================================================
   PAGE INITIALIZATION
===================================================== */

// Display all combo programs when page loads
// Display all combo programs when page loads
if (initialSearch) {
    searchPrograms();
} else {
    renderPrograms(combos);
}

// Live search
searchInput.addEventListener("input", searchPrograms);

// Optional: Clear search when ESC is pressed
searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchInput.value = "";
        searchPrograms();

    }

});

});
