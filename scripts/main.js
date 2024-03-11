const left_list = document.querySelector('#left_list')
const right_list = document.querySelector('#right_list')
const new_item = document.querySelector('#new_item')
const add = document.querySelector('#add')
const toLeft = document.querySelector('#to_left')

const miLista = [
    { id: 1, texto: '1', isLeft: true },
    { id: 2, texto: '2', isLeft: false },
    { id: 3, texto: '3', isLeft: true },


]

function innerHtmlElment() {
    miLista.forEach(ele => {
        const item = `
            <li>
                <input type="checkbox" id="${ele.id}" />
                <label for="${ele.id}">${ele.texto}</label>
            </li>`

        if (ele.isLeft) {
            left_list.innerHTML += item

        } else {
            right_list.innerHTML += item
        }

    })

    const inputList = [...document.querySelectorAll('input[type=checkbox]')]
    inputList.forEach(item => item.addEventListener('change', function () {
        console.log(this.id)
    }))
}


function domElment() {
    miLista.forEach(el => {
        const li = document.createElement('li')
        const input = document.createElement('input')
        const label = document.createElement('label')

        input.type = 'checkbox'
        input.id = el.id
        label.htmlFor = el.id
        label.textContent = el.texto
        input.addEventListener('change', function(){
            console.log(this)
        })
        li.append(input, label)

            if(el.isLeft){
                left_list.appendChild(li)
            }else{
                right_list.appendChild(li)
            }
        
    })
}

// innerHtmlElment()

domElment()

function addNewItem(text) {
    miLista.push({
        id: miLista.length + 1,
        texto: text,
        isLeft: true
    })
    left_list.innerHTML = ''

    domElment()
}

add.addEventListener('click', () => addNewItem(new_item.value))
/* toLeft.addEventListener('click', function() {

}) */