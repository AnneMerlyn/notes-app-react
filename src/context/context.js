import { createContext, useContext } from "react";

const NoteContext = createContext();

const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context)
        throw new Error(
            "useTodos must be used inside of a TodoContextProvider"
        );
    return context;
};

export { NoteContext, useNotes };
