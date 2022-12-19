import { GenericTileProps } from '../../utils/types.utils';

export default function GenericTile(props: GenericTileProps) {

    // Styles
    const genericTileWrapper = `w-100 f-column o-hidden `

    return (
        <>

            {/* Container */}
            <div id={props.id} className={genericTileWrapper}>

                {/* Subhead */}
                {
                    props.subhead &&
                    <h4 id={props.id + 'subhead'}>{props.subhead}</h4>
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