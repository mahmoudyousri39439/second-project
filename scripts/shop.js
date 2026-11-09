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

const productspage = document.querySelector('.propage .products')
const proadded = document.getElementById('proadded')
const cartpronumb = document.getElementById('cartpronumb')
const cartprotot = document.querySelector('.cartmenuitems .cartprotot')

const noproducts = document.querySelector('.noproducts')
const returntoshop = document.querySelector('.returntoshop')
const totalprice = document.getElementById('totalprice')
const btns = document.querySelectorAll('.btns .btn')






// products start

const data = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        price: 129,
        category: "Audio",
        description: "Premium wireless headphones with active noise cancellation, deep bass, and long battery life.",
        image_1: "https://i.ibb.co/5WSR2d39/Product-images-1-1-min.jpg",
        image_2: "https://i.ibb.co/bj3Jb2FZ/Product-images-2-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 99,
        category: "Wearables",
        description: "Smart fitness watch with activity tracking, heart rate monitoring, notifications, and multiple sports modes.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/mVwd0st9/Product-images-10-1-min-690x690.jpg"
    },
    {
        id: 3,
        name: "Mechanical Gaming Keyboard",
        price: 79,
        category: "Gaming",
        description: "RGB mechanical gaming keyboard with responsive switches, durable keys, and customizable lighting.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        price: 59,
        category: "Audio",
        description: "Compact Bluetooth speaker delivering powerful sound with a portable design and long battery life.",
        image_1: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_2: "https://i.ibb.co/TMg1jQLz/Product-images-7-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },
    {
        id: 5,
        name: "4K Smart LED Monitor",
        price: 249,
        category: "Computers",
        description: "High-resolution 4K LED monitor with vibrant colors, sharp details, and a modern slim design.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 6,
        name: "Wireless Gaming Mouse",
        price: 69,
        category: "Gaming",
        description: "High-performance wireless gaming mouse with adjustable DPI, fast response time, and ergonomic design.",
        image_1: "https://i.ibb.co/dwCNm5qK/Product-images-9-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/BKKxXkmH/Product-images-9-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },
    {
        id: 7,
        name: "Smartphone Pro Max",
        price: 899,
        category: "Smart Phones",
        description: "Powerful smartphone featuring a high-resolution display, advanced camera system, and fast processor.",
        image_1: "https://i.ibb.co/60XkDLWN/Product-images-15-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/gLtQJxNh/Product-images-15-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg"
    },
    {
        id: 8,
        name: "USB-C Fast Charger",
        price: 35,
        category: "Smart Phones",
        description: "Fast USB-C charger designed to provide safe and efficient charging for compatible smartphones and tablets.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 9,
        name: "Wireless Earbuds Pro",
        price: 89,
        category: "Audio",
        description: "True wireless earbuds with clear audio, touch controls, noise reduction, and a compact charging case.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 10,
        name: "Gaming Laptop",
        price: 1199,
        category: "Computers",
        description: "High-performance gaming laptop with a powerful processor, dedicated graphics, fast SSD, and high-refresh display.",
        image_1: "https://i.ibb.co/B5TPjpkG/Product-images-12-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg"
    },
    {
        id: 11,
        name: "Smart Home Security Camera",
        price: 75,
        category: "Smart Home",
        description: "Smart security camera with HD video, motion detection, night vision, and mobile app connectivity.",
        image_1: "https://i.ibb.co/sv0Shgzt/Product-images-4-1-min-768x768.jpg",
        image_2: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },
    {
        id: 12,
        name: "Smart Health Tracker",
        price: 119,
        category: "Wearables",
        description: "Advanced wearable device for monitoring daily activity, sleep, heart rate, and fitness performance.",
        image_1: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    }
];

let cartproducts = JSON.parse(localStorage.getItem('productscart'))  || []

// displaycartitems()
displaycartitems()


// creat function start

// creat function end
 
// display products start




// console.log();


 
// console.log(productspage);
data.forEach((product , index)=>{
    // console.log(product);
    productspage.innerHTML += `
           <div class="card-1">
                                    <div class="cardImg">
                                        <img class="mainImg" src="${product.image_1}" alt="">
                                        
                                        <button onclick = 'addtocart(${index})'>add to cart</button>
                                    </div>
                                    <div class="cardInfo">
                                        <h4>${product.category}</h4>
                                        <p>${product.name}</p>
                                        <h5>£${product.price.toFixed(2)}</h5>
                                        <h6>
                                            <i class="fa-regular fa-circle-check"></i>
                                            <span>in stock</span>
                                        </h6>
                                    </div>
                                    <div class="card-Images">
                                        <img src="${product.image_1}" alt="">
                                        <img src="${product.image_2}" alt="">
                                        <img src="${product.image_3}" alt="">
                                    </div>
            </div>
    
    `
    
    
})

// change main product image start

const productCards = document.querySelectorAll(".propage .products .card-1")

productCards.forEach(card => {

    const mainImg = card.querySelector(".mainImg")
    const smallImages = card.querySelectorAll(".card-Images img")

    smallImages.forEach(img => {

        img.addEventListener("click", () => {

            // change main image
            mainImg.src = img.src

            // remove active class from all images
            smallImages.forEach(image => {
                image.classList.remove("active")
            })

            // add active class to clicked image
            img.classList.add("active")

        })

    })

})

// change main product image end

// display products end

// add to cart start
function addtocart(number){

    let profullinfo = {
        ...data[number] , 
        amount : 1
    }


// console.log(profullinfo);


    cartproducts.push(profullinfo)
    console.log(cartproducts);
    
    displaycartitems()
    cartcntr.classList.add('active')
    cartmenu.classList.add('active')
    
    proadded.classList.add('active')
    setTimeout(()=>{
    proadded.classList.remove('active')


    },500)

}




// add to cart end

// display cart items start
function displaycartitems(){
    let totalitemsprice = 0
    let cartitems = ''
    cartproducts.forEach((cartitem , index)=>{
        // console.log(cartitem);
        
        totalitemsprice += cartitem.price * cartitem.amount
        cartitems += `
              <div class="cartmenupro">
                        <div class="delitem" onclick="deletecartitem(${index})">x</div>
                    <div class="left">
                        <img src="${cartitem.image_1}" alt="">
                    </div>
                    <div class="right">
                        <p>${cartitem.name}</p>
                        <div class="procounter">
                            <div class="procountlt">
                                <button onclick = "cartItemCounter(${index} )">-</button>
                                <span>${cartitem.amount}</span>
                                <button onclick = "cartItemCounter(${index} , 'plus')">+</button>
                            </div>
                            <h5 class="procountmid">x</h5>
                            <h5 class="procountrt">£ ${cartitem.price.toFixed(2)}</h5>
                        
                        </div>
                    </div>
                    </div>
        
        `
         
    })
    cartprotot.innerHTML = cartitems
    cartpronumb.innerHTML = cartproducts.length
    totalprice.innerHTML = `${totalitemsprice.toFixed(2)}`

    localStorage.setItem('productscart' , JSON.stringify(cartproducts))
    

    if(cartproducts.length > 0){
          noproducts.classList.add('active')
          returntoshop.classList.add('active')
    }else{
        noproducts.classList.remove('active')
          returntoshop.classList.remove('active')

    }

}
// display cart items end

// delete cart item start
function deletecartitem(number){
    // console.log(itemnumber);
    // window.confirm('هل انت متاكد من حذف المنتج ؟')
    
    if(window.confirm('هل انت متاكد من حذف المنتج ؟') ){

       cartproducts.splice(number ,1) 
    }
    
    displaycartitems()
    
}
// delete cart item end

// cart items counter start
function cartItemCounter(number , action){
    // console.log(true);
    if (action == 'plus'){

       ++cartproducts[number].amount 
    }else{
        if( cartproducts[number].amount > 1){

            --cartproducts[number].amount 
        }
    
    }
    

    displaycartitems()
    
}

// cart items counter end
























































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