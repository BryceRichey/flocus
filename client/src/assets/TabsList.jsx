export default function TabsList({ tabsList }) {
    let renderedTabList = (
        <ul className="flex pb-4">
            {tabsList.map(tab => {
                <li key={tab.label}>
                    
                </li>
            })}
        </ul>
    );

    return (
        <div className="flex lm-tx-900">
            {renderedTabList}
        </div>
    )
}