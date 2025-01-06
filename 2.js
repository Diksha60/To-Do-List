document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const input = document.getElementById('input')
    const list = document.getElementById('list')

    const addTask = (event) => {
        event.preventDefault()

        const getTask = input.value.trim()
        if (getTask === '') return

        const li = document.createElement('li')
        li.className = "flex items-center justify-between bg-stone-300 p-4 m-4 rounded-lg"

        const span = document.createElement('span')
        span.textContent = getTask
        li.appendChild(span)

        const removeBtn = document.createElement('removeBtn')
        removeBtn.textContent = "Remove"
        removeBtn.className = "text-[14px] text-red-500 font-semibold hover:underline"
        removeBtn.onclick = () => li.remove()
        li.appendChild(removeBtn)

        list.appendChild(li)
        input.value = ''
    }

    form.addEventListener('submit', addTask)
})