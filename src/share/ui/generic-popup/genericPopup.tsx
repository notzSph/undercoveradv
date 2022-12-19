import React from 'react'
import { GenericPopupProps } from '../../utils/types.utils';
import PopupTopbar from '../popup-topbar/popupTopbar';
import styles from './genericPopup.module.scss'


export default function GenericPopup(props: GenericPopupProps) {

    // Styles
    const popupWrapperClass = `${styles.genericPopup} ${(props.isActive ? '' : 'd-none ')} w-100 f-column j-start a-center o-hidden bg-notWhite unselect-undrag `
    const topbarWrapperClass = `${styles.topbarWrapper} w-100 flex-center-all`
    const contentWrapperClass = `${styles.contentWrapper} f-row w-100 `
    const contentClass = `${(props.hasSidebar ? `${styles.contentClass} w-70 ` : 'w-100 ')} ${(props.hasScroll ? 'o-scroll ' : '')} f-column h-100 j-start a-start `
    const sidebarClass = 'w-30 h-100 flex-center-all f-column f-wrap '

    return (

        /* Container */
        <section id={props.id} className={popupWrapperClass}>

            {/* Topbar */}
            <div id={(props.id + 'topBar')} className={topbarWrapperClass} >
                <PopupTopbar />
            </div>

            {/* Content Wrapper */}
            <div id={(props.id + 'contentWrapper')} className={contentWrapperClass}>

                {/* Sidebar */}
                {
                    props.hasSidebar &&
                    <div id={(props.id + 'hasSidebar')} className={sidebarClass}>
                        {props.sidebar}
                    </div>
                }

                {/* Content */}
                <div id={(props.id + 'content')} className={contentClass} style={{ height: '600px' }}>
                    {props.content && props.content}
                </div>

            </div>
        </section >
    )

}