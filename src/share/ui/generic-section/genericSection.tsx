import { useTranslations } from "next-intl";
import { GenericSectionProps } from "../../utils/types.utils";

export default function GenericSection(props: GenericSectionProps) {
   
    const i18n = useTranslations(props.translateKey);

    return (

        /* Container */
        <section className='p-5' style={props.styles}>
            {/* Title */}
            {
                props.title &&
                <h1 className='pb-5'>{i18n(props.title)}</h1>
            }

            {/* Children ( Subhead & Description ) */}
            {
                props.children &&
                <div>{props.children}</div>
            }
        </section>
    )
}

