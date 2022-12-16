import React from 'react';
import './genericButton.module.scss';

export function GenericButton(props: {
    buttonPosition?: ('LEFT' | 'CENTER' | 'RIGHT'),
    label: string,
    marginTop?: string,
    width?: string,
    fontSize?: string,
    isPrimary?: boolean,
    style?: React.CSSProperties | undefined
    onClick: () => void,
}) {

    // Main Container Class
    const mainClass = 'generic-btn flex-center-all relative unselect-undrag c-pointer '
    + (props.isPrimary? 'primary-btn ' : 'secondary-btn ');

    return (
        <div
            onClick={props.onClick}
            className={mainClass}
            aria-label={props.label}
            style={{
                marginTop: (props.marginTop ? props.marginTop : undefined),
                fontSize: (props.fontSize ? props.fontSize : undefined),
                ...props.style
            }}>
            <div className="w-100 j-center relative unselect-undrag">
                <div className="generic-button-text unselect-undrag">
                    {/* TODO Pass Formatted Message */}
                    {props.label}
                </div>
            </div>
        </div>
    )
}