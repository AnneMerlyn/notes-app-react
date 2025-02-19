import { useState } from "react";
import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { MdNoteAdd } from "react-icons/md";
import { BiUser, BiSolidUser } from "react-icons/bi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = false;

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50">
                <div className="navbar container mx-auto px-4 py-3">
                    <div className="navbar-start">
                        <Link
                            to="/"
                            className="btn btn-ghost text-2xl font-bold text-primary"
                        >
                            Noted.
                        </Link>
                    </div>

                    <div className="navbar-end flex items-center space-x-4">
                        <ul className="hidden lg:flex menu menu-horizontal px-1 space-x-4">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center gap-2 hover:text-primary transition"
                                >
                                    <IoHome className="text-xl" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/add-note"
                                    className="flex items-center gap-2 hover:text-primary transition"
                                >
                                    <MdNoteAdd className="text-xl" /> Add Note
                                </Link>
                            </li>
                        </ul>

                        <Link
                            to={isLoggedIn ? "/profile" : "/signin"}
                            className="btn btn-ghost"
                        >
                            {isLoggedIn ? (
                                <BiSolidUser className="text-2xl" />
                            ) : (
                                <BiUser className="text-2xl" />
                            )}
                        </Link>

                        <button
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden bg-base-100 shadow-md">
                        <ul className="menu menu-compact flex flex-col items-center space-y-2 py-4">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center gap-2 hover:text-primary transition"
                                >
                                    <IoHome className="text-xl" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/add-note"
                                    className="flex items-center gap-2 hover:text-primary transition"
                                >
                                    <MdNoteAdd className="text-xl" /> Add Note
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={isLoggedIn ? "/profile" : "/signin"}
                                    className="btn btn-ghost flex items-center gap-2"
                                >
                                    {isLoggedIn ? (
                                        <BiSolidUser className="text-2xl" />
                                    ) : (
                                        <BiUser className="text-2xl" />
                                    )}
                                    {isLoggedIn ? "Profile" : "Sign In"}
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
