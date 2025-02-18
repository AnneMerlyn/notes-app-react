import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import NoteContextProvider from "./context/NoteContextProvider";
import CreateNote from "./components/CreateNote";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <NoteContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="add-note" element={<CreateNote />} />
                            <Route
                                path="edit-note/:id"
                                element={<EditPage />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </NoteContextProvider>
            <ToastContainer />
        </>
    );
}

export default App;
