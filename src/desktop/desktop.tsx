import AboutPopup from "../components/about/about";
import BinPopup from "../components/bin/bin";
import PortfolioPopup from "../components/portfolio/portfolio";
import ServicesPopup from "../components/services/services";
import SystemPopup from "../components/system/system";
import FolderTile from "../share/ui/folder-tile/folderTile";
import { hiBandFolders, loBandFolders, midBandFolders } from "../share/utils/const.utils";
import styles from './desktop.module.scss'

export default function Desktop() {

    const band = `${styles.band} flex-center-all `;
    const isLargeLayout: boolean = true;

    return (
        <>
            {/* Main Container */}
            <div className="w-100 vh-100 f-column a-center j-between p-5">

                {/* Hi Band Container */}
                <div className={band} style={{ width: isLargeLayout ? '100%' : '100%' }}>
                    {hiBandFolders.map((folder) => {
                        return (
                            <FolderTile id={folder.id} icon={folder.icon} name={folder.name} />
                        )
                    })}
                </div>

                {/* Mid Band Container */}
                <div className={band} style={{ width: isLargeLayout ? '60%' : '100%' }}>
                    {midBandFolders.map((folder) => {
                        return (
                            <FolderTile id={folder.id} icon={folder.icon} name={folder.name} />
                        )
                    })}
                </div>

                {/* Lo Band Container */}
                <div className={band} style={{ width: isLargeLayout ? '70%' : '100%' }}>
                    {loBandFolders.map((folder) => {
                        return (
                            <FolderTile id={folder.id} icon={folder.icon} name={folder.name} />
                        )
                    })}
                </div>
            </div>
            {/* Popups */}
            <SystemPopup />
            <AboutPopup />
            <BinPopup />
            <PortfolioPopup />
            <ServicesPopup />


        </>
    )
}