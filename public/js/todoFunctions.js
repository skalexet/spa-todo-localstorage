export function saveListName(assignListName, listName, li) {
    if (assignListName.value != '') {
        listName.innerText = assignListName.value;
        li.innerText = listName.innerText;
    }
        
    assignListName.hidden = true;
    listName.hidden = false;
}

export function editListName(listName, assignListName){
    listName.hidden = true;
    assignListName.hidden = false;
}

export function createToDo() {
    const assignToDoName = document.createElement('input');
    const toDoName = document.createElement('li');
    toDoName.hidden = true;

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.hidden = true;
    checkbox.addEventListener('mousedown', () => {
        if (!checkbox.checked) {
            toDoName.style.textDecoration = "line-through";
        } else {
            toDoName.style.textDecoration = "none";
        }
    });

    const itemBox = document.createElement('div');
    itemBox.appendChild(toDoName);
    itemBox.appendChild(checkbox);
    itemBox.className = "check-content";

    assignToDoName.placeholder = "Type to do name";
    assignToDoName.addEventListener('blur', () => {
        toDoName.innerText = assignToDoName.value;
        assignToDoName.hidden = true;
        toDoName.hidden = false;
        checkbox.hidden = false;
    });
    
    toDoName.addEventListener('click', () => {
        toDoName.hidden = true;
        checkbox.hidden = true;
        assignToDoName.hidden = false;
    });

    return { assignToDoName, itemBox }
}
 