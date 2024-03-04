import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

import SidebarModal from "../modals/SidebarModal";
import { MoreIconOutline, MoreIconSolid, MoreIconSolidPersistent } from "../../icons/MoreIcons";

export default function SidebarProfile() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBtnIcon, setModalBtnIcon] = useState(false);

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
        accountLinks =
            <button className="text-white" onClick={() => loginWithRedirect()}>Login</button>
    } else {
        accountLinks =
            <>
                <div className="static flex gap-x-4 items-center pb-4">
                    <img src={user.picture} alt={user.name} className="w-12 rounded-full" />
                    <div>
                        <p className="body1 text-white">{user.given_name || "User"}</p>
                        <p className="bodySub2 text-stone-500">3 Tasks Due Today</p>
                    </div>
                    <button className='group relative flex w-8 h-8 bg-stone-800 rounded-full justify-center items-center' onClick={handleModalClick}>
                        {modalBtnIcon ? <MoreIconSolidPersistent /> : <MoreIconOutline />}
                        <MoreIconSolid />
                    </button>
                    <SidebarModal isOpen={modalOpen} onClose={handleModalBackdropClick} />
                </div>
            </>
    }

    return (
        <>
            {accountLinks}
        </>
    );
}