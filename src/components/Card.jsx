// import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import DeleteNote from "./DeleteNote";
import { useState } from "react";

function Card({ note }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDelete = () => {
        // onDelete();
        closeModal();
        navigate("/");
    };

    //formatting date here
    const date = note?.date ? new Date(note.date) : null;
    const formattedDate = date
        ? date.toLocaleDateString("de-DE")
        : "No date available";

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex flex-row">
                    <div className="badge badge-secondary">{note.category}</div>
                    <div className="flex flex-row ml-auto items-center gap-2">
                        <Link
                            to={`/edit-note/${note.id}`}
                            className="cursor-pointer text-gray-500 hover:text-blue-500 active:text-blue-700 transition-colors"
                        >
                            <TbEdit size={20} />
                        </Link>
                        <button
                            onClick={openModal}
                            className="cursor-pointer text-gray-500 hover:text-red-500 active:text-red-700 transition-colors"
                        >
                            <RiDeleteBinLine size={20} />
                        </button>
                        <DeleteNote
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            onConfirm={handleDelete}
                        />
                    </div>
                </div>

                <h2 className="card-title">{note.title}</h2>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl"
                    />
                </figure>
                <p>{note.content}</p>
                <div className="card-actions justify-end">{formattedDate}</div>
            </div>
        </div>
    );
}

export default Card;
