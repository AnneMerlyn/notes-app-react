import { useState } from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";
import NoNotes from "../components/NoNotes";
import { useNotes, useUsers } from "../context/context";
import { getNotesByCategory } from "../services/storage";
import ListCard from "../components/ListCard";

function HomePage() {
    const [viewMode, setViewMode] = useState("grid");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const {
        noteState: { notes },
    } = useNotes();

    const {
        userState: { currentUser },
    } = useUsers();

    let userNotes = [];
    if (selectedCategory === "All") {
        userNotes = notes.filter((note) => note.userId === currentUser.id);
    } else {
        userNotes = getNotesByCategory(selectedCategory, currentUser.id);
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <Menu
                    setSelectedCategory={setSelectedCategory}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />
                {userNotes.length > 0 ? (
                    viewMode === "grid" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
                            {userNotes.map((note) => (
                                <Card key={note.id} note={note} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 m-6">
                            {userNotes.map((note) => (
                                <ListCard key={note.id} note={note} />
                            ))}
                        </div>
                    )
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
                        <NoNotes />
                    </div>
                )}
            </div>
        </>
    );
}

export default HomePage;
