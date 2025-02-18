import { useParams } from "react-router";
import EditNote from "../components/EditNote";
import { useNotes } from "../context/context";

function EditPage() {
    const { id } = useParams(); // Get the note ID from the URL
    const {
        noteState: { notes },
    } = useNotes();

    const note = notes.find((n) => n.id === id);

    if (!note) {
        return <p>Note not found!</p>;
    }

    return (
        <div>
            <EditNote key={note.id} note={note} />;
        </div>
    );
}

export default EditPage;
