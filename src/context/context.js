import { createContext, useContext } from "react";

const NoteContext = createContext();

const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context)
        throw new Error(
            "useNotes must be used inside of a NoteContextProvider"
        );
    return context;
};

export { NoteContext, useNotes };
