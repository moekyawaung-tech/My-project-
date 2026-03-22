const articles = [
  {
    title: "Getting Started",
    description: "Learn how to start using this wiki project.",
    link: "pages/guides.html"
  },
  {
    title: "About This Wiki",
    description: "Read more about the purpose of this website.",
    link: "pages/about.html"
  },
  {
    title: "Tutorial Collection",
    description: "Browse useful tutorials and references.",
    link: "pages/tutorials.html"
  }
];

const articleList = document.getElementById("articleList");
const searchInput = document.getElementById("searchInput");

function displayArticles(items) {
  articleList.innerHTML = "";
  items.forEach(article => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a href="${article.link}">Read More</a>
    `;
    articleList.appendChild(card);
  });
}

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(keyword) ||
    article.description.toLowerCase().includes(keyword)
  );
  displayArticles(filtered);
});

displayArticles(articles);

