document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const input = document.getElementById('input')
    const list = document.getElementById('list')

    const addTask = (event) => {
        event.preventDefault()

        const getText = input.value.trim()
        if ( getText === '') return

        const li = document.createElement('li')
        li.className = "flex justify-between m-4 p-4 bg-gray-100 rounded-lg"

        const span = document.createElement('span')
        span.textContent = getText
        li.appendChild(span)

        const removeBtn = document.createElement('removeBtn')
        removeBtn.textContent = "Remove"
        removeBtn.className = "text-red-600 font-semibold hover:underline"
        removeBtn.onclick = () => li.remove()
        li.appendChild(removeBtn)

        list.appendChild(li)
        input.value = ''
    }

    form.addEventListener('submit', addTask)
})