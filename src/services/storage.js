// This page handles local storage for notes
export function addNote(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
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
