export default function ListItems() {
    const testData = ['Test_Item_One', 'Test_Item_Two', 'Test_Item_Three']

    return (
        <ol className="mb-3">
            {testData.map((item, index) => (
                <li className="bg-stone-200 mb-2 p-1 rounded" key={index}>
                    {item}
                </li>
            ))}
        </ol>
    )
}