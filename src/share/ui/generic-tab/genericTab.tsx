import { useState } from "react";
import { GenericTabsProps as GenericTabsProps } from "../../utils/types.utils";
import styles from "./genericTab.module.scss";

export default function GenericTabs(props: GenericTabsProps) {

    const [toggleState, toggleTab] = useState(0);


    const menuClass = `${(props.menuScroll ? 'o-scroll' : 'o-hidden')} f-column w-30 `
    const titleClass = `${styles.tabTitle} ml-4 `
    const tabContentClass = `${styles.tabContent} h-100 `


    return (
        <>
            <div className="container w-100 h-100 f-row o-hidden">
                <div className={menuClass}>
                    {props.sections.map((section, i) => {

                        const tabClass = `${toggleState === i ? `${styles.tabs} ${styles.activeTabs} ${styles.menuTabs} ${styles.activeMenu}` : `${styles.tabs} ${styles.menuTabs}`} f-row a-center relative c-pointer `

                        return (
                            <div id={section.id} key={i}
                                className={tabClass}
                                onClick={() => toggleTab(i)}>
                                <img src={section.icon} alt={section.title} style={{ width: '50px', marginLeft: '5px' }} />
                                <h5 className={titleClass}>{section.title}</h5>

                            </div>
                        )
                    })}


                </div>

                <div className={`${styles.contentTabs} ${(props.contentScroll ? 'o-scroll' : 'o-hidden')} w-70 `}>
                    {props.sections.map((section, i) => {

                        const tabContentClass = `${toggleState === i ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs} h-100`

                        return (
                            <>
                                {
                                    toggleState === i &&
                                    <div id={section.id} key={i} className={tabContentClass}>
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