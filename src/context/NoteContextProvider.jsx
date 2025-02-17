import { useReducer } from "react";
import { NoteContext } from "./context";
import todoReducer from "./reducer";
const NoteContextProvider = ({ children }) => {
    // instead of useState, we use useReducer instead
    const [noteState, noteoDispatch] = useReducer(
        todoReducer /* the first argument is the dispatch function */,
        /*the second argument is the initial state. here we have consolidated our notes and filter state into a single object */
        {
            todos: JSON.parse(localStorage.getItem("notes")) || [],
            filter: "all",
        }
    );

    return (
        <NoteContext.Provider value={{ noteState, noteoDispatch }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContextProvider;
