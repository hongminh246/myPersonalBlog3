localStorage.setItem('product1', 0);
localStorage.setItem('product2', 0);
localStorage.setItem('product3', 0);
localStorage.setItem('product4', 0);
localStorage.setItem('product5', 0);
localStorage.setItem('totalSum', 0);

function openCart() {
    window.location = "cart.html";
}

function minusQuantity(id) {
    console.log(id + " was pressed");
    var idNumber = id.slice(13);
    var labelId = "quantityLabel" + idNumber;
    var quantityNumber = document.getElementById(labelId).innerHTML;
    if (quantityNumber > 1) {
        quantityNumber--;
        document.getElementById(labelId).innerHTML = quantityNumber;
    }
}

function addQuantity(id) {
    console.log(id + " was pressed");
    var idNumber = id.slice(12);
    var labelId = "quantityLabel" + idNumber;
    var quantityNumber = document.getElementById(labelId).innerHTML;
    if (quantityNumber < 5) {
        quantityNumber++;
        document.getElementById(labelId).innerHTML = quantityNumber;
    }
}

function addCart(id) {
    console.log(id + " was pressed");
    var idNumber = id.slice(13);
    var labelId = "quantityLabel" + idNumber;
    console.log(labelId);
    var quantityNumber = document.getElementById(labelId).innerHTML;
    var productId = "product" + idNumber;
    console.log(productId);
    console.log(quantityNumber);
    localStorage.setItem(productId, quantityNumber);
}