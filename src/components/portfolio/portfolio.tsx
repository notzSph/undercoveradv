import GenericPopup from '../../share/ui/generic-popup/genericPopup'
import GenericProject from '../../share/ui/generic-project/genericProject'
import GenericTab from '../../share/ui/generic-tab/genericTab'
import { aici, astense, bank, brodos, campisi, cyanFolderIcon, folderIcon, forarts, greenFolderIcon, lymphatic, lymphedema, magentaFolderIcon, nike, tf, yellowFolderIcon } from '../../share/utils/const.utils'
import { PopupState, TabSections } from '../../share/utils/types.utils'


const sections: TabSections = [
    {
        id: bank.id,
        title: bank.title,
        icon: magentaFolderIcon,
        content:<GenericProject  id={bank.id} image={bank.image} title={bank.title} category={bank.category} button={bank.button} />
    },
    {
        id: brodos.id,
        title: brodos.title,
        icon: greenFolderIcon,
        content:<GenericProject  id={brodos.id} image={brodos.image} title={brodos.title} category={brodos.category} button={brodos.button} />
    },
    {
        id: astense.id,
        title: astense.title,
        icon: yellowFolderIcon,
        content:<GenericProject  id={astense.id} image={astense.image} title={astense.title} category={astense.category} button={astense.button} />
    },
    {
        id: campisi.id,
        title: campisi.title,
        icon: cyanFolderIcon,
        content:<GenericProject  id={campisi.id} image={campisi.image} title={campisi.title} category={campisi.category} button={campisi.button} />
    },
    {
        id: forarts.id,
        title: forarts.title,
        icon: magentaFolderIcon,
        content:<GenericProject  id={forarts.id} image={forarts.image} title={forarts.title} category={forarts.category} button={forarts.button} />
    },
    {
        id: lymphatic.id,
        title: lymphatic.title,
        icon: cyanFolderIcon,
        content:<GenericProject  id={lymphatic.id} image={lymphatic.image} title={lymphatic.title} category={lymphatic.category} button={lymphatic.button} />
    },
    {
        id: tf.id,
        title: tf.title,
        icon: greenFolderIcon,
        content:<GenericProject  id={tf.id} image={tf.image} title={tf.title} category={tf.category} button={tf.button} />
    },
    {
        id: lymphedema.id,
        title: lymphedema.title,
        icon: cyanFolderIcon,
        content:<GenericProject  id={lymphedema.id} image={lymphedema.image} title={lymphedema.title} category={lymphedema.category} button={lymphedema.button} />
    },
    {
        id: nike.id,
        title: nike.title,
        icon: yellowFolderIcon,
        content:<GenericProject  id={nike.id} image={nike.image} title={nike.title} category={nike.category} button={nike.button} />
    },
    {
        id: aici.id,
        title: aici.title,
        icon: magentaFolderIcon,
        content:<GenericProject  id={aici.id} image={aici.image} title={aici.title} category={aici.category} button={aici.button} />
    },
  
]


export default function PortfolioPopup(props: PopupState) {
    return (
        <>
            <GenericPopup id='Portfolio' hasSidebar={false}  isActive={props.isActive} onClose={props.onClose} isFullScreen={false}
                content={
                    <GenericTab menuScroll={true} contentScroll={false}
                    sections={sections}
                    />
                }
            />
        </>
    )
}