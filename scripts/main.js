const left_list = document.querySelector('#left_list')
const right_list = document.querySelector('#right_list')

const miLista = [
    { id: 1, texto: '1', isLeft: true },
    { id: 2, texto: '2', isLeft: false },
    { id: 3, texto: '3', isLeft: true },


]

function innerHtmlElment(id, texto, element) {
    const item = `
    <li>
        <input type="checkbox" id="${id}" />
        <label for="${id}">${texto}</label>
    </li>`
    element.innerHTML += item
}


function domElment(id, texto, element) {
    const li = document.createElement('li')
    const input = document.createElement('input')
    const label = document.createElement('label')

    input.type = 'checkbox'
    input.id = id
    label.htmlFor = id
    label.textContent = texto

    li.append(input, label)

    element.appendChild(li)

}

miLista.forEach(ele => innerHtmlElment(ele.id, ele.texto, left_list))