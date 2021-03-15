$(".flip-container .flipper").click(function () {
  $(this).closest(".flip-container").toggleClass("hover");
  $(this).css("transform, rotateY(180deg)");
});

var cardnames = [
  "c-1.jpg",
  "c-10.jpg",
  "c-11.jpg",
  "c-12.jpg",
  "c-13.jpg",
  "c-14.jpg",
  "c-2.jpg",
  "c-3.jpg",
  "c-4.jpg",
  "c-5.jpg",
  "c-6.jpg",
  "c-7.jpg",
  "c-8.jpg",
  "c-9.jpg",
  "m-0.jpg",
  "m-1.jpg",
  "m-10.jpg",
  "m-11.jpg",
  "m-12.jpg",
  "m-13.jpg",
  "m-14.jpg",
  "m-15.jpg",
  "m-16.jpg",
  "m-17.jpg",
  "m-18.jpg",
  "m-19.jpg",
  "m-2.jpg",
  "m-20.jpg",
  "m-21.jpg",
  "m-3.jpg",
  "m-4.jpg",
  "m-5.jpg",
  "m-6.jpg",
  "m-7.jpg",
  "m-8.jpg",
  "m-9.jpg",
  "p-1.jpg",
  "p-10.jpg",
  "p-11.jpg",
  "p-12.jpg",
  "p-13.jpg",
  "p-14.jpg",
  "p-2.jpg",
  "p-3.jpg",
  "p-4.jpg",
  "p-5.jpg",
  "p-6.jpg",
  "p-7.jpg",
  "p-8.jpg",
  "p-9.jpg",
  "s-1.jpg",
  "s-10.jpg",
  "s-11.jpg",
  "s-12.jpg",
  "s-13.jpg",
  "s-14.jpg",
  "s-2.jpg",
  "s-3.jpg",
  "s-4.jpg",
  "s-5.jpg",
  "s-6.jpg",
  "s-7.jpg",
  "s-8.jpg",
  "s-9.jpg",
  "w-1.jpg",
  "w-10.jpg",
  "w-11.jpg",
  "w-12.jpg",
  "w-13.jpg",
  "w-14.jpg",
  "w-2.jpg",
  "w-3.jpg",
  "w-4.jpg",
  "w-5.jpg",
  "w-6.jpg",
  "w-7.jpg",
  "w-8.jpg",
  "w-9.jpg",
  "X.jpg",
];

var cardname = cardnames[Math.floor(Math.random() * cardnames.length)];

let spread = new Array(10);

let url = "https://raw.githubusercontent.com/jlollis/tarot/main/thoth/";

// array is copy of cardnames, so as to not alter our original array
let array = [...cardnames];

/* gets a random card, removes from array, splices array and returns popped card */
function popRandom(array) {
  let i = (Math.random() * array.length) | 0;
  return array.splice(i, 1)[0];
}

for (i = 0; i < spread.length; i++) {
  spread[i] = url + popRandom(array);
}

var img = document.createElement("img");
img.src = spread[0];
var src = document.getElementById("C-1-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[1];
var src = document.getElementById("C-2-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[2];
var src = document.getElementById("C-3-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[3];
var src = document.getElementById("C-4-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[4];
var src = document.getElementById("C-5-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[5];
var src = document.getElementById("C-6-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[6];
var src = document.getElementById("C-7-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[7];
var src = document.getElementById("C-8-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[8];
var src = document.getElementById("C-9-back");
src.appendChild(this.img);

var img = document.createElement("img");
img.src = spread[9];
var src = document.getElementById("C-10-back");
src.appendChild(this.img);