console.log('client side js is loaded')

const form = document.querySelector('form')

const search = document.querySelector('input')

const loader = document.getElementById('loader')

const msg1 = document.getElementById('msg-1')
const msg2 = document.getElementById('msg-2')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    loader.style.display = 'block';
    msg1.textContent = '';
    msg2.textContent = '';
    const address = search.value;

    fetch(`/weather?address=${address}`).then(res => res.json().then(data => {
        if(data.error){
            loader.style.display = 'none'
            msg1.textContent = data.error
        } else{    
            loader.style.display = 'none'
            search.value = ''
            msg1.textContent = data.location
            msg2.textContent = data.forecast
        }
    }));
    
})