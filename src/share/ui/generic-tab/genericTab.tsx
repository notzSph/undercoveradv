import Image from "next/image";
import { useState } from "react";
import { useLayout } from "../../../hooks/useLayout.hook";
import { GenericTabProps as GenericTabProps } from "../../utils/types.utils";
import styles from "./genericTab.module.scss";

export default function GenericTab(props: GenericTabProps) {

    const { isLargeLayout } = useLayout();


    const [toggleState, toggleTab] = useState(0);


    const menuClass = `${(isLargeLayout? 'w-30 f-column ' : 'w-100 f-row j-between ')} ${(props.menuScroll ? 'o-scroll ' : 'o-hidden ')} `
    const titleClass = `${styles.tabTitle} ml-4 `
    const tabContainerClass = `${styles.container} ${(isLargeLayout ? 'f-row' : 'f-column')} w-100 h-100 o-hidden `
    const tabContentWrapperClass = `${styles.contentTabsWrapper} ${(isLargeLayout? 'w-70 ' : 'w-100 ')} ${(props.contentScroll ? 'o-scroll' : 'o-hidden')}`


    return (
        <>
            <div className={tabContainerClass}>
                <div className={menuClass} style={{minHeight: isLargeLayout ? 'auto' : '15%'}}>
                    {props.sections.map((section, i) => {

                        const tabClass = `${toggleState === i ? `${styles.tabs} ${styles.activeTabs} ${styles.menuTabs} ${styles.activeMenu}` : `${styles.tabs} ${styles.menuTabs}`} f-row a-center relative c-pointer `

                        return (
                            <div id={section.id} key={'left' + i}
                                className={tabClass}
                                onClick={() => toggleTab(i)}>
                                <Image src={section.icon} alt={section.title} width={50} height={50} />
                                <h5 className={titleClass}>{section.title}</h5>

                            </div>
                        )
                    })}


                </div>

                <div className={tabContentWrapperClass} style={{minHeight: isLargeLayout ? 'auto' : '85%'}}>
                    {props.sections.map((section, i) => {

                        const tabContentClass = `${styles.tabs} h-100`

                        return (
                            <>
                                {
                                    toggleState === i &&
                                    <div id={section.id} key={'right' + i} className={tabContentClass}>
                                        {section.content}
                                    </div>
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}