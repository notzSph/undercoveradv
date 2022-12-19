import { ReactNode } from "react";

export interface GenericPopupProps {
    id: string,
    hasSidebar: boolean,
    hasScroll: boolean,
    isActive?: boolean,
    sidebar?: any,
    buttons?: any,
    content?: any,
}

export interface GenericButtonProps {
    label: string,
    isPrimary?: boolean,
    style?: React.CSSProperties | undefined
    onClick?: () => void,
}

export interface GenericSectionProps  {
    title?: string;
    styles?: React.CSSProperties;
    children: ReactNode | ReactNode[];
}

export interface GenericTileProps {
    id: string;
    subhead?: string;
    category?: string;
    description?: string;
    isPortfolio: boolean;
    style?: React.CSSProperties | undefined
}