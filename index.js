let objSlide = [
    {
        id : 1,
        name: "Running Sneaker Shoes",
        img: "showcase/shoe1-1/img1.png",
        price: "80.00",
        "original-price": "120.00",
    },
    {
        id : 2,
        name: "Men sneakers Shoes",
        img: "showcase/shoe1-2/img1.png",
        price: "50.00",
        "original-price": "90.00",
    },
    {
        id : 3,
        name: "Sports Gym Shoes",
        img: "showcase/shoe2-1/img1.png",
        price: "100.00",
        "original-price": "150.00",
    },
    {
        id : 3,
        name: "Sports Gym Shoes",
        img: "showcase/shoe2-2/img1.png",
        price: "100.00",
        "original-price": "150.00",
    },
]


// ================ Slider Function ================

let itemSlider = document.getElementById("itemSlider")
let pagination = document.querySelector(".pagination")
let prev = document.getElementById("prev")
let next = document.getElementById("next")

function slider() {
    let i = 0 
    function slideCard() {
        itemSlider.innerHTML = `
        <div class="info w-[50%] flex flex-col items-start gap-4">
            <span class="OFFER">Special Offer</span>
            <span class="title">${objSlide[i].name}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, culpa minus? Ipsam praesentium quidem unde delectus eius eveniet labore sunt error distinctio quam doloribus in doloremque, nisi reiciendis? Laboriosam, cumque?</p>
            <div class="price">
                    <span class="discount">$<span class="original-price">${objSlide[i]["original-price"]}</span></span>
                    <span class="priceNew">$<span class="price_new">${objSlide[i].price}</span></span>
            </div>
            <div class="buttons">
                <button class="btnSubmit" id="btnBuy">Buy Now</button>
                <!-- <button class="btn">Discover More</button> -->
                <div class="count flex flex-row items-center gap-4 w-[150px] p-[15px] justify-center border-none outline-none rounded-lg text-white">
                <i class="fa-solid fa-minus lessCount" id="lessCount"></i>
                <span id="count">1</span>
                <i class="fa-solid fa-plus plusCount" id="plusCount"></i>
                </div>
            </div>
        </div>
        <div class="img w-[50%] relative">
            <img src=${objSlide[i].img} alt="">
        </div>
        `   
        countNum()
        let btnBuy = document.getElementById("btnBuy")
        btnBuy.addEventListener("click", () => {
            num.innerHTML = ++num.innerHTML
            empty.classList.add("none")
            cart_item.classList.remove("none")
            createCard(btnBuy.parentNode.parentNode.parentNode.children[1].children[0].src , btnBuy.parentNode.parentNode.children[1].innerHTML , btnBuy.parentNode.parentNode.children[3].children[1].children[0].innerHTML , btnBuy.parentNode.parentNode.children[4].children[1].children[1].textContent)})
    }

    // Next Aroww & Prev Aroww
    next.addEventListener("click", () => {
        if (i < objSlide.length - 1) {
            i++
            slideCard()
            prev.classList.remove("pointerNone")
            document.querySelector(`.paginationitem-${i - 1}`).classList.remove("active")
            document.querySelector(`.paginationitem-${i}`).classList.add("active")
        }
        else if (i == objSlide.length - 1) {
            next.classList.add("pointerNone")
        }
    })
    prev.addEventListener("click", () => {
        if (i > 0) {
            i--
            slideCard()
            next.classList.remove("pointerNone")
            document.querySelector(`.paginationitem-${i + 1}`).classList.remove("active")
            document.querySelector(`.paginationitem-${i}`).classList.add("active")
        }
        else if (i == 0) {
            prev.classList.add("pointerNone")
        }
    })
    paginationELments()
}

let cart_item = document.getElementById("cart_item")
let empty = document.getElementById("empty")
let cart = document.getElementById("cart")
let RightNav = document.getElementById("Right_Nav")
let num = document.querySelector(".num")

