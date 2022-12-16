import React from 'react'
import './genericPopup.scss'
import '../../styles/styles.scss'



export interface GenericSectionProps { id: string, topBar: any, hasSidebar: boolean, hasScroll: boolean, content?: any, sidebar?: any, title?: any, subtitle?: any, button?: any }

export class GenericPopup extends React.Component<GenericSectionProps, { isPopupActive: boolean }> {

    title: HTMLElement | null = null;
    subtitle: HTMLElement | null = null;
    content: HTMLElement | null = null;
    sidebar: HTMLElement | null = null;

    constructor(props: GenericSectionProps) {
        super(props);
        this.state = {
            isPopupActive: true,
        }
    }

    render() {
        const popupClass = "generic-popup w-100 f-column j-start a-center o-hidden bg-notWhite unselect-undrag"
            + (this.state.isPopupActive ? '' : 'd-none ')
        const topBarClass = 'topbar-wrapper w-100 j-between a-center py-3 '
        const contentWrapperClass = 'content-wrapper f-row w-100 '
        const contentClass = 'f-column h-100 j-start a-start '
            + (this.props.hasSidebar ? 'w-70 ' : 'w-100 ')
            + (this.props.hasScroll ? 'o-scroll ' : '')
        const sidebarClass = 'w-30 h-100 f-column f-wrap j-start a-start '
        const buttonClass = "w-100 flex-center-all mt-5 "

        return (
            <section id={this.props.id} className={popupClass}>
                {
                    this.props.topBar &&
                    <div id={(this.props.id + 'topBar')} className={topBarClass} >
                        {this.props.topBar}
                    </div>
                }

                <div id={(this.props.id + 'contentWrapper')} className={contentWrapperClass}>
                    {
                        this.props.hasSidebar &&
                        <div id={(this.props.id + 'hasSidebar')} className={sidebarClass}>
                            {this.props.sidebar}
                        </div>
                    }
                    <div id={(this.props.id + 'content')} className={contentClass}>
                        {this.props.content && this.props.content}
                    </div>
                </div>
                {
                    this.props.button &&
                    <div className={buttonClass} >
                        {this.props.button}
                    </div>
                }
            </section >
        )
    }
}