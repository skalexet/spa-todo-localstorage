export function checkStorage(event) {
    if(localStorage.getItem(firstName.value).email) {
        console.log(email.value, + " same email already exsists");
        return false;
    } else {
        return true;
    }
}