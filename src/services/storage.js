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

export const updateCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
};

export const getNotesByCategory = (category, userId) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    return notes.filter(
        (note) => note.category === category && note.userId === userId
    );
};
