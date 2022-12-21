import { GetStaticPropsContext } from 'next';
import GenericPopup from '../../share/ui/generic-popup/genericPopup';
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTabs from '../../share/ui/generic-tab/genericTab';
import GenericTile from '../../share/ui/generic-tile/genericTile';
import { folderIcon, uxDesTiles, visualDesTiles, webDevTiles } from '../../share/utils/const.utils';
import { PopupState, TabSections } from '../../share/utils/types.utils';
import styles from './services.module.scss';


const sections: TabSections = [
    {
        id: 'uxui',
        title: 'UX/UI Design',
        icon: folderIcon,
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
        icon: folderIcon,
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
        icon: folderIcon,
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


    return (
        <>
            <GenericPopup id='Services' hasSidebar={false} isActive={props.isActive} onClose={props.onClose}
                content={
                    <GenericTabs menuScroll={false} contentScroll={true}
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
