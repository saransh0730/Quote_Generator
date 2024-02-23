let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// const quotes = [{
//     quote: `“A room without books is like a body without a soul.”`,
//     person: `Marcus Tullius Cicero`
// }, {
//     quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
//     person: `Bernard M. Baruch`
// }, {
//     quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
//     person: `Dr. Seuss`
// }, {
//     quote: `“If you tell the truth, you don't have to remember anything.”`,
//     person: `Mark Twain`
// }, {
//     quote: `“A friend is someone who knows all about you and still loves you.”`,
//     person: `Elbert Hubbard`
// }, {
//     quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
//     person: `Oscar Wilde`
// }, {
//     quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
//     person: `Mahatma Gandhi`
// }, {
//     quote: `“We accept the love we think we deserve.”`,
//     person: `Stephen Chbosky`
// }, {
//     quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
//     person: `Andre Gide`
// }, {
//     quote: `“You only live once, but if you do it right, once is enough.”`,
//     person: `Mae West`
// },
// ];

btn.addEventListener('click', getQuote);
// let random = Math.floor(Math.random() * quotes.length)

// quote.innerText = quotes[random].quote;
// person.innerText = quotes[random].person;
// })

function getQuote(){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>{
        quote.innerHTML = `"${data.content}"`;
        person.innerHTML = data.author;
    })
}
    
