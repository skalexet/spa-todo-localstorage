const userStorage = new Map();

export function storeUser(email, user) {
    userStorage.set(email, user);
}

export function getUser(email) {
    return userStorage.get(email);
}