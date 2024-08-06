import Card from "./Card";

export default function List() {
    return (
        <div className="border rounded-xl w-fit p-4 bg-primary-blue-2">
            <div className="flex">
                <p className="mr-6 text-off-white">LIST NAME</p>
                <button>OPTIONS</button>
            </div>
            <Card />
        </div>
    );
}