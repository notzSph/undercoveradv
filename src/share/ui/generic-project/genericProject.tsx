import Image from "next/image";
import { useLayout } from "../../../hooks/useLayout.hook";
import { GenericProjectProps } from "../../utils/types.utils";
import { GenericButton } from "../generic-button/genericButton";
import styles from './genericProject.module.scss'

export default function GenericProject(props: GenericProjectProps) {

    const { isLargeLayout } = useLayout()

    // Styles
    const genericProjectWrapper = `w-100 h-100 f-column ${isLargeLayout ? 'flex-center-all' : 'j-start a-center'}  `
    const projectInfoWrapper = `w-100 f-row j-between a-center px-5 `
    return (
        <>
            {/* Container */}
            <div id={props.id} className={genericProjectWrapper}>

                <Image id={props.id + props.title + 'image'} src={props.image} alt={props.title} width={440} height={220} className={styles.projectImage}  />

                {/* Infos */}
                <div id={props.id + 'infoWrapper'} className={projectInfoWrapper}>

                    <div className="f-column a-start j-center">
                        <h2 id={props.id + 'projectTitle'} className='pr-3' style={{ textAlign: 'left' }}>{props.title}</h2>
                        <h5 id={props.id + 'category'} style={{ textAlign: 'left' }}>{props.category}</h5>
                    </div>

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

