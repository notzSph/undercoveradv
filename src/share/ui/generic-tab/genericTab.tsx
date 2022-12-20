import { useState } from "react";
import styles from "./genericTab.module.scss";

export default function GenericTab() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
        console.log(index);
    };

    return (
        <>
            <div className="container">
                <div className="blocTabs">
                    <div
                        className={toggleState === 1 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
                        onClick={() => toggleTab(1)}
                    >
                        Dio
                    </div>
                    <div
                        className={toggleState === 2 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
                        onClick={() => toggleTab(2)}
                    >
                        La Madonna
                    </div>
                    <div
                        className={toggleState === 3 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
                        onClick={() => toggleTab(3)}
                    >
                        Jesoo
                    </div>
                </div>


                <div className="contentTabs">
                    <div
                        className={toggleState === 1 ? `${styles.content} ${styles.activeContent}` : styles.content}
                    >
                        <h2>Dio Content</h2>
                        <hr />
                        <p>
                            Dio il grandissimo porco di dio
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? `${styles.content} ${styles.activeContent}` : styles.content}
                        >
                        <h2>La Madonna Content</h2>
                        <hr />
                        <p>
                        La madonna grandissima porca di dio
                        </p>
                    </div>

                    <div
                        className={toggleState === 3 ? `${styles.content} ${styles.activeContent}` : styles.content}
                        >
                        <h2>Jesoo Content</h2>
                        <hr />
                        <p>
                       Jesoo grandissimo porco di dio
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}