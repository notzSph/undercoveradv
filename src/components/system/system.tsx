import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import { undercoverLogo } from "../../share/utils/const.utils";
import { PopupStateProps } from "../../share/utils/types.utils";
import styles from './system.module.scss';


export default function SystemPopup(props: PopupStateProps) {


    // Internationalization
    const i18n = useTranslations('System')

    return (
        <>
            <GenericPopup id="system" hasScroll={true} hasSidebar={true} isActive={props.isActive} onClose={props.onClose}
                sidebar={
                    <div className='w-100 f-column flex-center-all ' style={{ height: '600px' }}>
                        <img src={undercoverLogo} alt='undrcvr_logo' className={`${styles.systemLogo} pb-5`} />
                        <h2 className='pb-5'>UndercoverADV</h2>
                        <h4 className='pb-4'>Your Parnter in Crime</h4>
                        <h6>Since 2008</h6>
                    </div>
                }
                content={
                    <>
                        <h1>{i18n('brand')}</h1>
                        <h3>{i18n('version')}</h3>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: i18n.raw('release') }} />
                            <li dangerouslySetInnerHTML={{ __html: i18n.raw('location') }} />
                            <li dangerouslySetInnerHTML={{ __html: i18n.raw('expertise') }} />
                            <li dangerouslySetInnerHTML={{ __html: i18n.raw('coreValue') }} />
                        </ul>
                    </>
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