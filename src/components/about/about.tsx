import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'use-intl'
import { useLayout } from '../../hooks/useLayout.hook';
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTile from "../../share/ui/generic-tile/genericTile";
import { aboutTiles } from '../../share/utils/const.utils';
import { PopupState } from '../../share/utils/types.utils';
import styles from './about.module.scss'



export default function AboutPopup(props: PopupState) {

    const { isLargeLayout, isTablet, isMobile } = useLayout();


const aboutWrapperClass = `w-100 f-column flex-center-all ${(isLargeLayout ? 'p-5' :'p-3')} `
    return (
        <>
            <GenericPopup id='About' hasSidebar={false} hasScroll={true} isActive={props.isActive} onClose={props.onClose} isFullScreen={true}
                content={
                    <div className={aboutWrapperClass}>
                        <h1 className='pt-5 pb-4' style={{textAlign: 'center'}}>Your Partner in Crime since 2008</h1>
                        <div className={`${styles.claim} pb-5`}>"We work with people, we're not just a one night stand"</div>
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
                                })
                            }
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