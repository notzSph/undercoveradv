import { GenericTileProps } from '../../utils/types.utils';
import styles from './genericTile.module.scss';

export default function GenericTile(props: GenericTileProps) {

    // Styles
    const genericTileWrapper = `${(props.isPortfolio ? 'f-row' : 'f-column')} w-100 o-hidden `

    return (
        <>

            {/* Container */}
            <div id={props.id} className={genericTileWrapper}>

                {/* Subhead */}
                {
                    props.subhead &&
                    <h4 id={props.id + 'subhead'}>{props.subhead}</h4>
                }

                {/* Category (only for portfolioPopup) */}
                {
                    props.category &&
                    <h5 id={props.id + 'category'}>{props.category}</h5>
                }
                
                {/* Description */}
                {
                    props.description &&
                    <p id={props.id + 'description'}>{props.description}</p>
                }
            </div>
        </>
    )
}