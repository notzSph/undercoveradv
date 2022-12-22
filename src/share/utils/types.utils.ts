import { ReactNode } from "react";

/**
 *  Generic Popup Props
 *  
 *  Generic Popup Interface
 *  @param id ---> id ( e.g. Services )
 *  @param hasSidebar ---> Flag for sidebar management  ( e.g. Services = True )
 *  @param isActive ---> Flag for visibility management ( e.g. Services = True )
 *  @param sidebar ---> Sidebar Component ( e.g. Tabs with Services )
 *  @param content ---> Content Component ( e.g. Active Service Tab Content )
 *  @param styles ---> Inline styles management (Optional)
 *  
 */

export interface GenericPopupProps {
    id: string,
    hasSidebar: boolean,
    hasScroll?: boolean,
    isActive?: boolean,
    sidebar?: any,
    content?: any,
    buttons?: any,
    styles?: React.CSSProperties | undefined
    onClose?: () => void
}


/**
 *  Generic Button Props
 *  
 *  Generic Button Interface
 *  @param label ---> Button label (e.g. Contact Us )
 *  @param isPrimary ---> Flag for button variation management  (e.g. Primary = Cyan )
 *  @param styles ---> Inline styles management (Optional)
 *  @param onClick ---> onClick Function (e.g. { goToBlank('https://undercoveradv.com') })
 *  
 */

export interface GenericButtonProps {
    label: string,
    isPrimary?: boolean,
    styles?: React.CSSProperties | undefined,
    onClick?: () => void
}


/**
 *  Generic Section Props
 *  
 *  Generic Section Interface
 *  @param title ---> Service Title (e.g. Website & WebApp Design )
 *  @param translateKey ---> Current Component Name for i18n (e.g. Services)
 *  @param children ---> List of Subheads & Descriptions
 *  @param styles ---> Inline styles management (Optional)
 *  
 */

export interface GenericSectionProps  {
    translateKey: string,
    title?: string,
    children: ReactNode | ReactNode[],
    styles?: React.CSSProperties
}

 
 /**  Generic Tile Props
 *  
 *  Tile with Content's Subheads and Descriptions
 *  @param id ---> id ( e.g. Services )
 *  @param translateKey ---> Current Component Name for i18n (e.g. Services)
 *  @param subhead ---> FAQ (e.g. Why Do I Need a Website? )
 *  @param descritpion ---> Answer (e.g. You need a website because it's cool )
 *  @param styles ---> Inline styles management (Optional)
 *  
 */

export interface GenericTileProps {
    id: string,
    translateKey: string,
    subhead?: string,
    description?: string,
    styles?: React.CSSProperties | undefined
}


/**  Generic Project Props
*  
*  Generic Project Interface
*  @param image ---> image url
*  @param title ---> Project Name ( e.g. UndercoverADV )
*  @param category ---> Project Category ( e.g. UX / UI Development )
*  @param button ---> Generic Button ( e.g Visit Website ) 
*  
*/

export interface GenericProjectProps {
    id: string,
    image: string,
    title: string,
    category: string,
    button: GenericButtonProps;
}



/**  Folder Tile Props
*  
*  Folder Tile Interface
*  @param id ---> id ( e.g. System )
*  @param icon ---> Folder Icon Url
*  @param name ---> Folder Name ( e.g. System )
*  @param styles ---> Inline styles management (Optional)
*  
*/

export interface FolderTileProps {
    id: number,
    icon: string,
    name: string,
    styles?: React.CSSProperties | undefined
    onClick?: () => void
}

/**  Generic Tab Props
*  
*  Generic Tab Interface
*  @param menuScroll ---> Flag for Tab Menu scroll management ( e.g. Services = True )
*  @param contentScroll ---> Flag for Tab Content scroll management ( e.g. Services = True )
*  @param sections ---> List of Subheads & Descriptions
*  
*/

export interface GenericTabsProps {
    menuScroll: boolean,
    contentScroll: boolean,
    sections: TabSections,
}

/**  Tab Section
*  
*  Tab Section Interface
*  @param id ---> id ( e.g. UX/UI Dev )
*  @param title ---> Tab Name ( e.g. System )
*  @param icon ---> Tab Menù Icon Url
*  @param content ---> Tab Content
*  @param styles ---> Inline styles management (Optional)
*  
*/
export interface TabSection {
    id: string,
    title: string,
    icon: string,
    content: ReactNode | ReactNode[],
    styles?: React.CSSProperties | undefined
}

export type TabSections = TabSection[]


/**  Popup State
*  
*  Popup State Animation Manager
*  @param isActive ---> Open Popup Style
*  @param onClose ---> Popup Close Animation
*  
*/
export interface PopupState {
    isActive: boolean;
    onClose?: () => void;
}

export interface TopbarProps {
    title: string;
    onClose?: () => void
}