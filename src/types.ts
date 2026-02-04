
export enum Section {
    HOME = 'home',
    RESEARCH = 'research',
    PUBLICATIONS = 'publications',
    PROJECTS = 'projects',
    TEACHING_PROTOTYPES = 'teaching-prototypes',
    ABOUT = 'about'
}

export interface Paper {
    id: string;
    date: string;
    venue: string;
    title: string;
    link: string;
    status?: string;
    scale?: string;
    abstract?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    action: string;
    specs?: string[];
}

export interface AsciiElement {
    id: string;
    text: string;
    top: number;
    left: number;
    delay: number;
}
