import React from 'react';
import styles from './genericButton.module.scss';

export function GenericButton(props: {
    label: string,
    isPrimary?: boolean,
    style?: React.CSSProperties | undefined
    onClick?: () => void,
}) {

    // Main Container Class
    const mainClass = `${styles.genericBtn} ${(props.isPrimary? styles.primaryBtn : styles.secondaryBtn)} flex-center-all relative unselect-undrag c-pointer `;

    return (
        <div
            onClick={props.onClick}
            className={mainClass}
            aria-label={props.label}
            style={{
                ...props.style
            }}>
            <div className="w-100 j-center">
                <div className="generic-button-text">
                    {props.label}
                </div>
            </div>
        </div>
    )
}