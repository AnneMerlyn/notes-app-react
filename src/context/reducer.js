import {
    updateNote as updateNoteToLocalStorage,
    updateUser as updateUserToLocalStorage,
    updateCurrentUser as updateCurrentUserToLocalStorage,
} from "../services/storage";

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "NOTE_ADDED": {
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

export const userReducer = (state, action) => {
    switch (action.type) {
        case "USER_ADDED": {
            const newUser = {
                id: crypto.randomUUID(),
                email: action.payload.email,
                username: action.payload.username,
                password: action.payload.password,
            };

            const newState = {
                ...state,
                users: [newUser, ...state.users],
            };

            updateUserToLocalStorage(newState.users);
            return newState;
        }
        case "USER_SIGNED_IN": {
            updateCurrentUserToLocalStorage(action.payload);
            return { ...state, currentUser: action.payload };
        }
        case "USER_SIGNED_OUT": {
            updateCurrentUserToLocalStorage(null);
            return { ...state, currentUser: null };
        }
        default:
            return state;
    }
};
