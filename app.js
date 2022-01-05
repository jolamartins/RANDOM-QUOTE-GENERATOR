const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const tweetQuote = document.getElementById("tweet-quote");
const quoteButton = document.getElementById("new-quote");
const quoteLogo = document.getElementById("quote-logo");
const body = document.getElementById("body");


function newQuote() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quoteText.textContent = data.content;
    quoteAuthor.textContent = `-- ${data.author}`;
  })

}
newQuote();

quoteButton.addEventListener('click', () => {
  newQuote();
  randomColor();
})

function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8);
    quoteText.style.color = color;
    quoteAuthor.style.color = color;
    tweetQuote.style.backgroundColor = color;
    quoteButton.style.backgroundColor = color;
    quoteLogo.style.color = color;
    body.style.backgroundColor = color;
}
randomColor();

