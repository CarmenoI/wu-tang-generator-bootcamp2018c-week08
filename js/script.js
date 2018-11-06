
const name = document.getElementById("text")
//name generator
let btn = document.querySelector(".choice")


btn.addEventListener("submit", function(e){
  e.preventDefault()
  console.log(generator())
})

function generator(){
  let firstPart = ["child", "young", "bling", "litty", "smooth", "hungry"];
  let lastPart = ["goat", "blaze", "nafarious", "joy", "buster", "dog"];

  let nameWu =  firstPart[Math.floor(Math.random()*firstPart.length)] +"  "+ lastPart[Math.floor(Math.random()*lastPart.length)]
  name.textContent= nameWu
  // if (document.getElementById("name")) {
  // document.getElementById("placeholder").removeChild(document.getElementById("name"));
  // }
}
// let element = document.createElement("section");
// element.setAttribute("id", "name");
// element.appendChild(document.createTextNode(name));
// document.getElementById("placeholder").appendChild(element);
// function displayCompleteMessage(msg)

//onclick name getter
//display name on screen

const name = document.getElementById("text")

let btn= document.querySelector(".choice")

btn.addEventListener("submit", function(e){
  e.preventDefault()
    console.log(generator())
})

function generator(){
  let firstPart = ["child", "young"];
  let lastPart = ["goat", "buster"];

  last
}
