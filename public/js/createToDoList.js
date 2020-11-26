import { getUser } from "./userStorage.js";
import { reloadContent } from "./reloadContent.js";
import { editListName, saveListName, createToDo } from "./todoFunctions.js";
import { createStartContent } from "./startContent.js";

export function createToDoList(mail) {
    const user = getUser(mail);

    const container = document.createElement('div');
    container.className = "container";

    const backButton = document.createElement('button');
    backButton.innerText = "Log out";
    backButton.addEventListener('click', () => reloadContent(createStartContent()));

    const listName = document.createElement('h2');
    listName.innerText = "Name of list";

    const assignListName = document.createElement('input');
    assignListName.hidden = true; 
    assignListName.placeholder = "type the list name here";
    assignListName.style.border = "none";
    assignListName.style.margin = "1%";
    assignListName.style.padding = "1%";

    const ulDash = document.createElement('ul');
    ulDash.style.cursor = "pointer";
    const li = document.createElement('li');
    li.innerText = listName.innerText;
    user.dashboard.appendChild(ulDash);
    const titleNone = user.dashboard.querySelector('p');
    titleNone.remove();
    li.addEventListener('click', () => {
        reloadContent(user.toDoList.get(listName));
    });
    ulDash.appendChild(li); 

    user.toDoList.set(listName, container);
    

    listName.addEventListener('click', () =>  editListName(listName, assignListName));
    assignListName.addEventListener('change', () => {
        saveListName(assignListName, listName, li);
    });

    const addToDo = document.createElement('button');
    const ul = document.createElement('ul');
    ul.className = "to-do-list";
    addToDo.innerText = " + Add To DO Item ";
    addToDo.addEventListener('click', () => {
        const toDo = createToDo();
        ul.appendChild(toDo.itemBox);
        ul.appendChild(toDo.assignToDoName);
    });

    const backToDash = document.createElement('button');
    backToDash.innerText = "Back to Dashboard";
    backToDash.addEventListener('click', () => {
        reloadContent(user.dashboard);
    });

    container.appendChild(backButton);
    container.appendChild(listName);
    container.appendChild(assignListName);
    container.appendChild(backToDash);
    container.appendChild(addToDo);
    container.appendChild(ul);
    
    reloadContent(user.toDoList.get(listName));
}
