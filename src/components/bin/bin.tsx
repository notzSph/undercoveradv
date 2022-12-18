import { GenericPopup } from '../../share/ui/generic-popup/genericPopup'
import { undercoverBinLogo } from '../../share/utils/const.utils'
import styles from './bin.module.scss'

export default function BinPopup() {
return(
<>
<GenericPopup id='bin' hasSidebar={false} hasScroll={false} 
content={
<div className='w-100 h-100 f-column flex-center-all '>
    <img src={undercoverBinLogo} className='pb-5' />
    <h2 className='pb-4'>Trash Bin is Empty</h2>
    <p>Be honest, would you choose a partner that falls for the old bin trick?</p>
</div>
} />
</>
)
}