var viewQuote = document.getElementById('quote-content-pargraph');

function genQuote() { 
    var Quotes = [{quote:`“Be yourself; everyone else is already taken.”
― Oscar Wilde`},
{quote:`“So many books, so little time.”
― Frank Zappa`},
{quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`},
{quote:`“You only live once, but if you do it right, once is enough.”
― Mae West`},
{quote:`
“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`}];
var randomIndx = Math.random()*5;
var indx = Math.floor(randomIndx);
    viewQuote.innerHTML = Quotes[indx].quote;
 }