import styles from './genericTile.module.scss';

export default function GenericTile(props: {
    id: string;
    title?: string;
    subhead?: string;
    category?: string;
    description?: string;
    isPortfolio: boolean;
    style?: React.CSSProperties | undefined
}) {

    const genericTileWrapper = `${(props.isPortfolio ? 'f-row' : 'f-column')} w-100 o-hidden `

    return (
        <>
            <div id={props.id} className={genericTileWrapper}>
                {
                    props.title &&
                    <h2 id={props.id + 'title'}>
                        {props.title}
                    </h2>
                }
                {
                    props.subhead &&
                    <h4 id={props.id + 'subhead'}>{props.subhead}</h4>
                }
                {
                    props.category &&
                    <h5 id={props.id + 'category'}>{props.category}</h5>
                }
                {
                    props.description &&
                    <p id={props.id + 'description'}>{props.description}</p>
                }
            </div>
        </>
    )
}