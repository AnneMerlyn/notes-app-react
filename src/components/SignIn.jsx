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
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!username.trim()) {
            newErrors.username = "Username is required.";
        }

        // Validate password
        if (!password.trim()) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );
        if (foundUser) {
            userDispatch({ type: "USER_SIGNED_IN", payload: foundUser });
            navigate("/");
        } else {
            alert("User not found or incorrect credentials. Please sign up.");
            navigate("/signup");
        }
    };

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-8">
            <div className="md:w-1/2 flex justify-center">
                <div className="max-w-lg w-full p-10 animate-slide-up">
                    <h2 className="text-4xl font-bold text-center md:text-left mb-6">
                        Sign In
                    </h2>
                    <p className="text-center md:text-left text-gray-400 mb-6">
                        Don’t have an account?
                        <Link to="/signup" className="text-indigo-500 ml-2">
                            Sign up here
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <label className="input input-bordered flex items-center gap-3 p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-5 w-5 opacity-70"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow text-lg"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        {errors.username && (
                            <span className="text-red-800 text-xs mt-1 ml-1">
                                {errors.username}
                            </span>
                        )}
                        <label className="input input-bordered flex items-center gap-3 p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-5 w-5 opacity-70"
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
                                className="grow text-lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        {errors.password && (
                            <span className="text-red-800 text-xs mt-1 ml-1">
                                {errors.password}
                            </span>
                        )}
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-lg p-3"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/ken.svg"
                    alt="Sign In"
                    className="w-72 md:w-80 animate-fade-in"
                />
            </div>
        </div>
    );
}

export default SignIn;
