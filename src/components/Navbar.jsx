import { Link } from "react-router";

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Noted.</a>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-note">Add Note</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">SignIn</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
