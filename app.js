const form = document.querySelector('.form')
const ul = document.querySelector('.todo-item')




form.addEventListener('submit', event => {
    event.preventDefault()

    const valueInput = event.target.inputValue.value
    ul.innerHTML += `<li class="li-item"><input type="checkbox" name="valueInput" class="check-todo">${valueInput}<i class="fa-solid fa-trash"></i></li>`
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




})