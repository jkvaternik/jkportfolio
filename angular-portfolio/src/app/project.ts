import { Tag } from './tag'

export class Project {
    id: number;
    image: string;
    title: string;
    desc: string;
    tags: Tag[];
    link: string;
}