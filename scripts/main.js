import { validation, addItem, creteDomElment, moveAll}  from './utilities.js'
const toRight = document.querySelector('#toRight')
const allToRight = document.querySelector('#allToRight')
const toLeft = document.querySelector('#toLeft')
const allToLeft = document.querySelector('#allToLeft')
const new_item = document.querySelector('#new_item')
const add = document.querySelector('#add')

const miLista = JSON.parse(localStorage.getItem('miLista')) 

creteDomElment(miLista)

add.addEventListener('click', () => addItem(new_item, miLista))

toRight.addEventListener('click', () => validation(false, miLista))

toLeft.addEventListener('click', () => validation(true, miLista))

allToRight.addEventListener('click', () => moveAll(false, miLista))

allToLeft.addEventListener('click', () => moveAll(true, miLista))
 
new_item.addEventListener('keydown', (e) =>  e.keyCode === 13 && addItem(new_item, miLista))
    

