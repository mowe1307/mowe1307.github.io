
function getQuote() {
  const image = document.querySelector('img');
  image.src = 'https://random-d.uk/api/randomimg?t=' + new Date().getTime();
}
function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const endpoint = 'https://random-d.uk/api/v2/quack';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
