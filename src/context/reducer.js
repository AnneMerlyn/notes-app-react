import { updateNote as updateNoteToLocalStorage } from "../services/storage";

const noteReducer = (state, action) => {
    switch (action.type) {
        case "NOTE_ADDED": {
            // Create a new note object using the data from the payload

            const newNote = {
                id: crypto.randomUUID(),
                title: action.payload.title,
                content: action.payload.content,
                category: action.payload.category,
                date: Date.now(),
            };

            const newState = {
                ...state,
                notes: [newNote, ...state.notes],
            };

            updateNoteToLocalStorage(newState.notes);
            return newState;
        }
        case "NOTE_EDITED": {
            const updatedNotes = state.notes.map((note) =>
                note.id === action.payload.id
                    ? { ...note, ...action.payload, date: Date.now() }
                    : note
            );
            updateNoteToLocalStorage(updatedNotes);
            return { ...state, notes: updatedNotes };
        }
        case "NOTE_DELETED": {
            const deletedNotes = state.notes.filter(
                (note) => note.id !== action.payload
            );
            updateNoteToLocalStorage(deletedNotes);
            return { ...state, notes: deletedNotes };
        }
        default:
            return state;
    }
};

export default noteReducer;
