import Card from "../components/Card";

function HomePage() {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
                    <Card />
                </div>
            </div>
        </>
    );
}

export default HomePage;
