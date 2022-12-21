import GenericPopup from '../../share/ui/generic-popup/genericPopup'
import GenericProject from '../../share/ui/generic-project/genericProject'
import { brodosProject } from '../../share/utils/const.utils'
import { PopupStateProps } from '../../share/utils/types.utils'

export default function PortfolioPopup(props: PopupStateProps) {
    return (
        <>
            <GenericPopup id='portfolio' hasSidebar={true} hasScroll={false} isActive={props.isActive} onClose={props.onClose}
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