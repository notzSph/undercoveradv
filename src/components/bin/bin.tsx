import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useLayout } from '../../hooks/useLayout.hook'
import GenericPopup from '../../share/ui/generic-popup/genericPopup'
import { undercoverBinLogo } from '../../share/utils/const.utils'
import { PopupState } from '../../share/utils/types.utils'
import styles from './bin.module.scss'

export default function BinPopup(props: PopupState) {

    const { isLargeLayout, isMobile } = useLayout()

    // Internationalization
    const i18n = useTranslations('Bin')
    const claimClass = `${styles.binClaim} pb-4 `
    const quoteClass = `${styles.binQuote} `

    return (
        <>
            <GenericPopup id='Bin' hasSidebar={false} isActive={props.isActive} onClose={props.onClose} isFullScreen={false}
                content={
                    <div className='w-100 h-100 f-column flex-center-all ' >
                        <Image src={undercoverBinLogo} alt='undercover-logo-bin' width={256} height={213} className='pb-5' />
                        <h2 className={claimClass}>{i18n('claim')}</h2>
                        <h4 className={quoteClass}>{i18n('quote')}</h4>
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