"use strict";

var objSlide = [{
  id: 1,
  name: "Running Sneaker Shoes",
  img: "showcase/shoe1-1/img1.png",
  price: "80.00",
  "original-price": "120.00"
}, {
  id: 2,
  name: "Men sneakers Shoes",
  img: "showcase/shoe1-2/img1.png",
  price: "50.00",
  "original-price": "90.00"
}, {
  id: 3,
  name: "Sports Gym Shoes",
  img: "showcase/shoe2-1/img1.png",
  price: "100.00",
  "original-price": "150.00"
}, {
  id: 3,
  name: "Sports Gym Shoes",
  img: "showcase/shoe2-2/img1.png",
  price: "100.00",
  "original-price": "150.00"
}]; // ================ Slider Function ================

var itemSlider = document.getElementById("itemSlider");
var pagination = document.querySelector(".pagination");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

function slider() {
  var i = 0;

  function slideCard() {
    itemSlider.innerHTML = "\n        <div class=\"info w-[50%] flex flex-col items-start gap-4\">\n            <span class=\"OFFER\">Special Offer</span>\n            <span class=\"title\">".concat(objSlide[i].name, "</span>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, culpa minus? Ipsam praesentium quidem unde delectus eius eveniet labore sunt error distinctio quam doloribus in doloremque, nisi reiciendis? Laboriosam, cumque?</p>\n            <div class=\"price\">\n                    <span class=\"discount\">$<span class=\"original-price\">").concat(objSlide[i]["original-price"], "</span></span>\n                    <span class=\"priceNew\">$<span class=\"price_new\">").concat(objSlide[i].price, "</span></span>\n            </div>\n            <div class=\"buttons\">\n                <button class=\"btnSubmit\" id=\"btnBuy\">Buy Now</button>\n                <!-- <button class=\"btn\">Discover More</button> -->\n                <div class=\"count flex flex-row items-center gap-4 w-[150px] p-[15px] justify-center border-none outline-none rounded-lg text-white\">\n                <i class=\"fa-solid fa-minus lessCount\" id=\"lessCount\"></i>\n                <span id=\"count\">1</span>\n                <i class=\"fa-solid fa-plus plusCount\" id=\"plusCount\"></i>\n                </div>\n            </div>\n        </div>\n        <div class=\"img w-[50%] relative\">\n            <img src=").concat(objSlide[i].img, " alt=\"\">\n        </div>\n        ");
    countNum();
    var btnBuy = document.getElementById("btnBuy");
    btnBuy.addEventListener("click", function () {
      num.innerHTML = ++num.innerHTML;
      empty.classList.add("none");
      cart_item.classList.remove("none");
      createCard(btnBuy.parentNode.parentNode.parentNode.children[1].children[0].src, btnBuy.parentNode.parentNode.children[1].innerHTML, btnBuy.parentNode.parentNode.children[3].children[1].children[0].innerHTML, btnBuy.parentNode.parentNode.children[4].children[1].children[1].textContent);
    });
  } // Next Aroww & Prev Aroww


  next.addEventListener("click", function () {
    if (i < objSlide.length - 1) {
      i++;
      slideCard();
      prev.classList.remove("pointerNone");
      document.querySelector(".paginationitem-".concat(i - 1)).classList.remove("active");
      document.querySelector(".paginationitem-".concat(i)).classList.add("active");
    } else if (i == objSlide.length - 1) {
      next.classList.add("pointerNone");
    }
  });
  prev.addEventListener("click", function () {
    if (i > 0) {
      i--;
      slideCard();
      next.classList.remove("pointerNone");
      document.querySelector(".paginationitem-".concat(i + 1)).classList.remove("active");
      document.querySelector(".paginationitem-".concat(i)).classList.add("active");
    } else if (i == 0) {
      prev.classList.add("pointerNone");
    }
  });
  paginationELments();
}

var cart_item = document.getElementById("cart_item");
var empty = document.getElementById("empty");
var cart = document.getElementById("cart");
var RightNav = document.getElementById("Right_Nav");
var num = document.querySelector(".num");

