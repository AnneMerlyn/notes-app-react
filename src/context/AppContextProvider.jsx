import { useReducer } from "react";
import { AppContext } from "./context";
import { userReducer, noteReducer } from "./reducer";

function AppContextProvider({ children }) {
    const [userState, userDispatch] = useReducer(userReducer, {
        users: JSON.parse(localStorage.getItem("users")) || [],
        currentUser: null,
    });

    const [noteState, noteDispatch] = useReducer(noteReducer, {
        notes: JSON.parse(localStorage.getItem("notes")) || [],
    });

    const context = {
        noteState,
        noteDispatch,
        userState,
        userDispatch,
    };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}

export default AppContextProvider;
