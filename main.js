'use strict';

//1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const div = document.querySelector('.div')
const ul = document.createElement('ul')
div.appendChild(ul)

function bucle() {
    for (let i = 0; i < countries.length; i++) {
        let newItem = document.createElement('li');
        let newContent = document.createTextNode(`${countries[i]}`);
        newItem.appendChild(newContent);
        ul.appendChild(newItem)
        
    }
}
bucle()

//1.2

const deletedNode = document.querySelector('.fn-remove-me')
deletedNode.remove()

//1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const test = document.querySelector(`div[data-function="printHere"]`)

const ul2 = document.createElement('ul')
test.appendChild(ul2)

function bucle2() {
    for (let i = 0; i < cars.length; i++) {
        let newItem2 = document.createElement('li');
        let newContent2 = document.createTextNode(`${cars[i]}`);
        newItem2.appendChild(newContent2);
        ul2.appendChild(newItem2)
        
    }
}
bucle2()


//1.4

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1', number: 1}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2', number: 2},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3', number: 3},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4', number: 4},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5', number: 5}
];

const generate = document.querySelector('.generateImg')
const newDiv = document.querySelector('.images') 

function printImg() {    
    for (let i = 0; i < countries.length; i++) {
        let newHeader = document.createElement('h4')
        let newContentHeader = document.createTextNode(`${countries[i].title} `)
        let anotherContent = document.createTextNode(`${countries[i].number}`)
        newHeader.appendChild(newContentHeader);
        newHeader.appendChild(anotherContent);
        newDiv.appendChild(newHeader)
        let newImg = document.createElement('img');
        newImg.src = `${countries[i].imgUrl}.jpg`
        newDiv.appendChild(newImg)
    }
}

generate.addEventListener('click', printImg)

//1.5

const btn = document.querySelector('.deleteButton')

function deleteTheLastElement() {
    countries.pop()
    printImg()
}

btn.addEventListener('click', deleteTheLastElement)

//1.6

const anotherb1 = document.querySelector('#b1')
const anotherb2 = document.querySelector('#b2')
const anotherb3 = document.querySelector('#b3')
const anotherb4 = document.querySelector('#b4')
const anotherb5 = document.querySelector('#b5')

function deleteButtons() {
    countries.splice(`${anotherb1.value - 1}`, 1)
    printImg()
}
function deleteButtons2() {
    countries.splice(`${anotherb2.value - 1}`, 1)
    printImg()
}
function deleteButtons3() {
    countries.splice(`${anotherb3.value - 1}`, 1)
    printImg()
}
function deleteButtons4() {
    countries.splice(`${anotherb4.value - 1}`, 1)
    printImg()
}
function deleteButtons5() {
    countries.splice(`${anotherb5.value - 1}`, 1)
    printImg()
}

anotherb1.addEventListener('click', deleteButtons)
anotherb2.addEventListener('click', deleteButtons2)
anotherb3.addEventListener('click', deleteButtons3)
anotherb4.addEventListener('click', deleteButtons4)
anotherb5.addEventListener('click', deleteButtons5)