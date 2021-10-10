const formSignup = document.querySelector(".card-signup");
const button = document.querySelector(".card-signup__button")
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


button.addEventListener('click', validation);

function validation(e) {
    e.preventDefault();

    let txtName = formSignup.querySelector("#name_txt");
    let txtLastName = formSignup.querySelector("#last_name_txt");
    let txtEmail = formSignup.querySelector("#email_txt");
    let txtPass = formSignup.querySelector("#pass_txt");

    txtName = validateText(txtName);
    txtLastName = validateText(txtLastName);
    txtEmail = validateEmail(txtEmail);
    txtPass = validateText(txtPass);

    if(txtName && txtLastName && txtEmail && txtPass) {
        formSignup.reset();
    }
}

function validateText(element) {
    let parent = element.parentNode;
    let errorMessage = parent.querySelector(".card-signup__error-text");
    
    if(element.value === "") {
        parent.classList.add("card-signup__group-input--error");
        element.classList.add("card-signup__input--error");
        errorMessage.classList.add('card-signup__error-text--show');
        return false;
    } else {
        parent.classList.remove("card-signup__group-input--error");
        element.classList.remove("card-signup__input--error");
        errorMessage.classList.remove('card-signup__error-text--show');
        return true;
    }
}

function validateEmail(element) {
    let parent = element.parentNode;
    let errorMessage = parent.querySelector(".card-signup__error-text");
    
    if(!regexEmail.exec(element.value)) {
        parent.classList.add("card-signup__group-input--error");
        element.classList.add("card-signup__input--error");
        errorMessage.classList.add('card-signup__error-text--show');
        return false;
    } else {
        parent.classList.remove("card-signup__group-input--error");
        element.classList.remove("card-signup__input--error");
        errorMessage.classList.remove('card-signup__error-text--show');
        return true;
    }
}