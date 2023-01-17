import Image from "next/image";
import { useLayout } from "../../../hooks/useLayout.hook";
import { GenericProjectProps } from "../../utils/types.utils";
import { GenericButton } from "../generic-button/genericButton";

export default function GenericProject(props: GenericProjectProps) {

    const { isLargeLayout, isTablet, isMobile } = useLayout()

    // Styles
    const genericProjectWrapper = `w-100 h-100 f-column ${isMobile? 'flex-center-all' : 'j-start a-center'} `
    const projectInfoWrapper = `w-100 f-row j-between a-center px-5 `
    const imageWrapper = `px-5 `
    return (
        <>
            {/* Container */}
            <div id={props.id} className={genericProjectWrapper}>
                <div className={imageWrapper}>
                    <Image id={props.id + props.title + 'image'} src={props.image} alt={props.title} width={isLargeLayout ? 604 : (isTablet ? 420 : 320)} height={isLargeLayout ? 400 : (isTablet ? 278 : 211)} />
                </div>
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

