import React from 'react'
import { GenericButton } from '../generic-button/genericButton';
import PopupTopbar from '../popup-topbar/popupTopbar';
import styles from './genericPopup.module.scss'



export interface GenericSectionProps { id: string, hasSidebar: boolean, hasScroll: boolean, content?: any, sidebar?: any, buttons?: any }

export class GenericPopup extends React.Component<GenericSectionProps, { isPopupActive: boolean }> {

    content: HTMLElement | null = null;
    sidebar: HTMLElement | null = null;

    constructor(props: GenericSectionProps) {
        super(props);
        this.state = {
            isPopupActive: true,
        }
    }

    render() {
        const popupWrapperClass = `${styles.genericPopup} ${(this.state.isPopupActive ? '' : 'd-none ')} w-100 f-column j-start a-center o-hidden bg-notWhite unselect-undrag `
        const topbarWrapperClass = `${styles.topbarWrapper} w-100 `
        const contentWrapperClass = `${styles.contentWrapper} f-row w-100 `
        const contentClass = 'f-column h-100 j-start a-start '
            + (this.props.hasSidebar ? `${styles.contentClass} w-70 ` : 'w-100 ')
            + (this.props.hasScroll ? 'o-scroll ' : '')
        const sidebarClass = 'w-30 h-100 flex-center-all f-column f-wrap '

        return (

            <section id={this.props.id} className={popupWrapperClass}>

                {/* Topbar */}
                <div id={(this.props.id + 'topBar')} className={topbarWrapperClass} >
                    <PopupTopbar />
                </div>

                {/* Content */}
                <div id={(this.props.id + 'contentWrapper')} className={contentWrapperClass}>
                    {
                        this.props.hasSidebar &&
                        <div id={(this.props.id + 'hasSidebar')} className={sidebarClass}>
                            {this.props.sidebar}
                        </div>
                    }
                    <div id={(this.props.id + 'content')} className={contentClass} style={{ height: '600px' }}>
                        {this.props.content && this.props.content}
                    </div>
                </div>
            </section >
        )
    }
}