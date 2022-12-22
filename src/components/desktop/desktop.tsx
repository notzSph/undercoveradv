import AboutPopup from "../about/about";
import BinPopup from "../bin/bin";
import PortfolioPopup from "../portfolio/portfolio";
import ServicesPopup from "../services/services";
import SystemPopup from "../system/system";
import FolderTile from "../../share/ui/folder-tile/folderTile";
import { folderTiles, loBandFolders, midBandFolders } from "../../share/utils/const.utils";
import styles from './desktop.module.scss'
import { useState } from "react";
import { isPropertySignature } from "typescript";

export default function Desktop() {

    const band = `${styles.band} flex-center-all `;
    const isLargeLayout: boolean = true;

    const [activePopup, setActivePopup] = useState<number | undefined>()


    return (
        <>
            {/* Main Container */}
            <div className="w-100 vh-100 f-column a-center j-between p-3">
                <>
                    {folderTiles.map((folder, i) => {
                        return (
                            <FolderTile key={i} id={folder.id}
                                icon={folder.icon}
                                name={folder.name}
                                onClick={() => setActivePopup(folder.id)}
                                style={{
                                    top: folder.top,
                                    left: folder.left
                                }}
                            />
                        )
                    })}
                </>
            </div>

            {/* Popups */}
            <SystemPopup isActive={activePopup === 1} onClose={() => setActivePopup(undefined)} />
            <ServicesPopup isActive={activePopup === 2} onClose={() => setActivePopup(undefined)} />
            <AboutPopup isActive={activePopup === 3} onClose={() => setActivePopup(undefined)} />
            <PortfolioPopup isActive={activePopup === 4} onClose={() => setActivePopup(undefined)} />
            <BinPopup isActive={activePopup === 6} onClose={() => setActivePopup(undefined)} />
        </>
    )
}