window.onload = function () {
    itemSlider.innerHTML = `
    <div class="info w-[50%] flex flex-col items-start gap-4">
        <span class="OFFER">Special Offer</span>
        <span class="title">Running Sneaker Shoes</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, culpa minus? Ipsam praesentium quidem unde delectus eius eveniet labore sunt error distinctio quam doloribus in doloremque, nisi reiciendis? Laboriosam, cumque?</p>
        <div class="price">
                <span class="discount">$<span class="original-price">120.00</span></span>
                <span class="priceNew">$<span class="price_new">80.00</span></span>
        </div>
        <div class="buttons">
            <button class="btnSubmit" id="btnBuy">Buy Now</button>
            <!-- <button class="btn">Discover More</button> -->
            <div class="count flex flex-row items-center gap-4 w-[150px] p-[15px] justify-center border-none outline-none rounded-lg text-white">
                <i class="fa-solid fa-minus lessCount" id="lessCount"></i>
                <span id="count">1</span>
                <i class="fa-solid fa-plus plusCount" id="plusCount"></i>
            </div>
        </div>
    </div>
    <div class="img w-[50%] relative">
        <img src="showcase/shoe1-1/img1.png" alt="">
    </div>
    `
    countNum()
    let btnBuy = document.getElementById("btnBuy")
    btnBuy.addEventListener("click", () => {
        console.log(btnBuy.parentNode.parentNode.children[4].children[1].children[1].textContent)
        num.innerHTML = ++num.innerHTML
        empty.classList.add("none")
        cart_item.classList.remove("none")
        createCard(btnBuy.parentNode.parentNode.parentNode.children[1].children[0].src , btnBuy.parentNode.parentNode.children[1].innerHTML , btnBuy.parentNode.parentNode.children[3].children[1].children[0].innerHTML , btnBuy.parentNode.parentNode.children[4].children[1].children[1].textContent)
    })

} 

// ================ Card Cart Create ===============

function createCard(img , name , price , countNum) {
    cart_item.innerHTML +=
    `<div class="item flex flex-row items-center w-full gap-5 justify-between">
        <div class="left flex flex-row items-center gap-5">
            <img src=${img} alt="">
            <div class="info flex flex-col items-start gap-1">
                <span class="name">${name}</span>
                <div class="priceDelCont flex flex-row items-center gap-3">
                    <span class="price">$${price} * ${countNum} = <span class="total">$${price * countNum}.00</span></span>
                    <i class="fa-solid fa-trash-can" id="delete"></i>
                </div>
            </div>
        </div>
    </div>
    ` 
    deleteitem()
}

function cartIcon() {
    let Right_Nav = document.getElementById("Right_Nav")
    let cart = document.getElementById("cart")

    if (!cart_item.classList.contains("none") && window.screen.width < 768) {
        Right_Nav.classList.add("rightNav")
    }
    else {
        Right_Nav.classList.remove("rightNav")
    }
}

window.addEventListener("resize" , cartIcon)

// =============== Count ================

function countNum(){
    let count = document.getElementById("count")
    let lessCount = document.getElementById("lessCount")
    let plusCount = document.getElementById("plusCount")
    lessCount.addEventListener("click", () => {
        if (count.textContent > 1) {
            count.innerHTML = --count.innerHTML
        }
        else {
            count.innerHTML = 1
        }
    })
    plusCount.addEventListener("click", () => {
        count.innerHTML = ++count.innerHTML
    })
}

// ================ Delete item ================

function deleteitem (){
    let deleteitem = document.querySelectorAll("#delete")
    deleteitem.forEach((item, index) => {
        item.addEventListener("click", () => {
            // console.log(item.parentElement.parentElement.parentElement.parentElement)
            item.parentElement.parentElement.parentElement.parentElement.remove()
            num.innerHTML--
            if (num.innerHTML == 0) {
                empty.classList.remove("none")
                cart_item.classList.add("none")
            }
        })
    })
}

// ============== Setting Cart ================

let Conthome = document.getElementById("Conthome")
let icon_cart = document.querySelector(".icon_cart")
icon_cart.addEventListener("click", () => {
    // Conthome.classList.toggle("halfWidth")
    cart.classList.toggle("none")
    RightNav.classList.toggle("rightNav")
    if (num.innerHTML > 0) {
        cart_item.classList.remove("none")
        empty.classList.add("none")
    }
    else {
        cart_item.classList.add("none")
        empty.classList.remove("none")
    }
})

