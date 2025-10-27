const form = document.querySelector('.form')
const ul = document.querySelector('.todo-item')
const buttonRemoveItem = document.querySelector('.remove-item')
const buttonRemoveAll = document.querySelector('.remove-all')






function refreshButtons() {
    if (ul.children.length === 0) {
        buttonRemoveItem.classList.add('ocult')
        buttonRemoveAll.classList.add('ocult')
    } else {
        buttonRemoveItem.classList.remove('ocult')
        buttonRemoveAll.classList.remove('ocult')
    }
}


refreshButtons()

form.addEventListener('submit', event => {
    event.preventDefault()

    const valueInput = event.target.inputValue.value



    if (valueInput.length > 0) {

        ul.innerHTML += `<li class="li-item"><input type="checkbox" name="valueInput" class="check-todo">${valueInput}<i class="fa-solid fa-trash"></i></li>`
        buttonRemoveItem.classList.remove('ocult')
        buttonRemoveAll.classList.remove('ocult')

    }

    if (valueInput.length < 0) {
        buttonRemoveItem.classList.add('ocult')
        buttonRemoveAll.classList.add('ocult')
    }
    refreshButtons()
    form.reset()
})



ul.addEventListener('click', event => {
    const classItem = Array.from(event.target.classList)
    if (classItem.includes('check-todo')) {
        const checked = event.target.checked

        if (checked) {
            event.target.parentElement.classList.add('to-do-executado')

        } else { event.target.parentElement.classList.remove('to-do-executado') }
    }

    if (classItem.includes('fa-trash')) {
        event.target.parentElement.remove()
    }




    refreshButtons()

})





buttonRemoveItem.addEventListener('click', () => {

    const selectedTodo = ul.querySelectorAll('.check-todo:checked')


    if (selectedTodo.length === 0) return

    selectedTodo.forEach(input => input.parentElement.remove())
    refreshButtons()
})


buttonRemoveAll.addEventListener('click', () => {
    ul.innerHTML = ''
    refreshButtons()
})


