const form = document.querySelector('form')
const h1 = document.querySelector('h1')
const input = document.querySelector('input')

async function getFetch(number) {
    try {
        const response = await fetch(`http://localhost:3000/getData?number=${number}`);
        const data = response.text();
        return data
    } catch (error) {
        throw error
    }
};

function clickToFetch(event){
    event.preventDefault();
    let number = input.value;
    getFetch(number)
        .then(data => h1.textContent = data)
        .catch(error => console.error(error))
}

form.addEventListener('submit', clickToFetch)