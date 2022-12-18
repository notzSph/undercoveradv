import { GenericPopup } from '../../share/ui/generic-popup/genericPopup';
import GenericTile from '../../share/ui/generic-tile/genericTile';
import styles from './services.module.scss';

export default function ServicesPopup() {
    return(
        <>
        <GenericPopup id='services' hasSidebar={true} hasScroll={true} 
        sidebar={
            <div>ginni ginni</div>
        }
        content={
            <GenericTile id='services' isPortfolio={false} 
            title={'Custom Web App'}
            subhead={'Do i need a Website for my business?'}
            description={'axjacsdsjaskkdsjdac c n idj hij  scskjcdnjskndjk dskjncs sdns jd j dskjj'}
            />
        }
        />
        </>
    )
}