import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import CreateNote from "./components/CreateNote";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";
import AppContextProvider from "./context/AppContextProvider";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <>
            <AppContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="add-note" element={<CreateNote />} />
                            <Route
                                path="edit-note/:id"
                                element={<EditPage />}
                            />
                            <Route path="signin" element={<SignInPage />} />
                            <Route path="signup" element={<SignUpPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppContextProvider>
            <ToastContainer />
        </>
    );
}

export default App;
