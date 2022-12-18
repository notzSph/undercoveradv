import { GenericPopup } from "../../share/ui/generic-popup/genericPopup";
import styles from './system.module.scss';


export default function SystemPopup() {
    return (
        <>
            <GenericPopup id="1" hasScroll={true} hasSidebar={true}
                sidebar={
                    <div className='f-column flex-center-all ' style={{height: '600px'}}>
                        <img src='assets/images/undrcover-logo.png' alt='undrcvr_logo' className={`${styles.systemLogo} pb-5`} />
                        <h1 className='pb-5'>UndercoverADV</h1>
                        <h4 className='pb-4'>Your Parnter in Crime</h4>
                        <h6>Since 2009</h6>
                    </div>
                }
                content={
                    <h1> wewe </h1>
                }
            />
        </>
    )
}