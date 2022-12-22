import { GenericProjectProps } from "../../utils/types.utils";
import { GenericButton } from "../generic-button/genericButton";
import styles from './genericProject.module.scss'

export default function GenericProject(props: GenericProjectProps) {

  
    // Styles
    const genericProjectWrapper = `w-100 h-100 f-column flex-center-all `
    const projectInfoWrapper = `w-100 f-row j-between a-center px-5 `
    return (
        <>
            {/* Container */}
            <div id={props.id} className={genericProjectWrapper}>

                <img id={props.id + props.title + 'image'} src={props.image} alt={props.title} className={styles.projectImage} style={{ width: '60%' }} />

                {/* Infos */}
                <div id={props.id + 'infoWrapper'} className={projectInfoWrapper}>

                    <h2 id={props.id + 'projectTitle'} className='pr-3'>{props.title}</h2>

                    <h5 id={props.id + 'category'} style={{ textAlign: 'center' }}>{props.category}</h5>

                    <GenericButton
                        label={props.button.label}
                        isPrimary={props.button.isPrimary}
                        onClick={props.button.onClick}
                    />
                </div>

            </div>

        </>
    )

}

