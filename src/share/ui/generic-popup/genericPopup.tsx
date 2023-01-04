import React, { useCallback } from 'react';
import { GenericPopupProps } from '../../utils/types.utils';
import PopupTopbar from '../popup-topbar/popupTopbar';
import styles from './genericPopup.module.scss';
import { useLayout } from '../../../hooks/useLayout.hook';
import { useFullscreenListener } from '../../../hooks/useFullscreenChange.hook';



export default function GenericPopup(props: GenericPopupProps) {

    const { isLargeLayout, isTablet, isMobile } = useLayout();

    // Styles
    const popupWrapperClass = `${styles.popupWrapper} ${(props.isActive ? '' : styles.inactive)} flex-center-all absolute `
    const popupClass = `${styles.genericPopup} ${(props.isActive ? '' : styles.inactive)} ${(isLargeLayout ? 'w-70' : 'w-90')} f-column j-start a-center absolute o-hidden bg-notWhite unselect-undrag `
    const topbarWrapperClass = `${styles.topbarWrapper} w-100 flex-center-all`
    const contentWrapperClass = `${styles.contentWrapper} ${(isMobile ? 'f-column j-start a-center' : 'f-row')} w-100 `
    const sidebarClass = `${(isLargeLayout ? 'w-30' : '')} ${(isTablet ? 'w-40' : '')} ${(isMobile ? 'w-100' : 'h-100')}  flex-center-all f-column f-wrap `
    const contentClass = `f-column ${(props.hasSidebar ? `${styles.contentClass} ${(isLargeLayout ? 'w-70' : '')} ${(isTablet ? 'w-60' : '')} ${(isMobile ? 'w-100' : 'h-100')}  ` : 'w-100 h-100')} ${(props.hasScroll ? 'o-scroll' : '')} ${(props.isSystem ? (isMobile ? 'j-start a-center' : 'flex-center-all') : 'j-start a-start')}`
    const stopReturn = useCallback((e: any) => {
        console.log('child ', e, e.nativeEvent)
        e.nativeEvent.stopPropagation()
    }, [])


    console.log('values: ', isLargeLayout, isMobile, isTablet)


    const fullscreenStatus = useFullscreenListener(props.id)


    const toggleFullScreen = useCallback(() => {
        console.log('toggle ', fullscreenStatus)
        const fs = !fullscreenStatus
        if (fs) {

            // Check if User Browser supports RequestFullscreen()
            if ((Element as any).prototype?.requestFullscreen) {
                document.getElementById(props.id)?.requestFullscreen()
            };
        } else {
            if (document.fullscreenElement) window.document.exitFullscreen();
        }
    }, [fullscreenStatus, props.id])


    const close = useCallback(() => {
        console.log('close ', fullscreenStatus)

        if (fullscreenStatus) toggleFullScreen()

        // Set Timeout to smooth popup close animation transition 
        setTimeout(() => {
            if (props.onClose) props.onClose()
        }, fullscreenStatus ? 350 : 0)
    }, [fullscreenStatus, props, toggleFullScreen])


    return (

        /* Container */
        <div className={popupWrapperClass} >
            <div className={styles.dismissArea + ' absolute'} onClick={close}></div>
            <section id={props.id} className={popupClass} onClick={stopReturn}>

                {/* Topbar */}
                <div id={(props.id + 'topBar')} className={topbarWrapperClass} onClick={stopReturn} >
                    <PopupTopbar onClose={close} title={props.id} onFullscreen={() => toggleFullScreen()} />
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
                    <div id={(props.id + 'content')} className={contentClass} style={{ height: (isLargeLayout ? '60vh' : '80vh') }}>
                        {props.content && props.content}
                    </div>

                </div>
            </section >
        </div>
    )

}
