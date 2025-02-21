import { createContext, useContext } from "react";

const AppContext = createContext();

const useNotes = () => {
    const { noteState, noteDispatch } = useContext(AppContext);
    return {
        noteState,
        noteDispatch,
    };
};

const useUsers = () => {
    const { userState, userDispatch } = useContext(AppContext);
    return {
        userState,
        userDispatch,
    };
};

export { useNotes, useUsers, AppContext };
