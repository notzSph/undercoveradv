import GenericForm from "../../share/ui/generic-form/genericForm";
import GenericPopup from "../../share/ui/generic-popup/genericPopup";
import { PopupState } from "../../share/utils/types.utils";

export default function ContactUsPopup(props: PopupState) {


    return (
        <>
            <GenericPopup id='ContactUs' hasSidebar={false} isActive={props.isActive} onClose={props.onClose} isFullScreen={false} styles={{ alignItems: 'center', justifyContent: 'center' }}
                content={
                    <div className="w-100 flex-center-all h-100">
                        <div className="w-30 h-100 flex-center-all">
                            <GenericForm />
                        </div>
                    </div>
                } />
        </>
    )
}