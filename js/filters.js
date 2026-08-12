document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#home-category-tabs .tab");
  const cards = document.querySelectorAll("#programs .program-card");

  const programCategories = {
    "Python Development": ["software", "backend"],
    "Human Resource Management": ["non-technical"],
    "Data Science & AI": ["software"],
    "Finance Management": ["non-technical"],
    "Generative AI": ["software"],
    "Business Development Executive": ["non-technical"],
    "Flutter Development": ["software", "mobile"],
    "Business Development Manager": ["non-technical"]
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selectedCategory = tab.dataset.category;

      tabs.forEach(button => button.classList.remove("active"));
      tab.classList.add("active");

      cards.forEach(card => {
        const title = card.querySelector("h3").textContent.trim();
        const categories = programCategories[title] || [];

        const shouldShow =
          selectedCategory === "all" ||
          categories.includes(selectedCategory);

        card.style.display = shouldShow ? "flex" : "none";
      });
    });
  });
});