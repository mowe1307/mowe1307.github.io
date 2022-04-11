//async function getQuote() {
  //console.log("quote button was clicked");
  //try {
   //const response = await fetch(endpoint,{mode: 'no-cors'});
    //if (!response.ok) {
     //throw Error(response.statusText)
    //}

    //console.log(response);
    //const json = await response.json();
    //console.log(json);
   //displayQuote(json.url);
  //}catch(err) {
    //console.log(err)
   //alert('no ducks for you');
 //}
//}
function getQuote() {
  const 'image' = document.querySelector(‘img’);
  image.src = 'https://random-d.uk/api/randomimg?t=' + new Date().getTime();
}
function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const endpoint = 'https://random-d.uk/api/v2/quack';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
