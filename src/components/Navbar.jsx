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
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Add Note</a>
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
