 function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
}

 function showFavoritecard(quote, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
    <p>${quote}</p>
    <p class = "author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

 function hideFavoritecard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export {toggleFavoriteIcon,
    showFavoritecard,
    hideFavoritecard,
}
