import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import DeleteNote from "./DeleteNote";
import { useState } from "react";
import { useNotes } from "../context/context";
import { PiBookOpenUserBold } from "react-icons/pi";
import ViewNote from "./ViewNote";

function ListCard({ note }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const navigate = useNavigate();
    const { noteDispatch } = useNotes();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openViewModal = () => setIsViewModalOpen(true);
    const closeViewModal = () => setIsViewModalOpen(false);

    const handleDelete = () => {
        noteDispatch({ type: "NOTE_DELETED", payload: note.id });
        closeModal();
        navigate("/");
    };

    const getCategoryColor = (category) => {
        const categoryColors = {
            Inspiration: "border-indigo-500 text-indigo-500",
            Study: "border-violet-500 text-violet-500",
            Personal: "border-blue-500 text-blue-500",
            Work: "border-sky-500 text-sky-500",
        };

        return categoryColors[category] || "border-gray-500 text-gray-500";
    };

    //formatting date here
    const date = note?.date ? new Date(note.date) : null;
    const formattedDate = date
        ? date.toLocaleDateString("de-DE")
        : "No date available";

    return (
        <div className="card bg-base-100 shadow-md p-4 flex flex-row gap-4 items-stretch">
            {note.imgUrl && (
                <figure className="w-1/3 flex-shrink-0">
                    <img
                        src={note.imgUrl}
                        alt="Note Thumbnail"
                        className="rounded-xl object-cover h-52 w-full"
                    />
                </figure>
            )}
            <div className="flex flex-col w-full">
                {/* Top Row: Category + Action Buttons */}
                <div className="flex flex-row items-center justify-between">
                    <div
                        className={`badge badge-outline ${getCategoryColor(
                            note.category
                        )} px-3 py-1`}
                    >
                        {note.category}
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <button
                            onClick={openViewModal}
                            className="cursor-pointer text-gray-500 hover:text-indigo-700 transition-colors"
                        >
                            <PiBookOpenUserBold size={20} />
                        </button>
                        <Link
                            to={`/edit-note/${note.id}`}
                            className="cursor-pointer text-gray-500 hover:text-green-700 transition-colors"
                        >
                            <TbEdit size={20} />
                        </Link>
                        <button
                            onClick={openModal}
                            className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
                        >
                            <RiDeleteBinLine size={20} />
                        </button>
                    </div>
                </div>

                {/* Title & Content */}
                <h2 className="card-title text-xl font-bold text-slate-100/80 mt-2 mb-2">
                    {note.title}
                </h2>
                <p className="text-gray-300/80 leading-relaxed line-clamp-3">
                    {note.content}
                </p>

                {/* Bottom Row: Date */}
                <div className="mt-auto flex justify-end text-gray-600 text-sm">
                    {formattedDate}
                </div>

                {/* Modals */}
                <DeleteNote
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onConfirm={handleDelete}
                />
                <ViewNote
                    isOpen={isViewModalOpen}
                    onClose={closeViewModal}
                    note={note}
                />
            </div>
        </div>
    );
}

export default ListCard;
