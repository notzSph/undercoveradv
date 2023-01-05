import { GenericButtonProps } from '../../utils/types.utils';
import styles from './genericButton.module.scss';

export function GenericButton(props: GenericButtonProps) {

    // Styles
    const mainClass = `${styles.genericBtn} ${(props.isPrimary ? styles.primaryBtn : styles.secondaryBtn)} flex-center-all relative unselect-undrag c-pointer `;

    return (

        // Container

        <button
            type={props.type}
            onClick={props.onClick}
            className={mainClass}
            aria-label={props.label}
            style={{
                ...props.styles
            }}>

            {/* Label */}
            <div className="w-100 j-center">
                {props.label}
            </div>
        </button>
    )
}