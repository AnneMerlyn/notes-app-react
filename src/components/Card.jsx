import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import {
    MdOutlineCheckBoxOutlineBlank,
    MdOutlineCheckBox,
} from "react-icons/md";

function Card() {
    const [checked, setChecked] = useState(false);

    const toggleCheck = (e) => {
        e.preventDefault();
        setChecked((prev) => !prev);
    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <div className="flex flex-row">
                    <div className="badge badge-secondary">Personal</div>
                    <div className="flex flex-row ml-auto items-center gap-2">
                        <a
                            href="#toggle"
                            onClick={toggleCheck}
                            className="cursor-pointer text-gray-500 hover:text-green-500 active:text-green-700 transition-colors"
                        >
                            {checked ? (
                                <MdOutlineCheckBox size={20} />
                            ) : (
                                <MdOutlineCheckBoxOutlineBlank size={20} />
                            )}
                        </a>
                        <a
                            href="#edit"
                            className="cursor-pointer text-gray-500 hover:text-blue-500 active:text-blue-700 transition-colors"
                        >
                            <TbEdit size={20} />
                        </a>
                        <a
                            href="#delete"
                            className="cursor-pointer text-gray-500 hover:text-red-500 active:text-red-700 transition-colors"
                        >
                            <RiDeleteBinLine size={20} />
                        </a>
                    </div>
                </div>
                <h2 className="card-title">Finish the task on the board!</h2>
                <p>
                    Finish the task on the board and then get some tasks from
                    the backlog.
                </p>
                <div className="card-actions justify-end">12.2.2024</div>
            </div>
        </div>
    );
}

export default Card;
