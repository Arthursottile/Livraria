//procurando as setinhas
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

//procurando os itens e os pontos
const img = document.querySelectorAll('.product-img')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')

//procurando o indicador de número e a lista
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')


let active = 0;
const total = items.length
let timer;

function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')
    document.querySelector('.product-img.active').classList.remove('active')


    if (direction > 0) {
        active = active + 1


        if (active === total) {
            active = 0
        }
    }

    else if (direction < 0) {
        active = active - 1
        if (active < 0) { active = total - 1 }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')
    img[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2, '0')
}

clearInterval(timer)
setInterval(() => {
    update(1)
}, 10000)


leftButton.addEventListener('click', () => {
    update(-1)

});

rightButton.addEventListener('click', () => {
    update(1)
});