import { createToDoList } from "./createToDoList.js";
import { reloadContent } from "./reloadContent.js";
import { createStartContent } from "./startContent.js";
import { userSettings } from "./userSettings.js";
import { storeUser, getUser } from "./userStorage.js";


export function createDashboard(email, name, user) {
    storeUser(email, user);
    const storedUser = getUser(email);

    const container = document.createElement('div');
    console.log(email);

    const backButton = document.createElement('button');
    backButton.innerText = "Log out";
    backButton.addEventListener('click', () => reloadContent(createStartContent()));

    const header = document.createElement('div');
    const title = document.createElement('h1');
    const userName = storedUser.firstName;
    const settings = document.createElement('button');
    settings.innerText = "User settings";
    settings.addEventListener('click', () => userSettings(storedUser.email));

    title.innerHTML = `<h3>Hello <h2>${userName}</h2></h3>`;
    header.className = "dashboard";
    
    const createNewList = document.createElement('button');
    createNewList.innerText = "Create new To Do List";
    createNewList.addEventListener('click', () => createToDoList(email));
    header.appendChild(title);

    const titleNone = document.createElement('p');
    titleNone.style.color = 'grey';
    titleNone.innerText = "Empty ... ";
    
    container.addEventListener('change', () => console.log('chenged'));

    container.appendChild(backButton);
    container.appendChild(settings);
    container.appendChild(header);
    container.appendChild(createNewList);
    container.appendChild(titleNone);

    user.dashboard = container;
}   
