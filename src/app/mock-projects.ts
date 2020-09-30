import { Project } from './project'

const PROJECTS: Project[] = [
    { 
        id: 1, 
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/water-project.png',
        title: 'Water',
        desc: 'This is my second project.',
        tags: [
            {
                name: "d3.js"
            },
            {
                name: "HTML"
            },
            {
                name: "CSS"
            }
        ],
        link: 'https://github.com/jkvaternik/water'
    },
    { 
        id: 2, 
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/spreadsheets-ood.png',
        title: 'Spreadsheets.ood',
        desc: 'This is my second project.',
        tags: [
            {
                name: "Java"
            }
        ],
        link: 'https://github.com/jkvaternik/spreadsheetsOOD'
    },
    { 
        id: 3, 
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/presentation+%E2%80%93+15.png',
        title: 'Explore',
        desc: 'This is my first project.',
        tags: [
            {
                name: "XD"
            }
        ],
        link: 'https://www.behance.net/gallery/105198521/explore?share=1'
    },
    { 
        id: 4, 
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/Artboard+1%402x.png',
        title: 'Type & Systems',
        desc: 'This is my second project.',
        tags: [
            {
                name: "inDesign"
            }
        ],
        link: 'https://www.behance.net/gallery/105197727/CAMD-Brochure-Systems-Design?'
    },
    { 
        id: 5, 
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/redesign%402x.png',
        title: 'NU CampusRec Redesign',
        desc: 'This is my second project.',
        tags: [
            {
                name: "XD"
            }
        ],
        link: 'https://www.behance.net/gallery/87370301/Northeastern-Campus-Rec-Redesign'
    },
    { 
        id: 7, 
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/Screen+Shot+2020-09-29+at+10.45.05+PM.png',
        title: "Color Block Plug-in",
        desc: 'This is my first project.',
        tags: [
            {
                name: "JavaScript"
            },
        ],
        link: 'https://github.com/jkvaternik/colorBlock'
    },
]

export { PROJECTS }