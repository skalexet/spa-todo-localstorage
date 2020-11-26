import { reloadContent } from "./reloadContent.js";
import { createStartContent } from "./startContent.js";
import { getUser } from "./userStorage.js";

export function createLogIn() {
    const container = document.createElement('div');
    container.className = "container";

    const backButton = document.createElement('button');
    backButton.innerText = "Back to start";
    backButton.addEventListener('click', () => reloadContent(createStartContent()));

    const form = document.createElement('form');

    const emailTitle = document.createElement('h3');
    emailTitle.innerText = "Email"
    const email = document.createElement('input');
    email.type = "text";

    const passwordTitle = document.createElement('h3');
    passwordTitle.innerText = "Password"
    const password = document.createElement('input');
    password.type = "password";
    email.placeholder = "type your email";
    password.placeholder = "type your password";

    const button = document.createElement('input');
    button.type = "submit";
    button.value = "Continue";
    button.className = "button";
    form.appendChild(emailTitle);
    form.appendChild(email);
    form.appendChild(passwordTitle);
    form.appendChild(password);
    form.appendChild(button);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem(email.value));

        if (!user || !getUser(user.email) || 
        user.email !== email.value ||   
        user.password !== password.value) {

            if(document.querySelector("span")) {
                container.lastElementChild.remove();
            }

            setTimeout(() => {
                const error = document.createElement('span');
                error.innerText = "Error! Incorrect email or password"
                error.style.color = "red";
                container.appendChild(error);
            }, 300);

        } else {
            reloadContent(getUser(user.email).dashboard);
        } 
    });

    container.appendChild(backButton);
    container.appendChild(form);

    return container;
}