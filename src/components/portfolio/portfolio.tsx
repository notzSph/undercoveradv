import GenericPopup  from '../../share/ui/generic-popup/genericPopup'
import styles from './portfolio.module.scss'

export default function PortfolioPopup() {
    return (
        <>
            <GenericPopup id='portfolio' hasSidebar={true} hasScroll={false} isActive={true}
                sidebar={
                    <div>
                        Minchia zio
                    </div>
                }
                content={
                    <h1>Scazza minchia ueue</h1>
                }
            />
        </>
    )
}