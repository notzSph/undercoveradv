import Image from 'next/image';
import { windowBtnGreen, windowBtnRed, windowBtnYellow } from '../../utils/const.utils';
import { TopbarProps } from '../../utils/types.utils';



export default function PopupTopbar(props: TopbarProps) {

  
    

    return (
        <>
            {/* Container */}
            <div className='w-100 f-row j-between a-center b px-5'>

                {/* Window Buttons */}
                <div className='w-50 h-100 j-start a-center o-hidden '>
                    <Image src={windowBtnRed} alt={props.title} width={32} height={32} className='a-center c-pointer ' onClick={props.onClose} />
                    <Image src={windowBtnYellow} alt={props.title} width={32} height={32} className='a-center c-pointer ml-3 ' onClick={props.onClose} />
                    <Image src={windowBtnGreen} alt={props.title} width={32} height={32} className='a-center c-pointer ml-3 ' onClick={props.onFullscreen}/>
                </div>


                {/* Contacts */}
                <div className='w-50 f-row j-end a-center p-3'>
                <h3 >{props.title.toUpperCase()}</h3>
                </div> 
            </div>
        </>
    )
}