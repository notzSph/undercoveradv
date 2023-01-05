import Image from "next/image";
import { useLayout } from "../../hooks/useLayout.hook";
import GenericForm from "../../share/ui/generic-form/genericForm";
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import { undercoverLogo } from "../../share/utils/const.utils";
import { PopupState } from "../../share/utils/types.utils";
import styles from './contactUs.module.scss'
export default function ContactUsPopup(props: PopupState) {

    const { isLargeLayout, isMobile } = useLayout()
    const systemSidebarWrapperClass = `w-100 f-column ${(isMobile ? 'pt-4 j-start a-center' : 'flex-center-all')} `
    const sidebarTitleClass = `${styles.sidebarTitle} ${(isMobile ? 'pb-3' : 'pb-5')}`
    return (
        <>
            <GenericPopup id='Contact Us' hasSidebar={true} isActive={props.isActive} onClose={props.onClose} isFullScreen={false} styles={{ alignItems: 'center', justifyContent: 'center' }}

                sidebar={
                    !isMobile &&
                    < div className={systemSidebarWrapperClass} style={{ height: isLargeLayout ? '600px' : '' }}>
                        <Image src={undercoverLogo} alt='undrcvr_logo' width={isMobile ? 192 : 256} height={isMobile ? 160 : 213} className={`${(isMobile ? 'pb-3' : 'pb-5')}`} />
                        <h2 className={sidebarTitleClass}>Have a Request?</h2>

                        <h3 className={(isMobile ? 'pb-2' : 'pb-4')} style={{ fontWeight: isMobile ? '500' : '' }}>Contact Us</h3>
                        <h4 className={(isMobile ? 'pb-3' : '')} style={{ fontWeight: isMobile ? '500' : '', textAlign: "center" }}>We are here for you!</h4>
                    </div>
                }
                content={
                    <div className="w-100  flex-center-all h-100">
                        <div className="w-40 h-100 f-column flex-center-all ">
                            <GenericForm />
                        </div>
                    </div>
                } />
        </>
    )
}