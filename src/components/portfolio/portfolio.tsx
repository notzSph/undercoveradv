import GenericPopup from '../../share/ui/generic-popup/genericPopup'
import GenericProject from '../../share/ui/generic-project/genericProject'
import GenericTabs from '../../share/ui/generic-tab/genericTab'
import { astense, bank, brodos, campisi, folderIcon, forarts, lymphatic, lymphedema, tf } from '../../share/utils/const.utils'
import { PopupState, TabSections } from '../../share/utils/types.utils'


const sections: TabSections = [
    {
        id: bank.id,
        title: bank.title,
        icon: folderIcon,
        content:<GenericProject  id={bank.id} image={bank.image} title={bank.title} category={bank.category} button={bank.button} />
    },
    {
        id: brodos.id,
        title: brodos.title,
        icon: folderIcon,
        content:<GenericProject  id={brodos.id} image={brodos.image} title={brodos.title} category={brodos.category} button={brodos.button} />
    },
    {
        id: astense.id,
        title: astense.title,
        icon: folderIcon,
        content:<GenericProject  id={astense.id} image={astense.image} title={astense.title} category={astense.category} button={astense.button} />
    },
    {
        id: campisi.id,
        title: campisi.title,
        icon: folderIcon,
        content:<GenericProject  id={campisi.id} image={campisi.image} title={campisi.title} category={campisi.category} button={campisi.button} />
    },
    {
        id: forarts.id,
        title: forarts.title,
        icon: folderIcon,
        content:<GenericProject  id={forarts.id} image={forarts.image} title={forarts.title} category={forarts.category} button={forarts.button} />
    },
    {
        id: lymphatic.id,
        title: lymphatic.title,
        icon: folderIcon,
        content:<GenericProject  id={lymphatic.id} image={lymphatic.image} title={lymphatic.title} category={lymphatic.category} button={lymphatic.button} />
    },
    {
        id: tf.id,
        title: tf.title,
        icon: folderIcon,
        content:<GenericProject  id={tf.id} image={tf.image} title={tf.title} category={tf.category} button={tf.button} />
    },
    {
        id: lymphedema.id,
        title: lymphedema.title,
        icon: folderIcon,
        content:<GenericProject  id={lymphedema.id} image={lymphedema.image} title={lymphedema.title} category={lymphedema.category} button={lymphedema.button} />
    },
    {
        id: brodos.id,
        title: brodos.title,
        icon: folderIcon,
        content:<GenericProject  id={brodos.id} image={brodos.image} title={brodos.title} category={brodos.category} button={brodos.button} />
    },
    {
        id: brodos.id,
        title: brodos.title,
        icon: folderIcon,
        content:<GenericProject  id={brodos.id} image={brodos.image} title={brodos.title} category={brodos.category} button={brodos.button} />
    },
  
]


export default function PortfolioPopup(props: PopupState) {
    return (
        <>
            <GenericPopup id='portfolio' hasSidebar={false} hasScroll={false} isActive={props.isActive} onClose={props.onClose}
                content={
                    <GenericTabs
                    sections={sections}
                    />
                }
            />
        </>
    )
}