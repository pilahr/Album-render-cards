const albumArr = [
  {
    imgSrc:
      "https://static.wikia.nocookie.net/taylor-swift/images/8/8f/Taylor_Swift_-_Speak_Now_cover.png",
    rating: 9.2,
    albumName: "Speak Now",
    artist: "Taylor Swift",
    year: 2010,
    genres: ["Country pop", "Pop rock"],
  },
  {
    imgSrc:
      "https://static.wikia.nocookie.net/taylor-swift/images/b/bd/Fearless_-_Official.jpg",
    rating: 9.4,
    albumName: "Fearless",
    artist: "Taylor Swift",
    year: 2008,
    genres: ["Country pop", "Pop rock"],
  },
  {
    imgSrc:
      "https://static.wikia.nocookie.net/taylor-swift/images/0/0e/Taylor_Swift_1989.JPG",
    rating: 9.1,
    albumName: "1989",
    artist: "Taylor Swift",
    year: 2014,
    genres: ["Country pop", "Pop rock"],
  },
];

const cardContainer = document.querySelector(".card-container");

const renderCard = (albumObject) => {
  // object destructuring
  const { imgSrc, rating, albumName, artist, year, genres } = albumObject;

  return `<div class="card">
    <div class="card__header-section">
      <img class="card__image" src=${imgSrc} />
      <div class="card__rating">${rating}</div>
    </div>
    <div class="card__content">
      <h2 class="card__heading">${albumName}</h2>
      <div class="card__description">
        <p class="card__description-text">${artist}</p>
        <p class="card__description-text">${year}</p>
      </div>
      <hr class="card__line" />
      <p class="card__genres">Genres:</p>
      <p class="card__genre-values">${genres.join(", ")}</p>
    </div>
  </div>`;
};

albumArr.forEach((album) => {
  cardContainer.innerHTML += renderCard(album);
});
