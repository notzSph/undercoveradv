import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'use-intl'
import  GenericPopup  from '../../share/ui/generic-popup/genericPopup';
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTile from '../../share/ui/generic-tile/genericTile';
import { servicesTiles } from '../../share/utils/const.utils';
import styles from './services.module.scss';




export default function ServicesPopup() {
    
    // Internationalization
    const i18n = useTranslations('Services');
    
    return (
        <>
            <GenericPopup id='services' hasSidebar={true} hasScroll={true} isActive= {true}
                sidebar={
                    <div>WEWE</div>
                }
                content={
                    servicesTiles.map((section, is) => {
                        return (
                            <GenericSection key={is} title={i18n(section.title)}>
                                {
                                    section.children.map((tile, it) => {
                                        return (
                                            <GenericTile key={it} id='services'
                                               subhead={i18n(tile.subhead)}
                                                description={i18n(tile.description)}
                                            />
                                        )
                                    })}
                            </GenericSection>
                        )
                    })
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
    };
}