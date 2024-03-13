const left_list = document.querySelector('#left_list')
const toRight = document.querySelector('#toRight')
const allToRight = document.querySelector('#allToRight')
const toLeft = document.querySelector('#toLeft')
const allToLeft = document.querySelector('#allToLeft')
const right_list = document.querySelector('#right_list')
const new_item = document.querySelector('#new_item')
const add = document.querySelector('#add')

 

if (localStorage.getItem('miLista') === null) { // evitar sobreEscribir los datos existentes en el localStorage

    localStorage.setItem('miLista', JSON.stringify([]))// Enviar datos iniciales al localStorage
     //JSON.stringify convierte un array a estring para enviarlo a localStorage

}

const miLista = JSON.parse(localStorage.getItem('miLista')) // obtner los datos del localStorage
//JSON.parse devule los valores a su forma de array




let move = []

creteDomElment()

add.addEventListener('click', () => addItem(new_item))

toRight.addEventListener('click', () => validation(false))

toLeft.addEventListener('click', () => validation(true))

allToRight.addEventListener('click', () => {
    miLista.forEach(item => item.isLeft = false)
    localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
    creteDomElment()
})

allToLeft.addEventListener('click', () => {
    miLista.forEach(item => item.isLeft = true)
    localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
    creteDomElment()
})

function validation(val) {

    move.forEach(id => {

        miLista.forEach(item => {
            if (item.id === id) {
                item.isLeft = val
            }

        });

    });

    creteDomElment()
    localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
    move = []
}

function addItem(texto) {
    if (texto.value != '') {
        miLista.push({
            id: miLista.length + 1,
            texto: texto.value,
            isLeft: true
        })
        texto.value = ''
        creteDomElment()
        localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
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
            
             if(input.checked) {
                 move.push(parseInt(input.id))
   
             }else{
         
                const index =  move.findIndex(el =>  el === parseInt(input.id))
                move.splice(index, 1)
             
             }
            
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



const newList = [
    {
        nombre: 'Jorge', 
        apellido: 'Sosa',
        edad: 72
    },
    {
        nombre: 'Erick', 
        apellido: 'Sosa',
        edad: 41
    },
    {
        nombre: 'Angelo', 
        apellido: 'Sosa',
        edad: 16
    },
    {
        nombre: 'Ramses', 
        apellido: 'Sosa',
        edad: 0
    },

]
 