import { useTranslations } from "next-intl";
import { useLayout } from "../../../hooks/useLayout.hook";
import { GenericSectionProps } from "../../utils/types.utils";

export default function GenericSection(props: GenericSectionProps) {

    const { isLargeLayout, isTablet, isMobile } = useLayout();

    const i18n = useTranslations(props.translateKey);

    const sectionContainerClass = `${(isLargeLayout ? 'p-5' : 'p-3')}`


    return (

        /* Container */
        <section className={sectionContainerClass} style={props.styles}>
            {/* Title */}
            {
                props.title &&
                <h1 className='pb-5' style={{fontSize: isMobile ? '1.4rem' : ''}}>{i18n(props.title)}</h1>
            }

            {/* Children ( Subhead & Description ) */}
            {
                props.children &&
                <div>{props.children}</div>
            }
        </section>
    )
}

