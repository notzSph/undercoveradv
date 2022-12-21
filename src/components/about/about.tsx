import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'use-intl'
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTile from "../../share/ui/generic-tile/genericTile";
import { aboutTiles } from '../../share/utils/const.utils';
import { PopupStateProps } from '../../share/utils/types.utils';
import styles from './about.module.scss'



export default function AboutPopup(props: PopupStateProps ) {


    return (
        <>
            <GenericPopup id='about' hasSidebar={false} hasScroll={true} isActive={props.isActive} onClose={props.onClose}
                content={
                    <div className='w-100 f-column flex-center-all'>
                        <h1>Your Partner in Crime since 2008</h1>
                        <div>"We work with people, we're not just a one night stand"</div>
                        {
                            aboutTiles.map((section, is) => {
                                return (
                                    <GenericSection translateKey='About' key={is}>
                                        {
                                            section.children.map((tile, it) => {
                                                return (
                                                    <GenericTile translateKey='About' key={it} id='about'
                                                        subhead={tile.subhead}
                                                        description={tile.description}
                                                    />
                                                )
                                            })}
                                    </GenericSection>
                                )
                            })}
                    </div>
                }
            />

        </>
    )
}

// Internationalization
export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../share/lang/${locale}.json`)).default,
        }
    }
}