slider()

// =============== Pagination Create ================

function paginationELments() {
    let pag = document.querySelector(".paginationitems")
    for (let i = 0; i < objSlide.length; i++){
        let elm = document.createElement("li")
        elm.classList.add(`paginationitem-${i}`)
        pag.appendChild(elm)
    }
    document.querySelector(`.paginationitem-0`).classList.add("active")
}

// ============= Setting ==============

let setting = document.getElementById("setting")
let menuColor = document.querySelector(".menuColor")
setting.addEventListener("click", () => {
    menuColor.classList.toggle("none")
})

document.body.classList.add(localStorage.getItem("col"))
let colors = document.querySelectorAll(".menuColor li")


// ============= Setting Color ==============
colors.forEach((item, index) => {
    item.addEventListener("click", () => {
        document.body.style.setProperty("--color-text", item.getAttribute("data-color"))
        localStorage.setItem("col", item.getAttribute("data-color"))
        
    })
})


// ============= Active Link Toggle ==============

let list_links = document.querySelectorAll(".list_links li")
list_links.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        list_links.forEach((item, index) => {
            item.classList.remove("activelink")
        })
        e.currentTarget.classList.add("activelink")
    })
})

// ================= cards ===================

let heart = document.querySelectorAll(".fa-heart")

heart.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.toggle("fa-solid")
    })
})


// ================= shopping ===================

let shopping = document.querySelectorAll(".fa-bag-shopping")

shopping.forEach((item, index) => {
    item.addEventListener("click", () => {
        num.innerHTML = ++num.innerHTML
        empty.classList.add("none")
        console.log(item.parentNode.parentNode.children[0])
        cart_item.classList.remove("none")
        createCard(item.parentNode.parentNode.children[0].src , item.parentNode.parentNode.children[1].children[0].innerHTML , item.parentNode.parentNode.children[1].children[1].innerHTML)
        count()
        deleteitem()
    })
})

// =================== Nav ======================

let nav = document.querySelector(".nav")
window.onscroll = () => {
    if (window.scrollY > 0) {
        nav.classList.add("shadow")
    }
    else {
        nav.classList.remove("shadow")
    }
}


// ================= Scroll To Top ===================

let btnArrow = document.querySelector(".btn_arrow")
window.onscroll = () => {
    if (window.scrollY > 500) {
        btnArrow.classList.remove("none")
    }
    else {
        btnArrow.classList.add("none")
    }
}

btnArrow.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

// ================== Products  ===================

let productsContent = document.querySelector(".productsCont")


fetch("./cards.json")
.then(res => res.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {  
        productsContent.innerHTML += `
        <div class="product w-[100%] p-[20px]" id="product">
            <div class="image w-full">
                <img src=${data[i].img} alt="">
            </div>
            <div class="details flex flex-col items-start px-[.5rem]">
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${data[i].rating}</span>
                </div>
                <span class="title_sneak">${data[i].name}</span>
                <span class="Company">Adidas</span>
                <div class="priceCont">
                    <span class="price">$ ${data[i].price}.00</span>
                    <button class="btnSubmit">Buy Now</button>
                </div>
            </div>
        </div>
        
        `
        submitSell()
    }

})


function submitSell() {
    let btnSubmit = document.querySelectorAll(".btnSubmit")
    btnSubmit.forEach((item) => {
        item.addEventListener("click", () => {
            console.log(item.parentElement.parentElement.children[1])
            num.innerHTML = ++num.innerHTML
            empty.classList.add("none")
            cart_item.classList.remove("none")
            createCard(item.parentElement.parentElement.parentElement.children[0].children[0].src , item.parentElement.parentElement.children[1].innerHTML , item.parentElement.children[0].innerHTML)
            count()
            deleteitem()
        })
    })
}







// =================== Validate Input Email ======================

let email = document.getElementById("email")
let btnSubmit = document.getElementById("btn_email")
let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

