// const app = function() {
//   const tag = document.getElementById("intro")
  // const quotes = document.getElementsByClassName("quote");

  // const quotes = document.getElementsByTagName("article");
  //   // tag.innerHTML = "I've changed the text!";
  //
  // const cites = ducument.getElementsByTagName("cite");
  //
  // const quotes = ducument.getElementByQuoteOfTheDay("quote of the day");

  // const quotes = document.querySelectorAll(".quote");

  // to loop over children
  // const element =document.getElementById("sign-up");
  // let children = element.children;
  // for(let i = 0; i<children.length; i++){
  //   console.log(children[i]);
  //
  // }

  // const tagline = document.getElementById("tagline")
  // tagline.innerText = "New tagline";
  // tagline.innerHTML = "<span>New tagline with HTML</span>";

  // const quotes = document.getElementsByTagName("article");
  // // quotes[0].className = "red-quote";
  //
  // quotes[0].style.backgroundColor = "Tomato";
  // quotes[0].style.display = "none";
  //
  // debugger;

  const app = function(){
    // 1. create the parent container and its class.

    let quoteArticle = document.createElement("article");
    quoteArticle.classList.add("quote");


    // 2. create the first child - blockquote, and its text.

    let blockquote = document.createElement("blockquote");
    blockquote.innerText = "Keep reaching for the stars, but keep your feet on the ground. ";


    // 3. create the cite element and its text. append child

    let cite = document.createElement("cite");
    cite.innerText = "Debbie Gemmell";

    // 4. append a cite to the blockquote.
    blockquote.appendChild(cite);

    // 5. append the blockquote to the article.
    quoteArticle.appendChild(blockquote);

    // 6. Add the article to the list of quotes.
    let quotes = document.querySelector("#quotes");
    quotes.appendChild(quoteArticle);

  }


var createQuoteArticle = function(){
  let quoteArticle = document.createElement("article");
  quoteArticle.classList.add("quote");
  return quoteArticle;

}

var createBlockQuote = function(text){
  let blockquote = document.createElement("blockquote");
  blockquote.innerText = text + " ";
  return blockquote;
}

var createCite = function(author){
  let cite = document.createElement("cite");
  cite.innerText = author;
  return cite;

}

var appendElements = function(quoteArticle, blockquote, cite){
  blockquote.appendChild(cite);
  quoteArticle.appendChild(blockquote);
    let quotes = document.querySelector("#quotes");
    quotes.appendChild(quoteArticle);
}




  var addQuote = function(author, quoteText) {
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(quoteText);
  var cite = createCite(author);

  appendElements(quoteArticle, blockquote, cite);
}

  window.onload = function(){
    addQuote("John", "Cake");
  };
