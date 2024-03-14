import { useAuth0 } from "@auth0/auth0-react";
import { useState, useContext } from "react";
import SidebarModal from "../modals/SidebarModal";
import SidebarPanelProvider from "../../context/SidebarToggle";
import { MoreIcon, MoreIconPersistent } from "../../icons/index";

export default function SidebarProfile() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBtnIcon, setModalBtnIcon] = useState(false);

    const sidebarPanel = useContext(SidebarPanelProvider);

    const {
        loginWithRedirect,
        isAuthenticated,
        user
    } = useAuth0();

    const handleModalBackdropClick = () => {
        setModalOpen(!modalOpen);
        setModalBtnIcon(!modalBtnIcon);
    }

    const handleModalClick = () => {
        setModalOpen(!modalOpen);
        setModalBtnIcon(!modalBtnIcon);
    }

    let accountLinks;

    if (!isAuthenticated) {
        accountLinks = (
            <button className="text-white" onClick={() => loginWithRedirect()}>Login</button>
        )
    } else {
        if (!sidebarPanel.isSidebarPanelClosed) {
            accountLinks = (
                <>
                    <div className="flex pb-4 pl-1">
                        <img src={user.picture} alt={user.name} className="w-12 rounded-full" />
                    </div>
                </>
            )
        } else {
            accountLinks =
                <>
                    <div className="static flex gap-x-4 justify-center pb-4 pl-1">
                        <img src={user.picture} alt={user.name} className="w-12 max-h-12 rounded-full" />
                        <div>
                            <p className="body1 lm-tx-900 dark:dm-tx-100 transition duration-300">{user.given_name || "Test User"}</p>
                            <p className="bodySub2 lm-tx-600 dark:dm-tx-200 transition duration-300">3 Tasks Due Today</p>
                        </div>
                        <button className='group relative flex w-8 h-8 lm-bg-000 dark:dm-bg-700 rounded-full justify-center items-center transition duration-300' onClick={handleModalClick}>
                            {modalBtnIcon ? <MoreIconPersistent /> : <MoreIcon />}
                        </button>
                        <SidebarModal isOpen={modalOpen} onClose={handleModalBackdropClick} />
                    </div>
                </>
        }
    }

    return (
        <>
            {accountLinks}
        </>
    );
}