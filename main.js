

//1.1

/* const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
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
bucle() */

//1.2

/* const deletedNode = document.querySelector('.fn-remove-me')
deletedNode.remove() */

//1.3

/* const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
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
bucle2() */


//1.4

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const secondDiv = document.querySelector('.secondDiv')
const thirdDiv = document.querySelector('.thirdDiv')
const generate = document.querySelector('.generateImg')

function printImg() {
    for (let i = 0; i < countries.length; i++) {
        let newHeader = document.createElement('h4')
        let newContentHeader = document.createTextNode(`${countries[i].title}`)
        newHeader.appendChild(newContentHeader);
        secondDiv.appendChild(newHeader)
        let newImg = document.createElement('img');
        newImg.src = `${countries[i].imgUrl}.jpg`
        thirdDiv.appendChild(newImg)
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

const buttons = document.querySelector('.button')

function deleteButtons() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons.value === buttons[i]) {
            countries.splice(countries[i], countries[i] + 1)
        }
        
    }
    printImg()
}

buttons.addEventListener('click', deleteButtons)