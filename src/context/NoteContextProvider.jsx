import { useReducer } from "react";
import { NoteContext } from "./context";
import noteReducer from "./reducer";
const NoteContextProvider = ({ children }) => {
    // instead of useState, we use useReducer instead
    const [noteState, noteDispatch] = useReducer(
        noteReducer /* the first argument is the dispatch function */,
        //     /*the second argument is the initial state. here we have consolidated our notes and filter state into a single object */
        {
            notes: JSON.parse(localStorage.getItem("notes")) || [],
            filter: "all",
        }
    );

    return (
        <NoteContext.Provider value={{ noteState, noteDispatch }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContextProvider;