window.onload = function () {
  itemSlider.innerHTML = "\n    <div class=\"info w-[50%] flex flex-col items-start gap-4\">\n        <span class=\"OFFER\">Special Offer</span>\n        <span class=\"title\">Running Sneaker Shoes</span>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, culpa minus? Ipsam praesentium quidem unde delectus eius eveniet labore sunt error distinctio quam doloribus in doloremque, nisi reiciendis? Laboriosam, cumque?</p>\n        <div class=\"price\">\n                <span class=\"discount\">$<span class=\"original-price\">120.00</span></span>\n                <span class=\"priceNew\">$<span class=\"price_new\">80.00</span></span>\n        </div>\n        <div class=\"buttons\">\n            <button class=\"btnSubmit\" id=\"btnBuy\">Buy Now</button>\n            <!-- <button class=\"btn\">Discover More</button> -->\n            <div class=\"count flex flex-row items-center gap-4 w-[150px] p-[15px] justify-center border-none outline-none rounded-lg text-white\">\n                <i class=\"fa-solid fa-minus lessCount\" id=\"lessCount\"></i>\n                <span id=\"count\">1</span>\n                <i class=\"fa-solid fa-plus plusCount\" id=\"plusCount\"></i>\n            </div>\n        </div>\n    </div>\n    <div class=\"img w-[50%] relative\">\n        <img src=\"showcase/shoe1-1/img1.png\" alt=\"\">\n    </div>\n    ";
  countNum();
  var btnBuy = document.getElementById("btnBuy");
  btnBuy.addEventListener("click", function () {
    console.log(btnBuy.parentNode.parentNode.children[4].children[1].children[1].textContent);
    num.innerHTML = ++num.innerHTML;
    empty.classList.add("none");
    cart_item.classList.remove("none");
    createCard(btnBuy.parentNode.parentNode.parentNode.children[1].children[0].src, btnBuy.parentNode.parentNode.children[1].innerHTML, btnBuy.parentNode.parentNode.children[3].children[1].children[0].innerHTML, btnBuy.parentNode.parentNode.children[4].children[1].children[1].textContent);
  });
}; // ================ Card Cart Create ===============


function createCard(img, name, price, countNum) {
  cart_item.innerHTML += "<div class=\"item flex flex-row items-center w-full gap-5 justify-between\">\n        <div class=\"left flex flex-row items-center gap-5\">\n            <img src=".concat(img, " alt=\"\">\n            <div class=\"info flex flex-col items-start gap-1\">\n                <span class=\"name\">").concat(name, "</span>\n                <div class=\"priceDelCont flex flex-row items-center gap-3\">\n                    <span class=\"price\">$").concat(price, " * ").concat(countNum, " = <span class=\"total\">$").concat(price * countNum, ".00</span></span>\n                    <i class=\"fa-solid fa-trash-can\" id=\"delete\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n    ");
  deleteitem();
}

function cartIcon() {
  var Right_Nav = document.getElementById("Right_Nav");
  var cart = document.getElementById("cart");

  if (!cart_item.classList.contains("none") && window.screen.width < 768) {
    Right_Nav.classList.add("rightNav");
  } else {
    Right_Nav.classList.remove("rightNav");
  }
}

window.addEventListener("resize", cartIcon); // =============== Count ================

function countNum() {
  var count = document.getElementById("count");
  var lessCount = document.getElementById("lessCount");
  var plusCount = document.getElementById("plusCount");
  lessCount.addEventListener("click", function () {
    if (count.textContent > 1) {
      count.innerHTML = --count.innerHTML;
    } else {
      count.innerHTML = 1;
    }
  });
  plusCount.addEventListener("click", function () {
    count.innerHTML = ++count.innerHTML;
  });
} // ================ Delete item ================


function deleteitem() {
  var deleteitem = document.querySelectorAll("#delete");
  deleteitem.forEach(function (item, index) {
    item.addEventListener("click", function () {
      // console.log(item.parentElement.parentElement.parentElement.parentElement)
      item.parentElement.parentElement.parentElement.parentElement.remove();
      num.innerHTML--;

      if (num.innerHTML == 0) {
        empty.classList.remove("none");
        cart_item.classList.add("none");
      }
    });
  });
} // ============== Setting Cart ================


var Conthome = document.getElementById("Conthome");
var icon_cart = document.querySelector(".icon_cart");
icon_cart.addEventListener("click", function () {
  // Conthome.classList.toggle("halfWidth")
  cart.classList.toggle("none");
  RightNav.classList.toggle("rightNav");

  if (num.innerHTML > 0) {
    cart_item.classList.remove("none");
    empty.classList.add("none");
  } else {
    cart_item.classList.add("none");
    empty.classList.remove("none");
  }
});
slider(); // =============== Pagination Create ================

