import { GenericPopup } from "../../share/ui/generic-popup/genericPopup";
import styles from './about.module.scss'


export default function AboutPopup() {
    return (
        <>
            <GenericPopup id='about' hasSidebar={false} hasScroll={true}
                content={
                    <div className='w-100 f-column flex-center-all'>
                        <h1>Your Partner In Crime Since 2008</h1>
                        <div>"We work with people, we're not just a one night stand"</div>
                    </div>
                }
            />
        </>
    )
}