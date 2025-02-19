import { useReducer } from "react";
import { AppContext } from "./context";
import { userReducer, noteReducer } from "./reducer";

function AppContextProvider({ children }) {
    const [userState, userDispatch] = useReducer(userReducer, {
        users: JSON.parse(localStorage.getItem("users")) || [],
        filter: "all",
    });

    const [noteState, noteDispatch] = useReducer(noteReducer, {
        notes: JSON.parse(localStorage.getItem("notes")) || [],
        filter: "all",
    });

    const value = {
        noteState,
        noteDispatch,
        userState,
        userDispatch,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
