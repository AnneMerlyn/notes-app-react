import { useState } from "react";
import { useNotes, useUsers } from "../context/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function CreateNote() {
    const {
        userState: { currentUser },
    } = useUsers();

    const navigate = useNavigate();
    const { noteDispatch } = useNotes();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        imgUrl: "",
    });

    // console.log("user id", currentUser.id);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title) return;

        noteDispatch({
            type: "NOTE_ADDED",
            payload: { ...formData, userId: currentUser.id },
        });

        toast.success("Note added successfully!", { autoClose: 1000 });

        setFormData({ title: "", content: "", category: "" });

        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-lg w-full p-8 bg-base-100 rounded-lg mt-4">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                                <option value="Inspiration">Inspiration</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            Image
                            <input
                                type="text"
                                name="imgUrl"
                                value={formData.imgUrl}
                                onChange={handleChange}
                                className="input input-bordered w-full mt-1"
                                placeholder="Paste image url here"
                            />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Create this Note
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="btn btn-neutral w-full"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateNote;
