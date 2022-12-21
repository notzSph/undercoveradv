import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import GenericPopup from '../../share/ui/generic-popup/genericPopup'
import { undercoverBinLogo } from '../../share/utils/const.utils'
import { PopupState } from '../../share/utils/types.utils'

export default function BinPopup(props: PopupState) {

    // Internationalization
    const i18n = useTranslations('Bin')

    return (
        <>
            <GenericPopup id='Bin' hasSidebar={false} isActive={props.isActive} onClose={props.onClose}
                content={
                    <div className='w-100 h-100 f-column flex-center-all '>
                        <img src={undercoverBinLogo} className='pb-5' style={{ width: '250px' }} />
                        <h2 className='pb-4'>{i18n('claim')}</h2>
                        <p>{i18n('quote')}</p>
                    </div>
                } />
        </>
    )
}

// Internationalization
export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../share/lang/${locale}.json`)).default,
        }
    }
}