// This page handles local storage for notes
export const getNotes = () => {
    return JSON.parse(localStorage.getItem("notes")) || [];
};

export const updateNote = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
};
