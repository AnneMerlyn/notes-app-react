import { createContext, useContext } from "react";

const AppContext = createContext();

const useNotes = () => {
    const context = useContext(AppContext);
    if (!context)
        throw new Error("useNotes must be used inside of a AppContextProvider");
    return context;
};

const useUsers = () => {
    const context = useContext(AppContext);
    if (!context)
        throw new Error("useUsers must be used inside of a AppContextProvider");
    return context;
};

export { useNotes, useUsers, AppContext };
