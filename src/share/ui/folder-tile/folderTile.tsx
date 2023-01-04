import { FolderTileProps } from "../../utils/types.utils";


// UN CURSOR POINTER NON GLIELO DIAMO A STE POVERE FOLDER? CHE SISTEMA OPERATIVO USI? ahah
export default function FolderTile(props: FolderTileProps) {


    return (
        <>
            {/* Container */}
            <div className="absolute" onClick={props.onClick} style={{
                top: (props.top ? (props.top) : undefined),
                left: (props.left ? (props.left) : undefined),
                ...props.style
            }}>
                <div className="f-column a-center">
                    <img src={props.icon} style={{ width: '80px' }} alt={props.name} className='pb-5' />
                    <span>{props.name}</span>
                </div>
            </div>
        </>
    )
}