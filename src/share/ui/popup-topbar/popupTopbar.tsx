import { GenericButton } from '../generic-button/genericButton';
import { undercoverLogo, windowBtnBlack, windowBtnWhite } from '../../utils/const.utils';
import { goToBlank } from '../../utils/functions.utils';


export default function PopupTopbar() {

    return (
        <>
            {/* Container */}
            <div className='w-100 f-row j-between a-center bg-notWhite px-5'>

                {/* Window Buttons */}
                <div className='w-30 h-100 j-start a-center o-hidden '>
                    <img src={windowBtnBlack} style={{ width: '30px' }} className='a-center c-pointer ' />
                    <img src={windowBtnWhite} style={{ width: '30px' }} className='a-center c-pointer ml-3 ' />
                    <img src={windowBtnWhite} style={{ width: '30px' }} className='a-center c-pointer ml-3 ' />
                </div>

                {/* TODO Add property on interface and assign Popup Name to div */}
                {/* Current Popup Name */}
                <div className='w-40 flex-center-all'></div>


                {/* Contacts */}
                <div className='w-30 f-row j-end a-center p-3'>

                    {/* Logo & Email */}
                    <div className='f-row a-center pr-4'>
                        <img src={undercoverLogo} alt='yo' style={{ width: '50px' }} />
                        <div className='ml-4'>undercoveradv@gmail.com</div>
                    </div>

                    {/* Contact Us Button */}
                    <GenericButton
                        label='Contact Us'
                        isPrimary={true}
                        onClick={() => { goToBlank('https://google.com') }}
                    />
                </div>
            </div>
        </>
    )
}