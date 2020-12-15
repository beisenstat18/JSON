/* INTRO TO JSON */

let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');




function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Aesthetic",
    "picture_url" : "one.png",
    "favorite_color" : "#F5F65D"
  },
  {
    "title" : "Tasty",
    "picture_url" : "two.png",
    "favorite_color" : "#CEF0F9"
  },
  {
    "title" : "Airy",
    "picture_url" : "three.png",
    "favorite_color" : "#F5F65D"
  },
  {
    "title" : "Classic",
    "picture_url" : "four.png",
    "favorite_color" : "#CEF0F9"
  },
  {
    "title" : "Unexpected",
    "picture_url" : "five.png",
    "favorite_color" : "#F5F65D"
  },
  {
    "title" : "Artsy",
    "picture_url" : "six.png",
    "favorite_color" : "#CEF0F9"
  },
  {
    "title" : "Crunchy",
    "picture_url" : "seven.png",
    "favorite_color" : "#F5F65D"
  },
  {
    "title" : "Foreign",
    "picture_url" : "eight.png",
    "favorite_color" : "#CEF0F9"

  },
  {
    "title" : "Spicey",
    "picture_url" : "nine.png",
    "favorite_color" : "#F5F65D"

  },
  {
    "title" : "Rustic",
    "picture_url" : "ten.png",
    "favorite_color" : "#CEF0F9"

  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}


function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);






  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}
