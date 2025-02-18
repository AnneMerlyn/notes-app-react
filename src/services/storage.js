// This page handles local storage for favorites and notes
export function addNote(note) {
    const idOfNote = note.id;
    const titleOfNote = note.title;
    const contentOfNote = note.content;
    const categoryOfNote = note.category;
    const noteDetails = {
        id: idOfNote,
        title: titleOfNote,
        content: contentOfNote,
        category: categoryOfNote,
    };

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteDetails);
    localStorage.setItem("notes", JSON.stringify(notes));
    alert(`${titleOfNote} added to Notes!`);
}

export const getNotes = () => {
    return JSON.parse(localStorage.getItem("notes")) || [];
};
export const removeNote = (noteId) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesResult = notes.filter((note) => note.id !== noteId);
    localStorage.setItem("notes", JSON.stringify(notesResult));
};

export const updateNote = (updatedNote) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteIndex = notes.findIndex((note) => note.id === updatedNote.id);

    if (noteIndex !== -1) {
        notes[noteIndex] = updatedNote;
        localStorage.setItem("notes", JSON.stringify(notes));
        alert(`${updatedNote.title} has been updated!`);
    } else {
        alert("Note not found.");
    }
};
