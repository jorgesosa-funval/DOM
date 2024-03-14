if (localStorage.getItem('miLista') === null) { // evitar sobreEscribir los datos existentes en el localStorage

    localStorage.setItem('miLista', JSON.stringify([]))// Enviar datos iniciales al localStorage
    //JSON.stringify convierte un array a estring para enviarlo a localStorage

}
const left_list = document.querySelector('#left_list')
const right_list = document.querySelector('#right_list')
let move = []
/* 
   Mover Elementos Seleccionado  isquierda o derecha dependiendo el evento 

*/
export function validation(condition, miLista) {

    move.forEach(id => {

        miLista.forEach(item => {
            if (item.id === id) {
                item.isLeft = condition
            }

        });

    });

    creteDomElment(miLista)
    localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
    move = []
}

/* 
    Agrega un nuevo ELemento a la lista (miLista) y actualiza el localStorage
*/
export function addItem(texto, miLista) {
    if (texto.value != '') {
        miLista.push({
            id: miLista.length + 1,
            texto: texto.value,
            isLeft: true
        })
        texto.value = ''
        creteDomElment(miLista)
        localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
    }
}

/* 
    Crear elemento li para mostrarlo en el DOM
*/
export function creteDomElment(miLista) {
    left_list.innerHTML = ''
    right_list.innerHTML = ''

    miLista.forEach(el => {
        const li = document.createElement('li');
        const input = document.createElement('input')
        const label = document.createElement('label')

        input.id = el.id;
        input.type = 'checkbox'

        input.addEventListener('change', function () {

            if (input.checked) {
                move.push(parseInt(input.id))

            } else {

                const index = move.findIndex(el => el === parseInt(input.id))
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
/* 
    Mueve Todos los elementos a la izquierda o derecha dependiendo del evento
*/
export function moveAll(condition, miLista) {
    miLista.forEach(item => item.isLeft = condition)
    localStorage.setItem('miLista', JSON.stringify(miLista)) // actualizando la informacion en el Local Storage
    creteDomElment(miLista)
}

export function hola(){
    console.log('Saludar')
}
 