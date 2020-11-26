import { createDashboard } from "./dashboard.js";
import { reloadContent } from "./reloadContent.js";
import { getUser } from "./userStorage.js";

export function handleRequest(event, check, container) {
    event.preventDefault();
    
    if (!check.checked) {

        if (document.querySelector("span")) {
            container.lastElementChild.remove();
        }

        setTimeout(() => {
            const error = document.createElement('span');
            error.innerText = "Look out! Agreement point still empty";
            error.style.color = "red";
            container.appendChild(error);
        }, 200);
        return;
    }

    if (localStorage.getItem(email.value)) {

        if (document.querySelector("span")) {
            container.lastElementChild.remove();
        }

        setTimeout(() => {
            const error = document.createElement('span');
            error.innerText = "Error! Same email already exists";
            error.style.color = "red";
            container.appendChild(error);
        }, 200);

    } else {
        const user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            dashboard: null,
            toDoList: new Map(),
        }

        localStorage.setItem(email.value, JSON.stringify(user));
        
        createDashboard(email.value, firstName.value, user);
        
        reloadContent(getUser(email.value).dashboard);
    }  

}
