import { useTranslations } from "next-intl";
import { GenericSectionProps } from "../../utils/types.utils";

export default function GenericSection(props: GenericSectionProps) {
   
    const i18n = useTranslations(props.translateKey);

    return (

        /* Container */
        <section style={props.styles}>
            {/* Title */}
            {
                props.title &&
                <h2>{i18n(props.title)}</h2>
            }

            {/* Children ( Subhead & Description ) */}
            {
                props.children &&
                <div>{props.children}</div>
            }
        </section>
    )
}