function paginationELments() {
  var pag = document.querySelector(".paginationitems");

  for (var i = 0; i < objSlide.length; i++) {
    var elm = document.createElement("li");
    elm.classList.add("paginationitem-".concat(i));
    pag.appendChild(elm);
  }

  document.querySelector(".paginationitem-0").classList.add("active");
} // ============= Setting ==============


var setting = document.getElementById("setting");
var menuColor = document.querySelector(".menuColor");
setting.addEventListener("click", function () {
  menuColor.classList.toggle("none");
});
document.body.classList.add(localStorage.getItem("col"));
var colors = document.querySelectorAll(".menuColor li"); // ============= Setting Color ==============

colors.forEach(function (item, index) {
  item.addEventListener("click", function () {
    document.body.style.setProperty("--color-text", item.getAttribute("data-color"));
    localStorage.setItem("col", item.getAttribute("data-color"));
  });
}); // ============= Active Link Toggle ==============

var list_links = document.querySelectorAll(".list_links li");
list_links.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    list_links.forEach(function (item, index) {
      item.classList.remove("activelink");
    });
    e.currentTarget.classList.add("activelink");
  });
}); // ================= cards ===================

var heart = document.querySelectorAll(".fa-heart");
heart.forEach(function (item, index) {
  item.addEventListener("click", function () {
    item.classList.toggle("fa-solid");
  });
}); // ================= shopping ===================

var shopping = document.querySelectorAll(".fa-bag-shopping");
shopping.forEach(function (item, index) {
  item.addEventListener("click", function () {
    num.innerHTML = ++num.innerHTML;
    empty.classList.add("none");
    console.log(item.parentNode.parentNode.children[0]);
    cart_item.classList.remove("none");
    createCard(item.parentNode.parentNode.children[0].src, item.parentNode.parentNode.children[1].children[0].innerHTML, item.parentNode.parentNode.children[1].children[1].innerHTML);
    count();
    deleteitem();
  });
}); // =================== Nav ======================

var nav = document.querySelector(".nav");

window.onscroll = function () {
  if (window.scrollY > 0) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
}; // ================= Scroll To Top ===================


var btnArrow = document.querySelector(".btn_arrow");

window.onscroll = function () {
  if (window.scrollY > 500) {
    btnArrow.classList.remove("none");
  } else {
    btnArrow.classList.add("none");
  }
};

btnArrow.addEventListener("click", function () {
  window.scrollTo(0, 0);
}); // ================== Products  ===================

var productsContent = document.querySelector(".productsCont");
fetch("./cards.json").then(function (res) {
  return res.json();
}).then(function (data) {
  for (var i = 0; i < data.length; i++) {
    productsContent.innerHTML += "\n        <div class=\"product w-[100%] p-[20px]\" id=\"product\">\n            <div class=\"image w-full\">\n                <img src=".concat(data[i].img, " alt=\"\">\n            </div>\n            <div class=\"details flex flex-col items-start px-[.5rem]\">\n                <div class=\"rating\">\n                    <i class=\"fa-solid fa-star\"></i>\n                    <span>").concat(data[i].rating, "</span>\n                </div>\n                <span class=\"title_sneak\">").concat(data[i].name, "</span>\n                <span class=\"Company\">Adidas</span>\n                <div class=\"priceCont\">\n                    <span class=\"price\">$ ").concat(data[i].price, ".00</span>\n                    <button class=\"btnSubmit\">Buy Now</button>\n                </div>\n            </div>\n        </div>\n        \n        ");
    submitSell();
  }
});

function submitSell() {
  var btnSubmit = document.querySelectorAll(".btnSubmit");
  btnSubmit.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log(item.parentElement.parentElement.children[1]);
      num.innerHTML = ++num.innerHTML;
      empty.classList.add("none");
      cart_item.classList.remove("none");
      createCard(item.parentElement.parentElement.parentElement.children[0].children[0].src, item.parentElement.parentElement.children[1].innerHTML, item.parentElement.children[0].innerHTML);
      count();
      deleteitem();
    });
  });
} // =================== Validate Input Email ======================