btnSubmit.addEventListener("click", () => {
    if (email.value.match(emailregex)) {
        email.value = ""
        email.style.borderColor = "green"
        setTimeout(() => {
            email.style.borderColor = "transparent"
        } , 1000)
    }
    else {
        // alert("Email is not valid")
        email.style.borderColor = "red"
        let emailnotValid = document.createElement("p")
        emailnotValid.classList.add("emailnotValid")
        emailnotValid.innerHTML = "Email is not valid"
        email.parentElement.appendChild(emailnotValid)
        setTimeout(() => {
            email.style.borderColor = "transparent"
            emailnotValid.innerHTML = ""
        }, 1000)
    }
})

// =================== Fqs ======================

let faqCont = document.querySelector(".faqCont")

function fqs() {
    fetch("./quastions.json")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            faqCont.innerHTML += `
                <div class="item flex flex-col items-start pb-6 w-[50%] m-auto gap-4">
                    <div class="question flex flex-row items-center gap-4 w-full justify-between">
                        <span class="title_q">${data[i].question}</span>
                        <i class="fa-solid fa-chevron-down arrowAnswer" ></i>
                    </div>
                    <div class="answer none">
                        <p>${data[i].answer}</p>
                    </div>
                </div>
            `
            let arrowAnswer = document.querySelectorAll(".arrowAnswer")
            arrowAnswer.forEach((item, index) => {
                item.addEventListener("click", () => {
                    item.parentElement.parentElement.children[1].classList.toggle("none")
                    if (item.classList.contains("fa-chevron-down")) {
                        item.classList.replace("fa-chevron-down" , "fa-chevron-up")
                    }
                    else {
                        item.classList.add("fa-chevron-down")
                    }
                })
            })
        }
    })
}   

fqs()


// ================= Payment Details ======================

let form_paymentCheckOut = document.querySelector(".form_paymentCheckOut")
let btn_checkOut = document.querySelector(".btn_check")
let total = document.querySelectorAll(".total")
let price_total = document.querySelector(".price_total")

btn_checkOut.addEventListener("click", () => {
    form_paymentCheckOut.classList.remove("none")
})

let faxmark = document.querySelectorAll(".fa-xmark")

faxmark.forEach((item) => {
    item.addEventListener("click", () => {
        form_paymentCheckOut.classList.add("none")
    })
})
let emailPay = document.getElementById("emailPay")
let card_number = document.getElementById("card_number")
let date = document.getElementById("date")
let cvv = document.getElementById("cvc")
let card_name = document.getElementById("card_name")
let btn_pay = document.querySelector(".btn_pay")
let cardNumRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
let dateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
let cvcRegex = /^[0-9]{3}$/
let cardNameRegex = /^[a-zA-Z\s]+$/
let inputForm = document.querySelectorAll(".form_paymentCheckOut input")

btn_pay.addEventListener("click", () => {
    inputForm.forEach((ele) => {
        if (ele.value == "") {
            ele.classList.add("redBorder")
            setTimeout(() => {
                ele.classList.remove("redBorder")
            } , 1000)
        }
        if (ele.getAttribute("id") == "emailPay" && !ele.value.match(emailregex)) {
            ele.classList.add("redBorder")
            setTimeout(() => {
                ele.classList.remove("redBorder")
            } , 1000)
        }
        if (ele.getAttribute("id") == "card_number" && !ele.value.match(cardNumRegex)) {
            ele.classList.add("redBorder")
            setTimeout(() => {
                ele.classList.remove("redBorder")
            } , 1000)
        }
        if (ele.getAttribute("id") == "card_name" && !ele.value.match(cardNameRegex)) {
            ele.classList.add("redBorder")
            setTimeout(() => {
                ele.classList.remove("redBorder")
            } , 1000)
        }
        if (ele.getAttribute("id") == "cvc" && !ele.value.match(cvcRegex)) {
            ele.classList.add("redBorder")
            setTimeout(() => {
                ele.classList.remove("redBorder")
            } , 1000)
        }
        else if(cvv.value.match(cvcRegex) && card_name.value.match(cardNameRegex) && card_number.value.match(cardNumRegex) && emailPay.value.match(emailregex)){
            form_paymentCheckOut.classList.add("none")
            console.log("Done")
            document.querySelector(".cart_items").innerHTML = ""
        }
    })
})


