console.log('I am from external js');

// option--2 //Important
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// Option--3.1
const red = document.getElementById('red-button');
red.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-3.2
const purple = document.getElementById('blue-button');
purple.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

//option 4
const pink = document.getElementById('pink-button');
pink.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = "pink";
}

// option--4--simpler version
document.getElementById('green-button').addEventListener('click', function(){
    document.body.style.backgroundColor = "green";
})