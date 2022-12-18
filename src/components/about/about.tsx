import { GenericPopup } from "../../share/ui/generic-popup/genericPopup";
import GenericTile from "../../share/ui/generic-tile/genericTile";
import styles from './about.module.scss'


export default function AboutPopup() {

    return (
        <>
            <GenericPopup id='about' hasSidebar={false} hasScroll={true}
                content={
                    <div className='w-100 f-column flex-center-all'>
                        <h1>Your Partner In Crime Since 2008</h1>
                        <div>"We work with people, we're not just a one night stand"</div>
                        <GenericTile id='aboutContent' isPortfolio={false}
                        subhead={'1. We Believe in human centerd design'}
                        description={'dhjajsha dcjdsjchsjc  jsnvjdhjnsdjncjdsn'}
                        />
                    </div>
                }
            />
        </>
    )
}