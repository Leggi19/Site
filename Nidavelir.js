// let elem = document.querySelector(".about__text");
// let bg = document.querySelector(".about_item text");
// elem.onmouseover = function(){
//     this.style.color="black";
// }

// bg.onmouseout = function(){
//     this.style.backgroundColor = "pink";
// }


let elem = document.querySelector("#text");
let text = document.querySelector(".about__text");
elem.onmouseover = function(){
    this.style.backgroundColor = "black";
    text.style.color = "white";
};

elem.onmouseout = function(){
    this.style.backgroundColor = "white";
    text.style.color="#999";
};

