const quotes = [
  {
    quote: "Сила не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда падаешь",
    author: "Конфуций",
  },
  {
    quote: "Единственный способ добиться успеха — делать то, что вы любите",
    author: "Стив Джобс",
  },
  {
    quote: "Счастье не в том, чтобы иметь всё, а в умении видеть радость в малом",
    author: "Лев Толстой",
  },  
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];  
  const {quote, author} = randomQuote
  quoteElement.textContent = quote; 
  quoteAuthorElement.textContent = author; 

}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();

