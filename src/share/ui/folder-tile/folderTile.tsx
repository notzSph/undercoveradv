import Image from "next/image";
import { FolderTileProps } from "../../utils/types.utils";


export default function FolderTile(props: FolderTileProps) {

    const containerClass = 'absolute f-column a-center c-pointer'

    return (
        <>
            {/* Container */}
            <div className={containerClass} onClick={props.onClick} style={{
                top: (props.top ? (props.top) : undefined),
                left: (props.left ? (props.left) : undefined),
                ...props.style
            }}>
                <Image src={props.icon} alt={props.name} width={90} height={90} className='pb-5' />
                <span>{props.name}</span>
            </div>
        </>
    )
}