const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const btn = document.getElementById('new-quote-btn');


function getQuote() {

    quoteText.textContent = "Loading...";
    quoteAuthor.textContent = "";

    fetch('https://dummyjson.com/quotes/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quoteText.textContent = `"${data.quote}"`;
            quoteAuthor.textContent = `— ${data.author}`;
        })
        .catch(function(error) {
            quoteText.textContent = "Oops! Something went wrong.";
            console.error("Error:", error);
        });
}


btn.addEventListener('click', getQuote);

getQuote();