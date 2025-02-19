import { useReducer } from "react";
import { AppContext } from "./context";
import { userReducer, noteReducer } from "./reducer";
import { getCurrentUser, getNotes, getUsers } from "../services/storage";

function AppContextProvider({ children }) {
    const [userState, userDispatch] = useReducer(userReducer, {
        users: getUsers(),
        currentUser: getCurrentUser(),
    });

    const [noteState, noteDispatch] = useReducer(noteReducer, {
        notes: getNotes(),
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
