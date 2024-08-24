// Tooltip Bootstrap
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
// Light And Dark

function light(){
    document.body.style.backgroundColor = "white";

    let links = document.querySelectorAll(".links");
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "black";
    }

    document.querySelector(".light-btn").style.backgroundColor = "rgb(20, 20, 20)";
    document.querySelector(".light-btn").style.color = "white";
    document.querySelector(".dark-btn").style.backgroundColor = "transparent";
    document.querySelector(".dark-btn").style.color = "black";

    document.getElementById("edit-btn").style.backgroundColor= "rgb(221, 221, 221)";

    document.querySelector(".logo").setAttribute('src', 'google.png');
    document.getElementById("light-img").setAttribute('src','sun-white.png');
    document.getElementById("dark-img").setAttribute('src','dark.png');
}
function dark(){
    document.body.style.backgroundColor = "rgb(56, 59, 67)";

    let links = document.querySelectorAll(".links");
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#FFFFFF";
    }

    document.querySelector(".dark-btn").style.backgroundColor = "rgb(20, 20, 20)";
    document.querySelector(".dark-btn").style.color = "white";
    document.getElementById("dark-img").setAttribute('src','dark-white.png');
    document.getElementById("light-img").setAttribute('src','sun.png');
    document.querySelector(".light-btn").style.backgroundColor = "transparent";
    document.querySelector(".light-btn").style.color = "black";

    document.getElementById("edit-btn").style.backgroundColor= "rgb(221, 221, 221)";

    document.querySelector(".logo").setAttribute('src', 'google.png');
}

// Color Theme
function color1(){

document.body.style.backgroundColor = "#c3e0b3";

document.querySelector(".logo").setAttribute('src', 'green.png');

let links = document.querySelectorAll(".links");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "black";
}

document.getElementById("edit-btn").style.backgroundColor= "#c3e0b3";

}

function color2(){

document.body.style.backgroundColor = "#f2da77";

document.querySelector(".logo").setAttribute('src', 'yellow.png');

let links = document.querySelectorAll(".links");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "black";
}

document.getElementById("edit-btn").style.backgroundColor= "#f2da77";

}

function color3(){

document.body.style.backgroundColor = "#fddbc7";

document.querySelector(".logo").setAttribute('src', 'orange.png');

let links = document.querySelectorAll(".links");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "black";
}

document.getElementById("edit-btn").style.backgroundColor= "#fddbc7";

}


function color4(){

document.body.style.backgroundColor = "#f4d0d8";

document.querySelector(".logo").setAttribute('src', 'pink.png');

let links = document.querySelectorAll(".links");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "black";
}

document.getElementById("edit-btn").style.backgroundColor= "#f4d0d8";

}


function color5(){

document.body.style.backgroundColor = "#f4d0d8";
document.querySelector(".logo").setAttribute('src', 'violet.png');

let links = document.querySelectorAll(".links");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "black";
}

document.getElementById("edit-btn").style.backgroundColor= "#f4d0d8";

}


function color6(){

document.body.style.backgroundColor = "#a6e5e1";

document.querySelector(".logo").setAttribute('src', 'aqua.png');

let links = document.querySelectorAll(".links");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "black";
}

document.getElementById("edit-btn").style.backgroundColor= "#a6e5e1";

}