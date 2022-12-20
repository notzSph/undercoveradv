import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'use-intl'
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTile from "../../share/ui/generic-tile/genericTile";
import { aboutTiles } from '../../share/utils/const.utils';
import styles from './about.module.scss'

export default function AboutPopup() {

    // Internationalization
    const i18n = useTranslations('About');

    return (
        <>
            <GenericPopup id='about' hasSidebar={false} hasScroll={true} isActive={false}
                content={
                    <div className='w-100 f-column flex-center-all'>
                        <h1>{i18n('title')}</h1>
                        <div>"We work with people, we're not just a one night stand"</div>
                        {
                            aboutTiles.map((section, is) => {
                                return (
                                    <GenericSection key={is}>
                                        {
                                            section.children.map((tile, it) => {
                                                return (
                                                    <GenericTile key={it} id='about'
                                                        subhead={i18n(tile.subhead)}
                                                        description={i18n(tile.description)}
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