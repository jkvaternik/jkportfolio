import { Project } from './project'

const PROJECTS: Project[] = [
    { 
        id: 1, 
        image: 'https://cdn.lynda.com/course/612167/612167-637159308484102173-16x9.jpg',
        title: 'Wasteland',
        desc: 'This is my first project.',
        tags: [
            {
                name: "iOS"
            },
            {
                name: "XD"
            }
        ],
        link: 'https://github.com/'
    },
    { 
        id: 2, 
        image: 'https://cdn.lynda.com/course/612167/612167-637159308484102173-16x9.jpg',
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
        link: 'https://github.com/'
    },
    { 
        id: 3, 
        image: 'https://cdn.lynda.com/course/612167/612167-637159308484102173-16x9.jpg',
        title: 'Spreadsheets.ood',
        desc: 'This is my second project.',
        tags: [
            {
                name: "Java"
            }
        ],
        link: 'https://github.com/'
    },
    { 
        id: 4, 
        image: 'https://cdn.lynda.com/course/612167/612167-637159308484102173-16x9.jpg',
        title: 'Explore',
        desc: 'This is my first project.',
        tags: [
            {
                name: "XD"
            }
        ],
        link: 'https://github.com/'
    },
    { 
        id: 5, 
        image: 'https://cdn.lynda.com/course/612167/612167-637159308484102173-16x9.jpg',
        title: 'Type & Systems',
        desc: 'This is my second project.',
        tags: [
            {
                name: "inDesign"
            }
        ],
        link: 'https://github.com/'
    },
    { 
        id: 6, 
        image: 'https://cdn.lynda.com/course/612167/612167-637159308484102173-16x9.jpg',
        title: 'NU CampusRec Redesign',
        desc: 'This is my second project.',
        tags: [
            {
                name: "XD"
            }
        ],
        link: 'https://github.com/'
    }
]

export { PROJECTS }