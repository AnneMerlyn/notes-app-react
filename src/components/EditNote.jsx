import { useState, useEffect } from "react";
import { useNotes } from "../context/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function EditNote({ note }) {
    const navigate = useNavigate();
    const { noteDispatch } = useNotes();

    // Initialize local state for the form
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
    });

    // When the note prop is available or changes, update the form state
    useEffect(() => {
        if (note) {
            setFormData({
                title: note.title || "",
                content: note.content || "",
                category: note.category || "",
            });
        }
    }, [note]);

    // Handle changes for all input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title) return;
        noteDispatch({
            type: "NOTE_EDITED",
            payload: { ...formData, id: note.id },
        });

        toast.success("Note edited successfully!", { autoClose: 1000 });

        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-lg w-full p-8 bg-base-100 rounded-lg mt-4">
                <form className="space-y-6">
                    <div>
                        <label className="block">
                            Title
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="input input-bordered w-full mt-1"
                                placeholder="Enter title"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            Content
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Enter content..."
                                className="textarea textarea-bordered w-full mt-1"
                            ></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            Category
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select select-bordered w-full mt-1"
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                <option value="Personal">Personal</option>
                                <option value="Work">Work</option>
                                <option value="Study">Study</option>
                                <option value="Creative">Creative</option>
                            </select>
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary w-full"
                    >
                        Edit this Note
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditNote;
