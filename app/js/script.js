const hamButton = document.querySelector('#ham-button');
const header = document.querySelector('.header');
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay');
const fadeAll = document.querySelectorAll('.fade');

hamButton.addEventListener('click', () => {
    if(header.classList.contains('open')) {
        header.classList.remove('open')
        body.classList.remove('noOverflow');
        fadeAll.forEach((fade)=> {
            fade.classList.remove('fade-in');
            fade.classList.add('fade-out');      
        })
    } else {
        body.classList.add('noOverflow');
        header.classList.add('open');
        fadeAll.forEach((fade)=> {
            fade.classList.remove('fade-out');
            fade.classList.add('fade-in');      
        })
    }
})

