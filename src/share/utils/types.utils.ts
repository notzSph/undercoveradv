import { ReactNode } from "react";

/**
 *  Generic Popup Props
 *  
 *  Generic Popup Interface
 *  @param id ---> id ( e.g. Services )
 *  @param hasSidebar ---> Flag for sidebar management  ( e.g. Services = True )
 *  @param hasScroll ---> Flag for content scroll management ( e.g. Services = True )
 *  @param isActive ---> Flag for visibility management ( e.g. Services = True )
 *  @param sidebar ---> Sidebar Component ( e.g. Tabs with Services )
 *  @param content ---> Content Component ( e.g. Active Service Tab Content )
 *  @param styles ---> Inline styles management (Optional)
 *  
 */
export interface GenericPopupProps {
    id: string,
    hasSidebar: boolean,
    hasScroll: boolean,
    isActive?: boolean,
    sidebar?: any,
    content?: any,
    buttons?: any,
    styles?: React.CSSProperties | undefined
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
    styles?: React.CSSProperties | undefined
    onClick?: () => void,
}


/**
 *  Generic Section Props
 *  
 *  Generic Section Interface
 *  @param title ---> Service Title (e.g. Website & WebApp Design )
 *  @param children ---> List of Subheads & Descriptions
 *  @param styles ---> Inline styles management (Optional)
 *  
 */
export interface GenericSectionProps  {
    title?: string;
    children: ReactNode | ReactNode[];
    styles?: React.CSSProperties;
}

 
 /**  Generic Tile Props
 *  
 *  Tiles with Content's Subheads and Descriptions
 *  @param id ---> id ( e.g. Services )
 *  @param subhead ---> FAQ (e.g. Why Do I Need a Website? )
 *  @param descritpion ---> Answer (e.g. You need a website because it's cool )
 *  @param isPortfolio ---> Flag for portfolioPopup layout management
 *  @param category ---> Service Category only in portfolioPopup (e.g. UX / UI Development )
 *  @param styles ---> Inline styles management (Optional)
 *  
 */
export interface GenericTileProps {
    id: string;
    subhead?: string;
    description?: string;
    isPortfolio: boolean;
    category?: string;
    styles?: React.CSSProperties | undefined
}