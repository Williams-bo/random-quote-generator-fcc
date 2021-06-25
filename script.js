window.onload = init;
function init() {
  generateQuote();
}

const COLORBANK = [
  "#3d3d3d",
  "#525252",
  "#d1d1d1",
  "#ff2e96",
  "#a300a3",
  "#0000bd",
  "#00c2c2",
  "#00bdbd",
  "#00bd00",
  "#006100",
];

const QUOTEBANK = [
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "- Anne Frank",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "- Theodore Roosevelt",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "- Martin Luther King Jr.",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "- Steve Jobs",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "- Wayne Gretzky",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West",
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "- Seneca",
  },
  {
    quote: "In order to write about life first you must live it.",
    author: "- Ernest Hemingway",
  },
];

function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];

  // bgcolor
  let colorlength = COLORBANK.length;
  let colorIndex = Math.floor(Math.random() * colorlength);
  let randomcolordata = COLORBANK[colorIndex];

  let twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";

  // Add the Quote
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat;

  // Add the author
  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += authorInApiFormat;

  let tumblrLink =
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Martin%20Luther%20King%20Jr.&amp;content=Our%20lives%20begin%20to%20end%20the%20day%20we%20become%20silent%20about%20things%20that%20matter.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button";
  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("tumblr-quote").href = tumblrLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
  document.body.style.backgroundColor = randomcolordata;
  document.getElementById("new-quote").style.backgroundColor = randomcolordata;
  document.getElementById("tweet-quote").style.backgroundColor =
    randomcolordata;
  document.getElementById("tumblr-quote").style.backgroundColor =
    randomcolordata;
  document.getElementById("quote-text").style.color = randomcolordata;
  document.getElementById("author").style.color = randomcolordata;
}
