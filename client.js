console.log('Client Side Java Script')

const profileForm = document.querySelector('form')

// event listeners
const messageOne = document.querySelector('#message-1')


profileForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = "Loading"
    messageOne.textContent = "Completed!"
})