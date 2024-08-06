import List from "../../components/boards/List";

export const metadata = {
    title: "Boards Page",
}

export default function Page() {
    return (
        <>
            <div>
                <div className="flex place-content-between">
                    <h1>BOARD NAME</h1>
                    <button>OPTIONS</button>
                </div>
            </div>
            <List />
        </>
    );
}