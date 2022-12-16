import { GenericButton } from '../generic-button/genericButton'
import './popupTopbar.module.scss'

export default function PopupTopbar() {

    return (
        <>
            <div className='w-100 f-row j-between a-center'>
                <div className='w-30 h-100 j-start a-center o-hidden px-5 bg-notWhite'>
                    <img width='35' alt='close_window' className='a-center c-pointer' />
                    <img width='35' alt='white_button' className='a-center c-pointer' />
                    <img width='35' alt='white_button' className='a-center c-pointer' />
                </div>
                    <div className='w-30 f-row j-end a-center py-3'>
                        <div className='pr-5'>logo</div>
                        <div>undercoveradv@gmail.com</div>
                        <GenericButton 
                        label='Contact Us'
                        />
                    </div>
            </div>
        </>
    )
}