let title = document.getElementById("title");
title.style.backgroundColor = "blue";



// 1. Using Js to style my first paragraph
// let DOM = document.getElementById("DOM");
// DOM.style.backgroundColor = "gray";
// DOM.style.color = "black"
// DOM.innerHTML = "I know now what the DOM is 🤲 "

//Using event and event listerners to change the color and text of my first paragraph.
function graynblack(){
dom.style.backgroundColor = "gray";
dom.style.color = "black";
dom.innerHTML = "I know that the DOM is 🤲 .";
}
let dom = document.getElementById("DOM");
dom.addEventListener("click",graynblack);



//2. Using Js to style my Second Paragraph
// let sel = document.getElementById("sel");
// sel.style.backgroundColor = "Yellow";
// sel.style.color = "black";
// sel.innerHTML = "I know how to access/select elements in the DOM 👊";

//Using event and event listeners to change the color and text of the second paragraph.
function yellownblack(){
    yel.style.backgroundColor ="yellow";
    yel.style.color = "black";
    yel.innerHTML = "I know how to access/select elements in the DOM 👊";
}
let yel = document.getElementById("sel");
yel.addEventListener("click",yellownblack);



//3. Using Js to style my third paragraph
// let use = document.getElementById("use");
// use.style.backgroundColor = "green";
// use.style.color = "black";
// use.innerHTML = "I know how to use the style methods to change the style of an element in the DOM ✅";

//Using event and event listeners to change the color and text of the third paragraph.
function greennblack(){
    us.style.backgroundColor = "green";
    us.style.color = "black";
    us.innerHTML ="I know how to use the style methods to change the style of an element in the Dom ✅";
}
let us = document.getElementById("use");
us.addEventListener("click",greennblack);



//4. Using Js to style my fourth paragraph
// let styl = document.getElementById("styl");
// styl.style.backgroundColor = "purple";
// styl.style.color = "white";
// styl.innerHTML = "I know how the styling properties differ in JS from CSS👍";

//Using event and event listener to change the color and text of the third paragaph.
function purplenwhite(){
    styl.style.backgroundColor = "purple";
    styl.style.color = "white";
    styl.innerHTML = "I know how the styling properties differ in JS from CSS";
}
let styl = document.getElementById("styl"); 
styl.addEventListener("click",purplenwhite);



//5. using Js to style my fifth paragraph
// let excited = document.getElementById("excited");
// excited.style.backgroundColor = "black";
// excited.style.color = "white"
// excited.innerText = "Yes I did it!! I manipulated the DOM and styled my elements 🥰🥰🥰🥰"

//Using Js Event and EventListerner to style my fifth paragraph. 
function blacknwhite(){
    exc.style.backgroundColor = "black";
    exc.style.color = "white";
    exc.innerHTML = "Yes i did it!! I manipulated the DOM and styles my elemennts";
}
let exc = document.getElementById("excited");
exc.addEventListener("click",blacknwhite);

//using event and event listeners to view reveal the image.
function revealimg(){ // the reveal function here means, select the image
    let img = document.querySelector(".mypic");// and reveal it ("block")
    img.style.display = "block";

}
let clickview = document.querySelector(".btn");//this means you have selected the element with the class "btn", and placed in a variable called 'clickview'
clickview.addEventListener("click",revealimg);// this line means if the element with the class "btn" is clicked the "reveal" fucntion should be executed. 

