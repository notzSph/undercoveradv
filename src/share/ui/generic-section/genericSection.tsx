import { GenericSectionProps } from "../../utils/types.utils";

export default function GenericSection(props: GenericSectionProps) {
    return (
        
        /* Container */
        <section style={props.styles}>
            {/* Title */}
            {
                props.title &&
                <h2>{props.title}</h2>
            }

            {/* Children ( Subhead & Description ) */}
            {
                props.children &&
                <div>{props.children}</div>
            }
        </section>
    )
}