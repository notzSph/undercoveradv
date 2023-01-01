import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useLayout } from "../../hooks/useLayout.hook";
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import { undercoverLogo } from "../../share/utils/const.utils";
import { PopupState } from "../../share/utils/types.utils";
import styles from './system.module.scss';


export default function SystemPopup(props: PopupState) {

    const { isLargeLayout } = useLayout()
    // Internationalization
    const i18n = useTranslations('System')

    return (
        <>
            <GenericPopup id="System" hasSidebar={true} isActive={props.isActive} onClose={props.onClose} isFullScreen={false} isSystem={true}
                sidebar={
                    <div className='w-100 f-column flex-center-all ' style={{ height: isLargeLayout ? '600px' : '' }}>
                        <img src={undercoverLogo} alt='undrcvr_logo' className={`${styles.systemLogo} pb-5`} />
                        <h2 className='pb-5'>UndercoverADV</h2>
                        <h4 className='pb-4'>Your Parnter in Crime</h4>
                        <h6>Since 2008</h6>
                    </div>
                }
                content={
                    <div className="f-column a-start pl-2">

                        <h1 className='pb-4' style={{fontSize: isLargeLayout? '' : '1.44rem'}}>{i18n('brand')}</h1>
                        <h3 className='pb-5'>{i18n('version')}</h3>
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