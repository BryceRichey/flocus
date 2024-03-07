import {
    createContext,
    useState,
    useEffect
} from "react";

const SidebarPanelContext = createContext();

function SidebarPanelProvider({ children }) {
    const [isSidebarPanelClosed, setIsSidebarPanelClosed] = useState(
        localStorage.getItem('isSidebarPanelClosed') === 'true'
    );

    const toggleSidebar = () => {
        setIsSidebarPanelClosed(!isSidebarPanelClosed);
    }

    useEffect(() => {
        localStorage.setItem('isSidebarPanelClosed', isSidebarPanelClosed);
    }, [isSidebarPanelClosed]);

    return (
        <SidebarPanelContext.Provider value={{ isSidebarPanelClosed, toggleSidebar }}>
            {children}
        </SidebarPanelContext.Provider>
    )
}

export {
    SidebarPanelProvider,
}

export default SidebarPanelContext;