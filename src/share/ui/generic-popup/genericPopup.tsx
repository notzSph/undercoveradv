import React, { useCallback, useState } from 'react'
import { GenericPopupProps } from '../../utils/types.utils';
import PopupTopbar from '../popup-topbar/popupTopbar';
import styles from './genericPopup.module.scss'


export default function GenericPopup(props: GenericPopupProps) {

    // Styles
    const popupWrapperClass = `${styles.popupWrapper} ${(props.isActive ? '' : styles.inactive)} flex-center-all absolute `
    const popupClass = `${styles.genericPopup} ${(props.isActive ? '' : styles.inactive)} w-70 f-column j-start a-center absolute o-hidden bg-notWhite unselect-undrag `
    const topbarWrapperClass = `${styles.topbarWrapper} w-100 flex-center-all`
    const contentWrapperClass = `${styles.contentWrapper} f-row w-100 `
    const contentClass = `${(props.hasSidebar ? `${styles.contentClass} w-70 ` : 'w-100 ')} ${(props.hasScroll ? 'o-scroll ' : '')} f-column h-100 j-start a-start `
    const sidebarClass = 'w-30 h-100 flex-center-all f-column f-wrap '
    const stopReturn = useCallback((e: any) => {
        console.log('child ', e, e.nativeEvent)
        e.nativeEvent.stopPropagation()
    }, [])

    const startCloseProcess = useCallback(() => {
        console.log('wrapper ')
        if (props.onClose) props.onClose()
    }, [props.onClose])


    return (

        /* Container */
        <div className={popupWrapperClass} >
            <div className={styles.dismissArea + ' absolute'} onClick={startCloseProcess}></div>
            <section id={props.id} className={popupClass} onClick={stopReturn}>

                {/* Topbar */}
                <div id={(props.id + 'topBar')} className={topbarWrapperClass} onClick={stopReturn} >
                    <PopupTopbar onClose={props.onClose} />
                </div>

                {/* Content Wrapper */}
                <div id={(props.id + 'contentWrapper')} className={contentWrapperClass} onClick={stopReturn}>

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
        </div>
    )

}