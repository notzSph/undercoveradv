import { GetStaticPropsContext } from 'next';
import { useLayout } from '../../hooks/useLayout.hook';
import GenericPopup from '../../share/ui/generic-popup/genericPopup';
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTab from '../../share/ui/generic-tab/genericTab';
import GenericTile from '../../share/ui/generic-tile/genericTile';
import { cyanFolderIcon, magentaFolderIcon, uxDesTiles, visualDesTiles, webDevTiles, yellowFolderIcon } from '../../share/utils/const.utils';
import { PopupState, TabSections } from '../../share/utils/types.utils';


const sections: TabSections = [
    {
        id: 'uxui',
        title: 'UX/UI Design',
        icon: magentaFolderIcon,
        content: uxDesTiles.map((section, is) => {
            return (
                <GenericSection key={is} translateKey={'Services'} title={section.title}>
                    {
                        section.children.map((tile, it) => {
                            return (
                                <GenericTile translateKey={'Services'} key={it} id='services'
                                    subhead={tile.subhead}
                                    description={tile.description}
                                />
                            )
                        })}
                </GenericSection>
            )
        })

    },
    {
        id: 'visual',
        title: 'Visual Design',
        icon: cyanFolderIcon,
        content: visualDesTiles.map((section, is) => {
            return (
                <GenericSection key={is} translateKey={'Services'} title={section.title}>
                    {
                        section.children.map((tile, it) => {
                            return (
                                <GenericTile translateKey={'Services'} key={it} id='services'
                                    subhead={tile.subhead}
                                    description={tile.description}
                                />
                            )
                        })}
                </GenericSection>
            )
        })

    },
    {
        id: 'dev',
        title: 'Web Development',
        icon: yellowFolderIcon,
        content: webDevTiles.map((section, is) => {
            return (
                <GenericSection key={is} translateKey={'Services'} title={section.title}>
                    {
                        section.children.map((tile, it) => {
                            return (
                                <GenericTile translateKey={'Services'} key={it} id='services'
                                    subhead={tile.subhead}
                                    description={tile.description}
                                />
                            )
                        })}
                </GenericSection>
            )
        })

    },
]

export default function ServicesPopup(props: PopupState) {

    
    const { isLargeLayout, isTablet, isMobile } = useLayout();

    return (
        <>
            <GenericPopup id='Services' hasSidebar={false} isActive={props.isActive} onClose={props.onClose} isFullScreen={false}
                content={
                    <GenericTab menuScroll={true} contentScroll={true}
                    sections={sections}
                    />
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
