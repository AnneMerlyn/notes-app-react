function DeleteNote({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white p-6 rounded shadow-lg z-10 max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete this item?</p>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="btn btn-secondary mr-2"
                    >
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="btn btn-primary">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteNote;
