import { GenericButton } from '../generic-button/genericButton';
import { undercoverLogo } from '../../utils/const.utils';


export default function PopupTopbar() {

    return (
        <>
            <div className='w-100 f-row j-between a-center bg-notWhite px-5'>
                <div className='w-30 h-100 j-start a-center o-hidden  px-5 '>
                    <i style={{ fontSize: '20px' }} className='undr-btn-black a-center c-pointer '></i>
                    <i style={{ fontSize: '20px' }} className='undr-btn-white a-center c-pointer '></i>
                    <i style={{ fontSize: '20px' }} className='undr-btn-white a-center c-pointer '></i>
                </div>
                <div className='w-40 flex-center-all'></div>
                <div className='w-30 f-row j-end a-center p-3'>
                    <div className='f-row a-center pr-4'>
                        <img src={undercoverLogo} alt='yo' style={{ width: '50px' }} />
                    <div className='ml-4'>undercoveradv@gmail.com</div>
                    </div>
                    <GenericButton
                        label='Contact Us'
                        isPrimary={true}
                    />
                </div>
            </div>
        </>
    )
}