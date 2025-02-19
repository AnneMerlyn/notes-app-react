// This page handles local storage for notes
export const getNotes = () => {
    return JSON.parse(localStorage.getItem("notes")) || [];
};

export const updateNote = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
};

export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
};

export const updateUser = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
};
