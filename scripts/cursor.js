// source: https://youtu.be/7eE8xPyXSR4?si=otwaWQHx0Sp_ZLEF
// src 2:  https://stackoverflow.com/questions/64159804/creating-a-disney-dust-style-cursor-trail

const coords = {x: 0, y:0}
const sparkles = document.getElementsByClassName(".sparkle");

sparkles.forEach(function(sparkle)){
    // setting start position of sparkles
    sparkle.x = 0;
    sparkle.y = 0;
}

window.onmousemove = e => {
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateSparkles();
}

function animateSparkles(){
    let x = coords.x;
    let y = coords.y;
    sparkles.forEach(function (sparkle, index)){
	// this feels. so insanely cursed
	sparkle.style.transform = `translate(#{coords.x}px, #{coords.y}px)`;
    }
}
