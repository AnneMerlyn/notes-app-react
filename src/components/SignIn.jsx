import { useState } from "react";
import { useUsers } from "../context/context";
import { Link, useNavigate } from "react-router";

function SignIn() {
    const {
        userState: { users },
        userDispatch,
    } = useUsers();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );
        if (foundUser) {
            userDispatch({ type: "USER_SIGNED_IN", payload: foundUser });
            navigate("/");
        } else {
            alert("User not found or incorrect credentials. Please sign up.");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="max-w-lg w-full p-8 bg-base-100 rounded-lg mt-1">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h2>Sign In</h2>
                        <p>
                            You don&apos;t have an account yet, you can
                            <Link
                                to="/signup"
                                className="text-indigo-500  ml-2"
                            >
                                signup here
                            </Link>
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                placeholder="Password"
                                className="grow"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button
                            type="submit"
                            className="btn btn-outline btn-primary w-full"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
