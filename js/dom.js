// console.log(document.getElementsByTagName('li'));//document is the object of the html file. html file is a html type object.

const liCollections = document.getElementsByTagName('li');//get all li elements

for (const li of liCollections) {
    // console.log(li.innerText);// innerText return the text of the elements.
}

const places = document.getElementsByClassName('places');
for (const place of places) {
    // console.log(place.innerText);
}

const fruitItems = document.querySelectorAll('.fruits li'); // returns nodelist, returs a node list of all the node of the specific given selector. 

for (const fruit of fruitItems) {
    // console.log(fruit);
}

const firstFruit = document.querySelector('.fruits li'); //returns only first element. ALso returns the html collection

console.log(firstFruit);

const main = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
<h2 id="dom">hello dom</h2>
<ul>
    <li>Carrot</li>
    <li>Rice</li>
    <li>Aplle</li>
</ul>
`;


main.appendChild(section);

const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = "2px solid red";
    section.style.marginBottom = '10px';
    section.style.borderRadius = "20px";
    section.style.padding = "10px 50px";
    section.style.backgroundColor = "lightgrey";
}

const place = document.getElementById('place');
place.classList.add("text-align", "yello-text");
place.classList.remove('yello-text');



