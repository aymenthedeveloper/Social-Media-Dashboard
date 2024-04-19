const root = document.querySelector(':root');
const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('click', () => {
    if (root.classList.contains('light')){
        root.classList.remove('light')
    } else{
        root.classList.add('light')
    }
})