var likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  likes[i].addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}

var plu = document.getElementsByClassName("plus-btn");
var allPrice = document.querySelectorAll('.price')
var priceIphone = parseInt(document.getElementById("p1").innerText);
var priceShoes = parseInt(document.getElementById("p2").innerText);
var priceWatch = parseInt(document.getElementById("p3").innerText);
var count = 0;
var res = 0;
for (let i = 0; i < plu.length; i++) {
  plu[i].addEventListener("click", function () {
    count = plu[i].previousElementSibling.value++;
    if (i === 0) {
      res = priceIphone * (count + 1);
    } else if (i === 1) {
      res = priceShoes * (count + 1);
    } else {
      res = priceWatch * (count + 1);
    }
     allPrice[i].innerText = res
     total()
  });
}

var min = document.getElementsByClassName("minus-btn");
for (let i = 0; i < min.length; i++) {
  min[i].addEventListener("click", function () {
    if (min[i].nextElementSibling.value > 1) {
      count = min[i].nextElementSibling.value--;
      if (i === 0) {
        res = priceIphone * (count - 1);
      } else if (i === 1) {
        res = priceShoes * (count - 1 );
      } else {
        res = priceWatch * (count - 1);
      }
    } else {
      min[i].nextElementSibling.value = 1;
    }
    allPrice[i].innerText = res
    total()
  });
}

var deletes = document.getElementsByClassName("delete");

for (let i = 0; i < deletes.length; i++) {
  let delt = deletes[i];

  delt.addEventListener("click", function () {
    delt.parentElement.remove();
    total()
  });
}

var items = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");
var price= document.getElementsByClassName('price')
function total() {
    let s = 0;

    for (let i = 0; i < price.length; i++) {
        s+=Number.parseInt(price[i].innerText);
    }

    return (final.value = s);
}

total()