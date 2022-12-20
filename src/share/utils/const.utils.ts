
/**
 * Assets Import (Images & SVG)
 */
export const windowBtnBlack = '/assets/svg/btn-black.svg';
export const windowBtnWhite = '/assets/svg/btn-white.svg';
export const folderIcon = '/assets/svg/folder.svg';
export const undercoverLogo = '/assets/images/undrcover-logo.png';
export const undercoverBinLogo = '/assets/images/bin-logo.png';
export const brodosProject = '/assets/images/brodos.png';

/**
 *  Services Tiles
 *  
 *  Tiles with Content's Subheads and Descriptions
 *  @param title ---> Service Title (e.g. Website & WebApp Design )
 *  @param children ---> List of Subheads & Descriptions
 *  @param subhead ---> FAQ ( e.g. Why Do I Need a Website? )
 *  @param descritpion ---> Answer ( e.g. You need a website because it's cool )
 *  
 */

export const servicesTiles = [
    {
        title: 'webDev.title1',
        children: [
            {
                subhead: 'webDev.sub1',
                description: 'webDev.desc1',
            },
            {
                subhead: 'webDev.sub2',
                description: 'webDev.desc2',
            },
            {
                subhead: 'webDev.sub3',
                description: 'webDev.desc3',
            }
        ]

    },
    {
        title: 'webDev.title2',
        children: [
            {
                subhead: 'webDev.sub4',
                description: 'webDev.desc4',
            },
            {
                subhead: 'webDev.sub5',
                description: 'webDev.desc5',
            }

        ]

    },
    {
        title: 'webDev.title3',
        children: [
            {
                subhead: 'webDev.sub6',
                description: 'webDev.desc6',
            },
            {
                subhead: 'webDev.sub7',
                description: 'webDev.desc7',
            }
        ]

    }
];

/**
 *  About Tiles
 *  
 *  Tiles with About Content's Subheads and Descriptions
 *  @param subhead ---> Core Value (e.g. We Believe in Human Centered Design )
 *  @param descritpion ---> Core Value Explanation (e.g. We all humans so makes sense )
 * 
 */

export const aboutTiles = [
    {
        children: [
            {
                subhead: 'sub1',
                description: 'desc1',
            },
            {
                subhead: 'sub2',
                description: 'desc2',
            },
            {
                subhead: 'sub3',
                description: 'desc3',
            },
            {
                subhead: 'sub4',
                description: 'desc4',
            },
            {
                subhead: 'sub5',
                description: 'desc5',
            }
        ]

    },
]


/**
 *  { POSITION } Band Folder
 *  
 *  High / Mid / Low Bands 
 *  @param id ---> id (e.g. System )
 *  @param icon ---> Folder Icon Url
 *  @param name ---> Folder Name (e.g. System )
 * 
 */

export const hiBandFolders = [
    {
        id: 'sub1',
        icon: undercoverLogo,
        name: 'sssss',
    },
    {
        id: 'sub1',
        icon: folderIcon,
        name: 'yeess',
    },
]

export const midBandFolders = [
    {
        id: 'sub1',
        icon: folderIcon,
        name: 'sssss',
    },
    {
        id: 'sub1',
        icon: undercoverBinLogo,
        name: 'sssss',
    },
]

export const loBandFolders = [
    {
        id: 'sub1',
        icon: folderIcon,
        name: 'aaaass',
    },
    {
        id: 'sub1',
        icon: folderIcon,
        name: 'sssss',
    },
]

