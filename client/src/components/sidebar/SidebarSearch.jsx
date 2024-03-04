export default function SidebarSeach() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" className="w-full bg-stone-800 px-4 py-2 mb-4 rounded-xl text-white placeholder:text-stone-400" />
        </form>
    );
}