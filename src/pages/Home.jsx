import Card from "../components/Card";
import { useNotes } from "../context/context";

function HomePage() {
    const {
        noteState: { notes },
    } = useNotes();

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
                    {notes.length > 0 ? (
                        notes.map((note) => <Card key={note.id} note={note} />)
                    ) : (
                        <p className="text-center text-gray-500 mt-4">
                            No notes available. Start by adding a new note! ✏️
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomePage;
