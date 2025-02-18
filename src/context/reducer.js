import { addNote as addNoteToLocalStorage } from "../services/storage";

const noteReducer = (state, action) => {
    switch (action.type) {
        case "NOTE_ADDED": {
            // Create a new note object using the data from the payload
            console.log("NOTE_ADDED");
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

            addNoteToLocalStorage(newState.notes);
            return newState;
        }
        default:
            return state;
    }
};

export default noteReducer;
