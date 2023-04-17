"use strict";

albumArr = [{
  imgSrc: "https://static.wikia.nocookie.net/taylor-swift/images/8/8f/Taylor_Swift_-_Speak_Now_cover.png",
  rating: 9.2,
  albumName: "Speak Now",
  artist: "Taylor Swift",
  year: 2010,
  genres: ["Country pop", "Pop rock"]
}, {
  imgSrc: "https://taylorswift.fandom.com/wiki/Fearless?file=Fearless_-_Official.jpg",
  rating: 9.4,
  albumName: "Fearless",
  artist: "Taylor Swift",
  year: 2008,
  genres: ["Country pop", "Pop rock"]
}, {
  imgSrc: "https://taylorswift.fandom.com/wiki/1989?file=Taylor_Swift_1989.JPG",
  rating: 9.4,
  albumName: "1989",
  artist: "Taylor Swift",
  year: 1989,
  genres: ["Country pop", "Pop rock"]
}];
var cardContainer = document.querySelector(".card-container");

var renderCard = function renderCard(albumObject) {
  return "<div class=\"card\">\n    <div class=\"card__header-section\">\n      <img class=\"card__image\" src=".concat(albumObject.imgSrc, " />\n      <div class=\"card__rating\">").concat(albumObject.rating, "</div>\n    </div>\n    <div class=\"card__content\">\n      <h2 class=\"card__heading\">").concat(albumObject.albumName, "</h2>\n      <div class=\"card__description\">\n        <p class=\"card__description-text\">").concat(albumObject.artist, "</p>\n        <p class=\"card__description-text\">").concat(albumObject.year, "</p>\n      </div>\n      <hr class=\"card__line\" />\n      <p class=\"card__genres\">Genres:</p>\n      <p class=\"card__genre-values\">").concat(albumObject.genres.join(","), "</p>\n    </div>\n  </div>");
};

albumsArr.forEach(function (element) {
  cardContainer.innerHTML += renderCard(album);
});