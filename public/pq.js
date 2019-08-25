const url = 'https://pooquotes.herokuapp.com/pooquotes'
const pooBtn = document.querySelector('#pooBtn')
const display = document.querySelector('#quote')

pooBtn.addEventListener("click", () => {
    fetch(url)
    .then((req) => {
        req.json().then((data) => {
            const keys = Object.keys(data);
            const randomIndex = keys[Math.floor(Math.random() * keys.length)];
            const item = data[randomIndex];
            display.innerText = item.quote
            // console.log(item.quote)
        })
    })
    .catch(() => {
        alert('Error')
    })
})
