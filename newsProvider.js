const apiKey = "0c769668af6b48489260637351ca247d";
const baseUrl =
  "https://newsapi.org/v2/top-headlines?apiKey=" +
  apiKey +
  "&language=en&sources=abc-news";

const newsShowcase = document.getElementById("news-showcase");

$.ajax({
  url: baseUrl,
  async: false,
  dataType: "json",
  success: function (response) {
    for (var i = 0; i < response.articles.length; i++) {
      const currentArticle = response.articles[i];
      const articleCard = createArticleCard(
        currentArticle.urlToImage,
        currentArticle.url,
        currentArticle.title
      );

      newsShowcase.appendChild(articleCard);
    }
  },
});

function createArticleCard(imageUrl, articleUrl, articleTitle) {
  const articleCard = document.createElement("div");
  articleCard.classList.add("article-card");

  const articleTitleElement = document.createElement("h3");
  articleTitleElement.innerText = articleTitle;

  const articleImage = document.createElement("img");
  articleImage.src = imageUrl;

  const articleLink = document.createElement("a");
  articleLink.href = articleUrl;

  articleLink.appendChild(articleImage);
  articleLink.appendChild(articleTitleElement);

  articleCard.appendChild(articleLink);

  return articleCard;
}
