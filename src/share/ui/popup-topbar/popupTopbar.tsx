import { GenericButton } from '../generic-button/genericButton';
import { undercoverLogo, windowBtnBlack, windowBtnWhite } from '../../utils/const.utils';
import { goToBlank } from '../../utils/functions.utils';
import { TopbarProps } from '../../utils/types.utils';



export default function PopupTopbar(props: TopbarProps) {

    return (
        <>
            {/* Container */}
            <div className='w-100 f-row j-between a-center b px-5'>

                {/* Window Buttons */}
                <div className='w-50 h-100 j-start a-center o-hidden '>
                    <img src={windowBtnBlack} style={{ width: '30px' }} className='a-center c-pointer ' onClick={props.onClose} />
                    <img src={windowBtnWhite} style={{ width: '30px' }} className='a-center c-pointer ml-3 ' />
                    <img src={windowBtnWhite} style={{ width: '30px' }} className='a-center c-pointer ml-3 ' />
                </div>


                {/* Contacts */}
                <div className='w-50 f-row j-end a-center p-3'>
                <h3 >{props.title.toUpperCase()}</h3>
                </div> 
            </div>
        </>
    )
}