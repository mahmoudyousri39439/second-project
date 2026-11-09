// currency select start

const money = document.getElementById("money")
const currencytype = document.querySelectorAll(".option-menu .option")

currencytype.forEach(function(el){
    el.onclick = function(){
        money.innerHTML = el.innerHTML
        
        
    }
})

// currency select end

//open and close side menu

const openmenu = document.getElementById("open-menu")
const ltmenu = document.querySelector(".ltmenu-cntr .lt-menu")
const ltmenucntr = document.querySelector(".ltmenu-cntr")
const closeltmenu = document.querySelector('.closelt-menu')

openmenu.addEventListener('click' , ()=>{
    ltmenucntr.classList.add('active')
    ltmenu.classList.add('active')
    console.log(true);
    
})

closeltmenu.addEventListener('click' , ()=>{
    ltmenucntr.classList.remove('active')
    ltmenu.classList.remove('active')
})

//open and close side menu


// open and close cart menu
const cart = document.querySelector('.rtNav .cart')
const closecartmenu = document.querySelector('.closecart-menu')
const cartcntr = document.querySelector('.cart-cntr')
const cartmenu = document.querySelector('.cart-menu')

cart.onclick = ()=>{
    cartcntr.classList.add('active')
    cartmenu.classList.add('active')
}

closecartmenu.onclick = ()=>{
    cartcntr.classList.remove('active')
    cartmenu.classList.remove('active')

}

// open and close cart menu


// hero slider start
const heroslider = new Splide('#heroslider' , {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    arrows: true,
    pagination: true,
});
heroslider.mount();


// hero slider end

// cards-slider start
const cardsslider = new Splide('#cardsslider' , {
    breakpoints: {
        1024: {
            perPage: 3,
            gap: '15px',
        },

        768: {
            perPage: 2,
            gap: '12px',
        },

        480: {
            perPage: 1,
            gap: '10px',
        },
    },
    type: 'loop',
    perPage: 4,
    gap: '20px',
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
});
cardsslider.mount();



// cards-slider end


// smartslider start
const smartslider = new Splide('#smartslider' , {
    type: 'loop',
    perPage: 1,
    gap: '20px',
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
});
smartslider.mount();



// smartslider end

// jourcard slider start
const jourcardslider = new Splide('#jourcardslider' , {
    type: 'loop',
    perPage: 3,
    gap: '30px',
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
    breakpoints: {
    1024: {
        perPage: 2,
        gap: '15px',
    },

    768: {
        perPage: 1,
        gap: '12px',
    },
},
});
jourcardslider.mount();


// jourcard slider end

// jourslides section start
const jourslider = new Splide('#jourslider' , {
    type: 'loop',
    perPage: 1,
    gap: '30px',
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
});
jourslider.mount();

// jourslides section end

// footer currency and language start
const changecurrency = document.getElementById('changecurrency')
const currencymenu = document.querySelectorAll('.currencymenu .option')

const changelanguage = document.getElementById('changelanguage')
const languagemenu = document.querySelectorAll('.languagemenu .option')


currencymenu.forEach(function(dollar){
    dollar.onclick = ()=>{
        changecurrency.innerHTML = dollar.innerHTML
    }
})

languagemenu.forEach(function(eng){
    eng.onclick = function(){
        changelanguage.innerHTML = eng.innerHTML
    }
})
// footer currency and language end


// counter start



const countDownDate = new Date("2026-12-31T23:59:59").getTime();

const daysElement = document.getElementById("counterdays");
const hoursElement = document.getElementById("counterhours");
const minutesElement = document.getElementById("counterminutes");
const secondsElement = document.getElementById("counterseconds");

function updateCounter() {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    if (distance <= 0) {

        daysElement.innerHTML = "00 :";
        hoursElement.innerHTML = "00 :";
        minutesElement.innerHTML = "00 :";
        secondsElement.innerHTML = "00";

        clearInterval(counterInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    daysElement.innerHTML = String(days).padStart(2, "0") + " :";
    hoursElement.innerHTML = String(hours).padStart(2, "0") + " :";
    minutesElement.innerHTML = String(minutes).padStart(2, "0") + " :";
    secondsElement.innerHTML = String(seconds).padStart(2, "0");
}

updateCounter();

const counterInterval = setInterval(updateCounter, 1000);

// counter end
























// scroll button start
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    scrollTopBtn.style.setProperty("--progress", `${progress}%`);

    if (scrollTop > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// scroll button end





