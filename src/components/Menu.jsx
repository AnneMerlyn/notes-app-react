import { useState } from "react";

function Menu({ setSelectedCategory }) {
    const [selectedMenuItem, setSelectedMenuItem] = useState("All");

    const handleSelect = (category) => {
        setSelectedMenuItem(category);
        setSelectedCategory(category);
    };

    // console.log(selectedMenuItem);

    return (
        <div className="ml-4">
            <ul className="menu menu-horizontal p-2 gap-1 rounded-lg">
                {["All", "Personal", "Work", "Study", "Inspiration"].map(
                    (category) => (
                        <li key={category}>
                            <a
                                onClick={() => handleSelect(category)}
                                className={`px-4 py-2 rounded-lg transition-all ${
                                    selectedMenuItem === category
                                        ? "bg-indigo-500 hover:bg-indigo-500 text-white font-bold"
                                        : "hover:bg-indigo-300 hover:text-white"
                                }`}
                            >
                                {category}
                            </a>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Menu;
