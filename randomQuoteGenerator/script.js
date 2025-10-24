const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you."
];

const quoteText = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')

function randomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    quoteText.textContent = quotes[randomIndex]
}

generateBtn.addEventListener('onclick', randomQuote())