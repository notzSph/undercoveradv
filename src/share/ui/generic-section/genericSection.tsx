import { ReactNode } from "react";

export default function GenericSection(
    props: {
        title: string;
        children: ReactNode | ReactNode[];
        styles?: React.CSSProperties;
    }
) {
    return (
        <section style={props.styles}>
            <h2>{props.title}</h2>
            {
                props.children &&
                <div>{props.children}</div>
            }
        </section>
    )
}