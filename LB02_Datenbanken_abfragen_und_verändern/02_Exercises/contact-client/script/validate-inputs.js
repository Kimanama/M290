// read form element
let ALL_INPUT_VALID;

//reading fields from input form
const form = document.getElementById('form');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const username = document.getElementById('username');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Mailadresse ist nicht korrekt');
        ALL_INPUT_VALID = false;
    }
}


// Check number is valid
function checkNumber(input) {
    //const re = /^\s*\+\s*\d{1,3}\s*-\s*\d{9, 10}\s*$/;
    const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Telefonnummer ist nicht korrekt');
        ALL_INPUT_VALID = false;
    }
}


// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} ist notwendig`);
            isRequired = true;
            ALL_INPUT_VALID = false;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}


// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} muss mindestens ${min} Zeichen haben`
        );
        ALL_INPUT_VALID = false;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} darf höchstens ${max} Zeichen haben`
        );
        ALL_INPUT_VALID = false;
    } else {
        showSuccess(input);
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// validate input fields
function validateForm() {
    if (!checkRequired([lastname, firstname, username, number, email, password])) {
        checkLength(firstname, 3, 20);
        checkLength(lastname, 3, 20);
        checkNumber(number);
        checkEmail(email);

    }
}

// testcall
window.onload = () => {
    console.log(`Make test call to the server ...`);
    getWelcome().then(
        result => {
            console.log(`Response from server: ${result}`);
        },
        error => {
            console.log(error)
        }
    );
};

// eventlistener
form.addEventListener('submit', function (e) {
    console.log("start event");
    ALL_INPUT_VALID = true;
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    //First validate form
    validateForm();
  console.log("after validation");
    //Send Data
    if (ALL_INPUT_VALID) {

        let formData = {
            firstName: firstname.value,
            lastName: lastname.value,
            username: username.value,
            number: number.value,
          email: email.value,
            password: password.value
        };


        console.log(`All input is valid. Send data to server: 
      ${JSON.stringify(formData)}`);

        //Variant 1
        //sendForm1(formData);


        //Variant 2
        sendForm2(formData).then(
            result => {
                console.log(`Response from server: ${result}`);
                //window.location.href = './confirm.html';
            },
            error => {
                console.log(error);
            }
        );
    } else {
        console.log("At least one validation failed. No data sent to contact-server.")
    }

});
