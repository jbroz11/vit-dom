let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  (function shortenPageTitle() {
    document.querySelector('#main-title').innerHTML = 'DOM';
    // main_title
  })();


  // Part 2
  (function changeBodyBgColor() {
    document.querySelector('body').style.backgroundColor = 'pink';
  })();


  // Part 3
  (function removeLastFavoriteThing() {
    document.querySelector('#favorite-things').lastChild.remove();
    document.querySelector('#favorite-things').lastChild.remove();
  })();


  // Part 4
  (function makeSpecialTitlesBigger() {
    for (var element of document.querySelectorAll('.special-title')) {
      element.style.fontSize = '2em'
    }
  })();


  // Part 5
  (function RemoveChicagoRace() {
    for (var child of document.querySelector('#past-races').children) {
      (child.innerText.toLowerCase() == 'chicago') && child.remove();
    }
  })();

  // Part 6
  (function addPastRace() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Chicago is actually the best city");
    node.appendChild(textnode);
    document.querySelector('#past-races').appendChild(node);
  })();


  // Create a new `.blog-post` corresponding to the new city added in **Part 6**. 
  // You will have to create a new `<div>` with class of `.blog-post`, a new `<h2>` 
  // with text, and a new `<p>` with some text. Think about what order you want to 
  // create the elements, and what order you want to append them in.


  // Part 7
  (function createNewBlogPost() {
    var topnode = document.createElement("div");
    topnode.classList.add('blog-post');
    topnode.classList.add('purple');
    var headernode = document.createElement('h2');
    var h_textnode = document.createTextNode('Chicago');
    headernode.appendChild(h_textnode);
    var pnode = document.createElement('p');
    var p_textnode = document.createTextNode('Some stuff about how Chicago is the best city');
    pnode.appendChild(p_textnode);
    var refnode = document.querySelector('.main').lastChild;
    topnode.appendChild(headernode);
    topnode.appendChild(pnode);
    refnode.after(topnode);
  })();

});
