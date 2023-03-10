import { useTranslations } from 'next-intl';
import { GenericTileProps } from '../../utils/types.utils';

export default function GenericTile(props: GenericTileProps) {

    const i18n = useTranslations(props.translateKey);


    // Styles
    const genericTileWrapper = `w-100 f-column relative o-hidden `

    return (
        <>

            {/* Container */}
            <div id={props.id} className={genericTileWrapper}>

                {/* Subhead */}
                {
                    props.subhead &&
                    <h4 className='tileSubhead pb-4' id={props.id + 'subhead'}>{i18n(props.subhead)}</h4>
                }

                {/* Description */}
                {
                    props.description &&
                    <p id={props.id + 'description'} className='pb-4'>{i18n(props.description)}</p>
                }
            </div>
        </>
    )
}

