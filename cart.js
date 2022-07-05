for (var id = 1; id <= 5; id++) {
    var productQuantity = localStorage.getItem('product' + id);
    console.log('product' + id + ' = ' + productQuantity);
    document.getElementById("cartQuantityLabel" + id).innerHTML = productQuantity;
    if (productQuantity == 0) {
        document.getElementById("cartProductContainer" + id).style = 'display: none;';
    }
}
var product1Quantity = localStorage.getItem('product1');
var product2Quantity = localStorage.getItem('product2');
var product3Quantity = localStorage.getItem('product3');
var product4Quantity = localStorage.getItem('product4');
var product5Quantity = localStorage.getItem('product5');
var totalProductSum = (product1Quantity * 119) + (product2Quantity * 229) + (product3Quantity * 79) + (product4Quantity * 79) + (product5Quantity * 79);
localStorage.setItem('totalSum', totalProductSum);
document.getElementById("totalPrice").innerHTML = "$" + totalProductSum;
if (totalProductSum == 0) {
    document.getElementById("checkoutContainer").style = 'display: none;';
} else {
    document.getElementById("checkoutContainer").style = 'display: block;';
}

function goBack() {
    window.location = "order.html";
}

function removeProduct(buttonId) {
    console.log(buttonId + " was pressed");
    var idNumber = buttonId.slice(16);
    localStorage.setItem('product' + idNumber, 0);
    document.getElementById("cartProductContainer" + idNumber).style = 'display: none;';
    update();
}

function cartMinusQuantity(id) {
    console.log(id + " was pressed");
    var idNumber = id.slice(17);
    console.log(idNumber);
    var labelId = "cartQuantityLabel" + idNumber;
    var quantityNumber = document.getElementById(labelId).innerHTML;
    if (quantityNumber > 1) {
        quantityNumber--;
        document.getElementById(labelId).innerHTML = quantityNumber;
        localStorage.setItem('product' + idNumber, quantityNumber);
        update();
    }
}

function cartAddQuantity(id) {
    console.log(id + " was pressed");
    var idNumber = id.slice(16);
    console.log(idNumber);
    var labelId = "cartQuantityLabel" + idNumber;
    var quantityNumber = document.getElementById(labelId).innerHTML;
    if (quantityNumber < 5) {
        quantityNumber++;
        document.getElementById(labelId).innerHTML = quantityNumber;
        localStorage.setItem('product' + idNumber, quantityNumber);
        update();
    }
}

function update() {
    product1Quantity = localStorage.getItem('product1');
    product2Quantity = localStorage.getItem('product2');
    product3Quantity = localStorage.getItem('product3');
    product4Quantity = localStorage.getItem('product4');
    product5Quantity = localStorage.getItem('product5');
    totalProductSum = (product1Quantity * 119) + (product2Quantity * 229) + (product3Quantity * 79) + (product4Quantity * 79) + (product5Quantity * 79);
    localStorage.setItem('totalSum', totalProductSum);
    document.getElementById("totalPrice").innerHTML = "$" + totalProductSum;
}




var firstName;
var lastName;
var fullName
var email;
var location;
var note;
var fnS;
var lnS;
var eS;
var lS;
var nS;

function checkoutCart() {
    firstName = document.getElementById("firstNameInput").value;
    lastName = document.getElementById("lastNameInput").value;
    email = document.getElementById("emailInput").value;
    subject = document.getElementById("locationInput").value;
    content = document.getElementById("noteInput").value;
    validateCheckout();
    fullName = firstName + " " + lastName;
    if (fnS == true && lnS == true && eS == true && lS == true && nS == true) {
        console.log("Whole checkout is working");
        sendEmail();
    } else {
        console.log("Whole checkout is not working")
    }
    console.log("END OF MESSAGE");
}

function validateCheckout() {
    console.log("START OF MESSAGE");
    if (firstName.length >= 1 && firstName.length <= 100) {
        console.log("First name is working");
        console.log("First Name = " + firstName);
        document.getElementById("firstNameError").setAttribute('style', 'display: none !important;');
        fnS = true;
    } else {
        console.log("First name is not working");
        document.getElementById("firstNameError").setAttribute('style', 'display: block !important;');
        fnS = false;
    }

    if (lastName.length >= 1 && lastName.length <= 100) {
        console.log("Last name is working");
        console.log("Last Name = " + lastName);
        document.getElementById("lastNameError").setAttribute('style', 'display: none !important;');
        lnS = true;
    } else {
        console.log("Last name is not working");
        document.getElementById("lastNameError").setAttribute('style', 'display: block !important;');
        lnS = false;
    }

    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        console.log("Email is working");
        console.log("Email = " + email);
        document.getElementById("emailError").setAttribute('style', 'display: none !important;');
        eS = true;
    } else {
        console.log("Email is not working");
        document.getElementById("emailError").setAttribute('style', 'display: block !important;');
        eS = false;
    }

    if (subject.length >= 1 && lastName.length <= 100) {
        console.log("Location is working");
        console.log("Location = " + subject);
        document.getElementById("locationError").setAttribute('style', 'display: none !important;');
        lS = true;
    } else {
        console.log("Location is not working");
        document.getElementById("locationError").setAttribute('style', 'display: block !important;');
        lS = false;
    }
    console.log("Note is working");
    console.log("Note = " + note);
    nS = true;
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'minhnhfx15590@funix.edu.vn',
        Password: "ctam1588",
        To: 'minhnhfx15590@funix.edu.vn',
        From: 'minhnhfx15590@funix.edu.vn',
        Subject: "Minh's Lego Blog - " + subject + " - Message from " + fullName + "(" + email + ")",
        Body: content,
    }).then(
        alert("Your Message has been sent")
    );
}