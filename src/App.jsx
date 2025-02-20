import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import CreateNote from "./components/CreateNote";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";
import AppContextProvider from "./context/AppContextProvider";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <AppContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="add-note"
                                element={
                                    <ProtectedRoute>
                                        <CreateNote />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="edit-note/:id"
                                element={<EditPage />}
                            />
                            <Route path="signin" element={<SignInPage />} />
                            <Route path="signup" element={<SignUpPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppContextProvider>
            <ToastContainer />
        </>
    );
}

export default App;
