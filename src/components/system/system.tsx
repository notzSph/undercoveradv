import { GenericPopup } from "../../share/ui/generic-popup/genericPopup";

export default function SystemPopup() {
    return (
        <>
        <GenericPopup id="System" hasScroll={true} hasSidebar={true}
            topBar={
                <div className="w-100 bg-notWhite">
                </div>
            }
            
            />
        </>
    )
}