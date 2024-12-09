const quotes = [
  "Сила не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда падаешь. - Конфуций",
  "Единственный способ добиться успеха — делать то, что вы любите. - Стив Джобс",  
    "Счастье не в том, чтобы иметь всё, а в умении видеть радость в малом. - Лев Толстой",  
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;  
}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();

