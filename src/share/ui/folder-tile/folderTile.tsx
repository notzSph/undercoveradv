import { FolderTileProps } from "../../utils/types.utils";


export default function FolderTile(props: FolderTileProps) {


    return (
        <>
            {/* Container */}
            <div className="w-100 f-column a-center">
                <img src={props.icon} style={{ width: '60px' }} alt={props.name} className='pb-4'/>
                <h6>{props.name}</h6>
            </div>
        </>
    )
}