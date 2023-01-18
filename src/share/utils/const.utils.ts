import { goToBlank } from "./functions.utils";
import { GenericProjectProps } from "./types.utils";


/**
 * Assets Import (Images & SVG)
 */
export const windowBtnRed = '/assets/svg/btn-red.svg';
export const windowBtnYellow = '/assets/svg/btn-yellow.svg';
export const windowBtnGreen = '/assets/svg/btn-green.svg';
export const windowBtnBlack = '/assets/svg/btn-black.svg';
export const windowBtnWhite = '/assets/svg/btn-white.svg';
export const cyanFolderIcon = '/assets/svg/folder-cyan.svg';
export const greenFolderIcon = '/assets/svg/folder-green.svg';
export const magentaFolderIcon = '/assets/svg/folder-magenta.svg';
export const yellowFolderIcon = '/assets/svg/folder-yellow.svg';
export const folderIcon = '/assets/svg/folder.svg';
export const binIcon = '/assets/svg/bin.svg';
export const undercoverLogo = '/assets/svg/undrcover-logo.svg';
export const undercoverBinLogo = '/assets/svg/bin-logo.svg';

// Projects
export const astenseProject = '/assets/images/astense.png';
export const bankProject = '/assets/images/crasti.png';
export const brodosProject = '/assets/images/brodos.png';
export const campisiProject = '/assets/images/campisiclinic.png';
export const forartsProject = '/assets/images/forarts.png';
export const lymphaticProject = '/assets/images/lymphatic.png';
export const lymphedemaProject = '/assets/images/world-lymphedema-day.png';
export const tfProject = '/assets/images/tradingfloor.png';
export const nikeProject = '/assets/images/nike.png';
export const aiciProject = '/assets/images/aici.png';

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
            },
            {
                subhead: 'webDev.sub6',
                description: 'webDev.desc6',
            }

        ]

    },
    {
        title: 'webDev.title3',
        children: [

            {
                subhead: 'webDev.sub7',
                description: 'webDev.desc7',
            },
            {
                subhead: 'webDev.sub6',
                description: 'webDev.desc6',
            },
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
 *  Folder Tiles
 *  
 *  High / Mid / Low Bands 
 *  @param id ---> id (e.g. System )
 *  @param icon ---> Folder Icon Url
 *  @param name ---> Folder Name (e.g. System )
 * 
 */

export const folderTiles = [
    {
        id: 1,
        icon: undercoverLogo,
        name: 'SYSTEM',
        top: '8vh',
        left: '23vw',
    },
    {
        id: 2,
        icon: magentaFolderIcon,
        name: 'SERVICES',
        top: '18vh',
        left: '78vw',
    },
    {
        id: 3,
        icon: cyanFolderIcon,
        name: 'ABOUT US',
        top: '35vh',
        left: '13vw',
    },
    {
        id: 4,
        icon: greenFolderIcon,
        name: 'PORTFOLIO',
        top: '46vh',
        left: '67vw',
    },
    {
        id: 5,
        icon: yellowFolderIcon,
        name: 'CONTACT US',
        top: '70vh',
        left: '23vw',
    },
    {
        id: 6,
        icon: binIcon,
        name: 'BIN',
        top: '76vh',
        left: '85vw',
    },
]

export const brodos: GenericProjectProps = {
    id: 'brodos',
    image: brodosProject,
    title: 'Brodos',
    category: 'WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://brodosfamily.com')
    }
}
export const bank: GenericProjectProps = {
    id: 'bank',
    image: bankProject,
    title: 'Banca di Asti',
    category: 'UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: false,
        onClick: () => goToBlank('https://bancadiasti.it')
    }
}


export const astense: GenericProjectProps = {
    id: 'astense',
    image: astenseProject,
    title: 'Caffè Astense',
    category: 'UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://astense.com')
    }
}

export const campisi: GenericProjectProps = {
    id: 'campisi',
    image: campisiProject,
    title: 'Campisi Clinic',
    category: 'UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://campisiclinic.com')
    }
}
export const lymphatic: GenericProjectProps = {
    id: 'lymphatic',
    image: lymphaticProject,
    title: 'Lymphatic Surgery',
    category: 'UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://chirurgiadeilinfatici.com/')
    }
}
export const lymphedema: GenericProjectProps = {
    id: 'lymphedema',
    image: lymphedemaProject,
    title: 'World Lymphedema Day',
    category: 'VISUAL - UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://chirurgiadeilinfatici.com/')
    }
}
export const forarts: GenericProjectProps = {
    id: 'forarts',
    image: forartsProject,
    title: 'ForArts',
    category: 'VISUAL - UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://forarts.it/')
    }
}

export const tf: GenericProjectProps = {
    id: 'tf',
    image: tfProject,
    title: 'Trading Floor',
    category: 'BRAND IDENTITY - UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://tradingfloor.online/')
    }
}

export const nike: GenericProjectProps = {
    id: 'nike',
    image: nikeProject,
    title: 'Nike Contest',
    category: 'UX/UI DESIGN',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://nike.com/')
    }
}

export const aici: GenericProjectProps = {
    id: 'aici',
    image: nikeProject,
    title: 'A.I.C.I.',
    category: 'UX/UI - WEB DEVELOPMENT',
    button: {
        label: 'Visit Website',
        isPrimary: true,
        onClick: () => goToBlank('https://nike.com/')
    }
}