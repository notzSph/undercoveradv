import GenericPopup from '../../share/ui/generic-popup/genericPopup'
import GenericProject from '../../share/ui/generic-project/genericProject'
import { brodosProject } from '../../share/utils/const.utils'

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
                    <GenericProject id='brodos'
                        image={brodosProject}
                        title={'Brodos'}
                        category={'web development'}
                        button={{
                            label: 'Visit Website',
                            isPrimary: true
                        }} />
                }
            />
        </>
    )
}