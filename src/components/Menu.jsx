import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

function Menu({ setSelectedCategory, setViewMode, viewMode }) {
    const [selectedMenuItem, setSelectedMenuItem] = useState("All");

    const handleSelect = (category) => {
        setSelectedMenuItem(category);
        setSelectedCategory(category);
    };

    // console.log(selectedMenuItem);

    return (
        <div className="flex items-center p-2 gap-4 rounded-lg ml-4 mb-4 justify-between">
            {/* Menu Filters */}
            <ul className="menu menu-horizontal gap-1">
                {["All", "Personal", "Work", "Study", "Inspiration"].map(
                    (category) => (
                        <li key={category}>
                            <a
                                onClick={() => handleSelect(category)}
                                className={`px-4 py-2 rounded-lg transition-all ${
                                    selectedMenuItem === category
                                        ? "bg-indigo-500 hover:bg-indigo-500 text-gray-700 font-bold"
                                        : "hover:bg-indigo-400 hover:text-gray-700"
                                }`}
                            >
                                {category}
                            </a>
                        </li>
                    )
                )}
            </ul>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
                <button
                    className={`px-4 py-2 ${
                        viewMode === "grid"
                            ? "bg-indigo-600 text-white"
                            : " text-gray-600"
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid View"
                >
                    <FiGrid size={20} />
                </button>
                <button
                    className={`px-4 py-2 ${
                        viewMode === "list"
                            ? "bg-indigo-600 text-white"
                            : " text-gray-600"
                    }`}
                    onClick={() => setViewMode("list")}
                    aria-label="List View"
                >
                    <FaListUl size={20} />
                </button>
            </div>
        </div>
    );
}

export default Menu;
