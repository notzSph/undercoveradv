import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useLayout } from "../../hooks/useLayout.hook";
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import { undercoverLogo } from "../../share/utils/const.utils";
import { PopupState } from "../../share/utils/types.utils";


export default function SystemPopup(props: PopupState) {

    const { isLargeLayout, isMobile } = useLayout()
    // Internationalization
    const i18n = useTranslations('System')

    const systemContentWrapperClass = `f-column ${(isMobile ? 'a-center j-start' : 'a-start')} pl-2`
    const systemSidebarWrapperClass = `w-100 f-column ${(isMobile ? 'pt-5 j-start a-center' : 'flex-center-all')} `

    return (
        <>
            <GenericPopup id="System" hasSidebar={true} isActive={props.isActive} onClose={props.onClose} isFullScreen={false} isSystem={true}
                sidebar={
                    <div className={systemSidebarWrapperClass} style={{ height: isLargeLayout ? '600px' : '' }}>
                        <Image src={undercoverLogo} alt='undrcvr_logo' width={200} height={175} className={`${(isMobile ? 'pb-3' : 'pb-5')}`} />
                        <h2 className={(isMobile ? 'pb-3' : 'pb-5')}>UndercoverADV</h2>

                        <h4 className={(isMobile ? 'pb-2' : 'pb-4')} style={{ fontWeight: isMobile ? '500' : '' }}>Your Parnter in Crime</h4>
                        <h6 className={(isMobile ? 'pb-4' : '')} style={{ fontWeight: isMobile ? '500' : '' }}>Since 2008</h6>
                    </div>
                }
                content={
                    <div className={systemContentWrapperClass}>
                        <>
                            {
                                !isMobile &&
                                <h1 className={(isMobile ? 'pb-2' : 'pb-4')} style={{ fontSize: (isMobile ? '1.2rem' : (isLargeLayout ? '' : '1.44rem')) }}>{i18n('brand')}</h1>
                            }
                        </>
                        <h3 className={(isMobile ? 'pb-4' : 'pb-5')}>{i18n('version')}</h3>
                        <ul className='ml-5'>
                            <li className='pb-4' dangerouslySetInnerHTML={{ __html: i18n.raw('release') }} />
                            <li className='pb-4' dangerouslySetInnerHTML={{ __html: i18n.raw('location') }} />
                            <li className='pb-4' dangerouslySetInnerHTML={{ __html: i18n.raw('expertise') }} />
                            <li dangerouslySetInnerHTML={{ __html: i18n.raw('coreValue') }} />
                        </ul>
                    </div>
                }

            />
        </>
    )
}

// Internationalization
export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../share/lang/${locale}.json`)).default
        }
    }
}