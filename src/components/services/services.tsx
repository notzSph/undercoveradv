import { GenericPopup } from '../../share/ui/generic-popup/genericPopup';
import GenericSection from '../../share/ui/generic-section/genericSection';
import GenericTile from '../../share/ui/generic-tile/genericTile';
import { servicesTiles } from '../../share/utils/const.utils';
import styles from './services.module.scss';


export default function ServicesPopup() {
    return (
        <>
            <GenericPopup id='services' hasSidebar={true} hasScroll={true}
                sidebar={
                    <div>ginni ginni</div>
                }
                content={
                    servicesTiles.map((section, is) => {
                        return (
                            <GenericSection key={is} title={section.title}>
                                {
                                    section.children.map((tile, it) => {
                                        return (
                                            <GenericTile key={it} id='services' isPortfolio={false}
                                                subhead={tile.subhead}
                                                description={tile.description}
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