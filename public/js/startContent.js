import { reloadContent } from "./reloadContent.js"
import { createSignUp } from "./signUp.js";
import { createLogIn } from "./logIn.js";

export function createStartContent() {
    const container = document.createElement('div');
    container.className = "container";

    const title = document.createElement('h1');
    title.innerText = "Title of the application";
    const description = document.createElement('p');
    description.innerText = "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.[1] Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration.[2] In practice it would be difficult to write literature that drew on just one of the four basic modes."

    container.appendChild(title);
    container.appendChild(description);
     

    const buttons = document.createElement('form');
    const signUp = document.createElement('input');
    signUp.type = "button";
    signUp.value = "Sign Up";
    signUp.className = "button";
    signUp.addEventListener('click', () => reloadContent(createSignUp()));
    const logIn = document.createElement('input');
    logIn.type = "button";
    logIn.value = "Log In";
    logIn.className = "button";
    logIn.addEventListener('click', () => reloadContent(createLogIn()));
    buttons.appendChild(signUp);
    buttons.appendChild(logIn);

    container.appendChild(buttons);

    return container;
}