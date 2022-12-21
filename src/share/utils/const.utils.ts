
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

export const webDevTiles = [
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
export const uxDesTiles = [
    {
        title: 'uxDes.title1',
        children: [
            {
                subhead: 'uxDes.sub1',
                description: 'uxDes.desc1',
            },
            {
                subhead: 'uxDes.sub2',
                description: 'uxDes.desc2',
            },
            {
                subhead: 'uxDes.sub3',
                description: 'uxDes.desc3',
            }
        ]

    },
    {
        title: 'uxDes.title2',
        children: [
            {
                subhead: 'uxDes.sub4',
                description: 'uxDes.desc4',
            },
            {
                subhead: 'uxDes.sub5',
                description: 'uxDes.desc5',
            }

        ]

    },
    {
        title: 'uxDes.title3',
        children: [
            {
                subhead: 'uxDes.sub6',
                description: 'uxDes.desc6',
            },
            {
                subhead: 'uxDes.sub7',
                description: 'uxDes.desc7',
            }
        ]

    }
];
export const visualDesTiles = [
    {
        title: 'visualDes.title1',
        children: [
            {
                subhead: 'visualDes.sub1',
                description: 'visualDes.desc1',
            },
            {
                subhead: 'visualDes.sub2',
                description: 'visualDes.desc2',
            },
            {
                subhead: 'visualDes.sub3',
                description: 'visualDes.desc3',
            }
        ]

    },
    {
        title: 'visualDes.title2',
        children: [
            {
                subhead: 'visualDes.sub4',
                description: 'visualDes.desc4',
            },
            {
                subhead: 'visualDes.sub5',
                description: 'visualDes.desc5',
            }

        ]

    },
    {
        title: 'visualDes.title3',
        children: [
            {
                subhead: 'visualDes.sub6',
                description: 'visualDes.desc6',
            },
            {
                subhead: 'visualDes.sub7',
                description: 'visualDes.desc7',
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
        id: 1,
        icon: undercoverLogo,
        name: 'System',
    },
    {
        id: 2,
        icon: folderIcon,
        name: 'About Us',
    },
]

export const midBandFolders = [
    {
        id: 3,
        icon: folderIcon,
        name: 'Services',
    },
    {
        id: 4,
        icon: undercoverBinLogo,
        name: 'Portfolio',
    },
]

export const loBandFolders = [
    {
        id: 5,
        icon: folderIcon,
        name: 'Docs',
    },
    {
        id: 6,
        icon: folderIcon,
        name: 'Bin',
    },
]

