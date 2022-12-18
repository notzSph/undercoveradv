import { GenericPopup } from '../../share/ui/generic-popup/genericPopup';
import styles from './services.module.scss';

export default function ServicesPopup() {
    return(
        <>
        <GenericPopup id='services' hasSidebar={true} hasScroll={true} 
        sidebar={
            <div>ginni ginni</div>
        }
        content={
            <div>jalla jalla</div>
        }
        />
        </>
    )
}