var firstName;
var lastName;
var fullName
var email;
var subject;
var content;
var fnS;
var lnS;
var eS;
var sS;
var cS;

function sendMessage() {
    firstName = document.getElementById("first_name_input").value;
    lastName = document.getElementById("last_name_input").value;
    email = document.getElementById("email_input").value;
    subject = document.getElementById("title_input").value;
    content = document.getElementById("message_input").value;
    validateMessage();
    fullName = firstName + " " + lastName;
    if (fnS == true && lnS == true && eS == true && sS == true && cS == true) {
        console.log("Whole message is working");
        sendEmail();
    } else {
        console.log("Whole message is not working")
    }
    console.log("END OF MESSAGE");
}

function validateMessage() {
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

    if (subject.length >= 20 && lastName.length <= 100) {
        console.log("Subject is working");
        console.log("Subject = " + subject);
        document.getElementById("subjectError").setAttribute('style', 'display: none !important;');
        sS = true;
    } else {
        console.log("Subject is not working");
        document.getElementById("subjectError").setAttribute('style', 'display: block !important;');
        sS = false;
    }
    if (content.length >= 50) {
        console.log("Content is working");
        console.log("Content = " + content);
        cS = true;
    } else {
        console.log("Content is not working");
        document.getElementById("contentError").setAttribute('style', 'display: block !important;');
        cS = false;
    }
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