const left_list = document.querySelector('#left_list')
const toRight = document.querySelector('#toRight')
const allToRight = document.querySelector('#allToRight')
const toLeft = document.querySelector('#toLeft')
const allToLeft = document.querySelector('#allToLeft')
const right_list = document.querySelector('#right_list')
const new_item = document.querySelector('#new_item')
const add = document.querySelector('#add')

const miLista = [
    { id: 1, texto: "Jorge", isLeft: true },
    { id: 2, texto: "Daniel", isLeft: false },
    { id: 3, texto: "Jose", isLeft: false },
    { id: 4, texto: "Manuel", isLeft: true },
]

let move = []

creteDomElment()

function addItem(texto) {
    if (texto.value != '') {
        miLista.push({
            id: miLista.length + 1,
            texto: texto.value,
            isLeft: true
        })
        texto.value = ''
        creteDomElment()
    }
}

function creteDomElment() {
    left_list.innerHTML = ''
    right_list.innerHTML = ''

    miLista.forEach(el => {
        const li = document.createElement('li');
        const input = document.createElement('input')
        const label = document.createElement('label')

        input.id = el.id;
        input.type = 'checkbox'

        input.addEventListener('change', function () {
            move.push(parseInt(input.id))
        })

        label.htmlFor = el.id;
        label.textContent = el.texto

        li.append(input, label)

        if (el.isLeft) {
            left_list.appendChild(li)
        } else {
            right_list.appendChild(li)
        }
    });
}

add.addEventListener('click', () => addItem(new_item))

toRight.addEventListener('click', () =>  validation(false))

toLeft.addEventListener('click', () => validation(true))

function validation(val) {
  
    move.forEach(id => {

        miLista.forEach(item => {
            if (item.id === id) {
                item.isLeft =  val
            }

        });

    });

    creteDomElment()
    move = []
}