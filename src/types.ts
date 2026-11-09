
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

export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    period: string;
    status: 'current' | 'past';
    icon: string;
    description: string;
    /** What we did and how it connects to my research. */
    contribution: string[];
    participants: string[];
    publications?: ProjectLink[];
    links?: ProjectLink[];
    image?: {
        src: string;
        width: number;
        height: number;
        alt: string;
        caption: string;
    };
}

export interface AsciiElement {
    id: string;
    text: string;
    top: number;
    left: number;
    delay: number;
}