var email = document.getElementById("email");
var btnSubmit = document.getElementById("btn_email");
var emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnSubmit.addEventListener("click", function () {
  if (email.value.match(emailregex)) {
    email.value = "";
    email.style.borderColor = "green";
    setTimeout(function () {
      email.style.borderColor = "transparent";
    }, 1000);
  } else {
    // alert("Email is not valid")
    email.style.borderColor = "red";
    var emailnotValid = document.createElement("p");
    emailnotValid.classList.add("emailnotValid");
    emailnotValid.innerHTML = "Email is not valid";
    email.parentElement.appendChild(emailnotValid);
    setTimeout(function () {
      email.style.borderColor = "transparent";
      emailnotValid.innerHTML = "";
    }, 1000);
  }
}); // =================== Fqs ======================

var faqCont = document.querySelector(".faqCont");

function fqs() {
  fetch("./quastions.json").then(function (res) {
    return res.json();
  }).then(function (data) {
    for (var i = 0; i < data.length; i++) {
      faqCont.innerHTML += "\n                <div class=\"item flex flex-col items-start pb-6 w-[50%] m-auto gap-4\">\n                    <div class=\"question flex flex-row items-center gap-4 w-full justify-between\">\n                        <span class=\"title_q\">".concat(data[i].question, "</span>\n                        <i class=\"fa-solid fa-chevron-down arrowAnswer\" ></i>\n                    </div>\n                    <div class=\"answer none\">\n                        <p>").concat(data[i].answer, "</p>\n                    </div>\n                </div>\n            ");
      var arrowAnswer = document.querySelectorAll(".arrowAnswer");
      arrowAnswer.forEach(function (item, index) {
        item.addEventListener("click", function () {
          item.parentElement.parentElement.children[1].classList.toggle("none");

          if (item.classList.contains("fa-chevron-down")) {
            item.classList.replace("fa-chevron-down", "fa-chevron-up");
          } else {
            item.classList.add("fa-chevron-down");
          }
        });
      });
    }
  });
}

fqs(); // ================= Payment Details ======================

var form_paymentCheckOut = document.querySelector(".form_paymentCheckOut");
var btn_checkOut = document.querySelector(".btn_check");
var total = document.querySelectorAll(".total");
var price_total = document.querySelector(".price_total");
btn_checkOut.addEventListener("click", function () {
  form_paymentCheckOut.classList.remove("none");
});
var faxmark = document.querySelectorAll(".fa-xmark");
faxmark.forEach(function (item) {
  item.addEventListener("click", function () {
    form_paymentCheckOut.classList.add("none");
  });
});
var emailPay = document.getElementById("emailPay");
var card_number = document.getElementById("card_number");
var date = document.getElementById("date");
var cvv = document.getElementById("cvc");
var card_name = document.getElementById("card_name");
var btn_pay = document.querySelector(".btn_pay");
var cardNumRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
var dateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
var cvcRegex = /^[0-9]{3}$/;
var cardNameRegex = /^[a-zA-Z\s]+$/;
var inputForm = document.querySelectorAll(".form_paymentCheckOut input");
btn_pay.addEventListener("click", function () {
  inputForm.forEach(function (ele) {
    if (ele.value == "") {
      ele.classList.add("redBorder");
      setTimeout(function () {
        ele.classList.remove("redBorder");
      }, 1000);
    }

    if (ele.getAttribute("id") == "emailPay" && !ele.value.match(emailregex)) {
      ele.classList.add("redBorder");
      setTimeout(function () {
        ele.classList.remove("redBorder");
      }, 1000);
    }

    if (ele.getAttribute("id") == "card_number" && !ele.value.match(cardNumRegex)) {
      ele.classList.add("redBorder");
      setTimeout(function () {
        ele.classList.remove("redBorder");
      }, 1000);
    }

    if (ele.getAttribute("id") == "card_name" && !ele.value.match(cardNameRegex)) {
      ele.classList.add("redBorder");
      setTimeout(function () {
        ele.classList.remove("redBorder");
      }, 1000);
    }

    if (ele.getAttribute("id") == "cvc" && !ele.value.match(cvcRegex)) {
      ele.classList.add("redBorder");
      setTimeout(function () {
        ele.classList.remove("redBorder");
      }, 1000);
    } else if (cvv.value.match(cvcRegex) && card_name.value.match(cardNameRegex) && card_number.value.match(cardNumRegex) && emailPay.value.match(emailregex)) {
      form_paymentCheckOut.classList.add("none");
      console.log("Done");
      document.querySelector(".cart_items").innerHTML = "";
    }
  });
});