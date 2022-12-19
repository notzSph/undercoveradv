import { GenericProjectProps } from "../../utils/types.utils";
import { GenericButton } from "../generic-button/genericButton";
import styles from './genericProject.module.scss'
export default function GenericProject(props: GenericProjectProps) {

    // Styles
    const genericProjectWrapper = `w-100 h-100 f-column j-between a-center `
    const projectInfoWrapper = `w-100 f-row j-between a-center px-5 `

    return (
        <>
            {/* Container */}
            <div id={props.id} className={genericProjectWrapper}>

                <img id={props.id + props.title + 'image'} src={props.image} alt={props.title} className={styles.projectImage} style={{height:'80%'}}/>

                {/* Infos */}
                <div id={props.id + 'infoWrapper'} className={projectInfoWrapper} style={{height:'20%'}}>

                    <h2 id={props.id + 'projectTitle'}>{props.title}</h2>

                    <h5 id={props.id + 'category'}>{props.category}</h5>

                    <GenericButton
                        label={props.button.label}
                        isPrimary={props.button.isPrimary}
                    />
                </div>

            </div>

        </>
    )

}
