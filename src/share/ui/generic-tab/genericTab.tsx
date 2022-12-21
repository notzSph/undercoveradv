import { useState } from "react";
import { GenericTabsProps as GenericTabsProps } from "../../utils/types.utils";
import styles from "./genericTab.module.scss";

export default function GenericTabs(props: GenericTabsProps) {

    const [toggleState, toggleTab] = useState(0);


    return (
        <>
            <div className="container w-100 f-row j-center">
                <div className="blocTabs w-30">
                    {props.sections.map((section, i) => {

                        const tabClass = `${toggleState === i ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs} f-row a-center`

                        return (
                            <div id={section.id} key={i}
                                className={tabClass}
                                onClick={() => toggleTab(i)}>
                                <img src={section.icon} alt={section.title} style={{ width: '50px', marginLeft: '5px' }} />
                                <h4 className="ml-4">{section.title}</h4>

                            </div>
                        )
                    })}


                </div>

                <div className={`${styles.contentTabs} w-70`}>
                    {props.sections.map((section, i) => {

                        const tabContentClass = `${toggleState === i ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}`

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