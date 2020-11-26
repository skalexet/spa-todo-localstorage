import { reloadContent } from "./reloadContent.js";
import { getUser, storeUser } from "./userStorage.js";


export function userSettings(email, preContent, userName) {
    const settings = JSON.parse(localStorage.getItem(email));
    const user = getUser(email);
    
    const container = document.createElement('div');
    container.className = "container";

    const firstName = document.createElement('h3');
    const lastName = document.createElement('h3');
    const exEmail = document.createElement('h3');
    const password = document.createElement('h3');
    firstName.innerText = settings.firstName;
    firstName.addEventListener('click', () => {
        firstName.hidden = true;
        firstNameEdit.hidden = false;
    });

    lastName.innerText = settings.lastName;
    lastName.addEventListener('click', () => {
        lastName.hidden = true;
        lastNameEdit.hidden = false;
    });
    exEmail.innerText = settings.email;
    exEmail.addEventListener('click', () => {
        exEmail.hidden = true;
        emailEdit.hidden = false;
    });
    password.innerText = settings.password;
    password.addEventListener('click', () => {
        password.hidden = true;
        passwordEdit.hidden = false;
    });

    const firstNameEdit = document.createElement('input');
    firstNameEdit.type = "text";
    firstNameEdit.hidden = true;
    firstNameEdit.addEventListener('change', () => {
        firstName.hidden = false;
        firstNameEdit.hidden = true;
        firstName.innerText = firstNameEdit.value;
        settings.firstName = firstName.innerText;
        user.firstName = settings.firstName;
        storeUser(email, user);
        const userName = user.dashboard.querySelector('h2');
        userName.innerText = settings.firstName;
        localStorage.setItem(email, JSON.stringify(settings));
    });

    const lastNameEdit = document.createElement('input');
    lastNameEdit.type = "text";
    lastNameEdit.hidden = true;
    lastNameEdit.addEventListener('change', () => {
        lastName.hidden = false;
        lastNameEdit.hidden = true;
        lastName.innerText = lastNameEdit.value;
        settings.lastName = lastName.innerText;
        user.lastName = settings.lastName;
        storeUser(email, user);
        localStorage.setItem(email, JSON.stringify(settings));
    });

    const emailEdit = document.createElement('input');
    emailEdit.type = "text";
    emailEdit.hidden = true;
    emailEdit.addEventListener('change', () => {
        exEmail.hidden = false;
        emailEdit.hidden = true;
        exEmail.innerText = emailEdit.value;
        settings.email = emailEdit.value;
        email = emailEdit.value;
        user.email = email;
        console.log(settings.email);
        storeUser(email, user);
        localStorage.setItem(email, JSON.stringify(settings));
    });

    const passwordEdit = document.createElement('input');
    passwordEdit.type = "text";
    passwordEdit.hidden = true;
    passwordEdit.addEventListener('change', () => {
        password.hidden = false;
        passwordEdit.hidden = true;
        password.innerText = passwordEdit.value;
        settings.password = passwordEdit.value;
        user.password = settings.password;
        console.log(user.password, settings.password);
        storeUser(email, user);
        localStorage.setItem(email, JSON.stringify(settings));
    });
    
    const backToContent = document.createElement('button');
    backToContent.innerText = "Back";
    backToContent.addEventListener('click', () => {
        reloadContent(user.dashboard);
    });

    container.appendChild(firstName);
    container.appendChild(firstNameEdit);
    container.appendChild(lastName);
    container.appendChild(lastNameEdit);
    container.appendChild(exEmail);
    container.appendChild(emailEdit);
    container.appendChild(password);
    container.appendChild(passwordEdit);
    container.appendChild(backToContent);

    reloadContent(container);
}
