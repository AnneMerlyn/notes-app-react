import { Link } from "react-router";
import { useUsers } from "../context/context";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function SignUp() {
    const navigate = useNavigate();
    const { userDispatch } = useUsers();
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) return;
        userDispatch({ type: "USER_ADDED", payload: formData });

        toast.success("User added successfully!", { autoClose: 1000 });

        setFormData({ email: "", username: "", password: "" });

        setTimeout(() => {
            navigate("/signin");
        }, 2000);
    };

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6">
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img src="/stan.svg" alt="Sign Up" className="w-72 md:w-80" />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="max-w-lg w-full p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <h2 className="text-4xl font-bold text-center md:text-left mb-6">
                                Sign Up
                            </h2>
                            <p className="text-center md:text-left">
                                You have an account?
                                <Link
                                    to="/signin"
                                    className="text-indigo-500 ml-1"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    type="text"
                                    name="email"
                                    className="grow"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
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
                                    name="username"
                                    className="grow"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
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
                                    name="password"
                                    placeholder="Password"
                                    className="grow"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
