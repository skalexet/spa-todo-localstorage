import { contentLoader } from "./contentLoader.js";

export function createAuthContent() {
    const form = document.createElement('form');
    form.className = 'auth';

    const email = document.createElement('input');
    email.type = 'text';
    email.placeholder = 'E-mail';

    const pass = document.createElement('input')
    pass.type = 'password';
    pass.placeholder = '...hashing';

    const button = document.createElement('button');
    button.innerText = "Sign In";
    
    form.appendChild(email);
    form.appendChild(pass);
    form.appendChild(button);
    contentLoader(form);
}