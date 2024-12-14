import quotes from "./src/quotes.js";
import {hideFavoritecard, showFavoritecard, toggleFavoriteIcon} from './src/favoritesHandler.js'

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById("generate-btn");
const toggleFavoritebtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;



function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];  
  const {quote, author} = randomQuote
  quoteElement.textContent = quote; 
  quoteAuthorElement.textContent = author; 
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoritebtn)
  toggleFavoritebtn.style.display = 'inline-block';
}



function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoritebtn);

  if (currentQuote.isFavorite) {
    showFavoritecard(currentQuote.quote, currentQuote.author, favoritesContainer);
  } else {
    hideFavoritecard(currentQuote.quote);
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoritebtn.addEventListener('click', toggleFavorite);
generateRandomQuote()

