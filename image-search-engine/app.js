let accessKey = "BNCwoCiU3eoNwPNXFTOOL8Qi-zqWbWNMwdGF4g4Sqr8";
let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchButton = document.getElementById("search-buttonm");
let searchResults = document.getElementById("search-results");
let showMorebtn = document.getElementById("show-more-btn");

let page = 1;
async function searchImage() {
  let keyword = searchBox.value;
  let API_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(API_URL);
  const data = await response.json();
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.full;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResults.appendChild(imageLink);
    const title = document.createElement("p");
    title.innerText = result.description;
    searchResults.appendChild(title);
  });
  showMorebtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});
showMorebtn.addEventListener("click", () => {
  page++;
  searchImage();
});
