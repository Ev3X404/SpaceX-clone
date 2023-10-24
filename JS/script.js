const btn = document.getElementById("menu-btn");
const ovelay = document.getElementById("overlay");
const menu = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter')
const header = document.querySelector('.scroll-hide');
let scrollStarted = false

btn.addEventListener("click", navToggle );
document.addEventListener('scroll', scrollPage);

//hamburger menu bar
function navToggle(){
    btn.classList.toggle('open');
    ovelay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrollng')
    menu.classList.toggle('show-menu')
}

function scrollPage(){
    const scrollPos = window.scrollY;

    console.log(scrollPos);
    if (scrollPos > 100 && !scrollStarted){
        countUP();
    } else if(scrollPos < 100 && !scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUP() {
    counters.forEach((counter) => {
        counter.innerText ='0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;
            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 100);
            }else{
                counter.innerText = target;
            }
            
        };

        updateCounter();
    });
}

function reset(params) {
    counters.forEach((counter) => (counter.innerHTML = '0'));
    
}


let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll < 10) {
        header.classList.remove('hidden');
    } else if (currentScroll > lastScroll) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
});









