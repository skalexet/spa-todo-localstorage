import { handleRequest } from "./handleRequest.js";
import { reloadContent } from "./reloadContent.js";
import { createStartContent } from "./startContent.js";

export function createSignUp() {
    const container = document.createElement('div');
    container.className = "container";

    const backButton = document.createElement('button');
    backButton.innerText = "Back to start";
    backButton.addEventListener('click', () => reloadContent(createStartContent()));

    const formField = document.createElement('form');
    const firstName = document.createElement('input');
    firstName.type = "password";
    firstName.id = "firstName";
    const lastName = document.createElement('input');
    lastName.type = "password";
    lastName.id = "lastName";
    const email = document.createElement('input');
    email.type = "password";
    email.id = "email";
    const password = document.createElement('input');
    password.type = "password";
    password.id = "password";

    const firstNameTitle = document.createElement('h3');
    firstNameTitle.innerText = "First name"
    const lastNameTitle = document.createElement('h3');
    lastNameTitle.innerText = "Last Name"
    const emailTitle = document.createElement('h3');
    emailTitle.innerText = "E-mail"
    const passwordTitle = document.createElement('h3');
    passwordTitle.innerText = "Password"

    
    formField.appendChild(firstNameTitle);
    formField.appendChild(firstName);
    formField.appendChild(lastNameTitle);
    formField.appendChild(lastName);
    formField.appendChild(emailTitle);
    formField.appendChild(email);
    formField.appendChild(passwordTitle);
    formField.appendChild(password);

    const termsBox = document.createElement('div');
    termsBox.className = "check-content"
    const check = document.createElement('input');
    check.type = "checkbox";
    const terms = document.createElement('p');
    terms.innerText = "I agree to the Terms of Use";
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Continue";
    submit.className = "button";
    termsBox.appendChild(terms);
    termsBox.appendChild(check);
    formField.appendChild(termsBox);  
    formField.appendChild(submit);
    formField.addEventListener('submit', (event) => handleRequest(event, check, container));

    container.appendChild(backButton);
    container.appendChild(formField);

    return container;
}