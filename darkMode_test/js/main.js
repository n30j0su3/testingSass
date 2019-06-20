document.addEventListener("DOMContentLoaded", function(event) {
    
let titleElt = document.getElementById('title')
let iconElt = document.getElementsByTagName('ion-icon')[0]

document.querySelector('.switch input[type="checkbox"]').addEventListener('change', function(event){
    if (event.target.checked) {
        document.body.setAttribute('data-theme', 'dark')
        titleElt.innerText = 'dark'
        iconElt.setAttribute('name', 'moon')

    } else {
        document.body.removeAttribute('data-theme')
        titleElt.innerText = 'light'
        iconElt.setAttribute('name', 'sunny')
    }
});
});