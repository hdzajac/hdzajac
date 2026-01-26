
import { Paper, Project, AsciiElement } from './types';

export const PAPERS: Paper[] = [
    {
        id: 'P01',
        date: 'June 2025',
        venue: 'Nature Intelligence',
        title: 'Ghost in the Manifold: Identifying Latent Bias in Unsupervised Learning',
        link: '#',
        status: 'PUBLISHED',
        scale: '1:1',
        abstract: 'This paper explores the recursive nature of latent bias within GAN-based architectures, proposing a novel geometric framework for detection.'
    },
    {
        id: 'P02',
        date: 'March 2024',
        venue: 'CVPR',
        title: 'Hyper-Spatial Reconstruction of 4D Tensor Fields',
        link: '#',
        status: 'ARCHIVED',
        scale: '1:5',
        abstract: 'A deep dive into volumetric rendering techniques applied to time-series tensor data for real-time architectural simulation.'
    },
    {
        id: 'P03',
        date: 'Nov 2023',
        venue: 'Journal of AI Ethics',
        title: 'The Semantic Wall: Why LLMs Cannot Transcend Mimicry',
        link: '#',
        status: 'DRAFT',
        scale: '1:1',
        abstract: 'An epistemological critique of current transformer models, arguing that statistical inference is fundamentally distinct from logical reasoning.'
    }
];

export const PROJECTS: Project[] = [
    {
        id: 'PR01',
        title: 'NEON-MIND',
        description: 'A prototype neural interface using low-frequency sonic waves to transmit basic geometric data directly to the visual cortex.',
        icon: 'memory',
        image: '/data/project-images/neon-mind.jpg',
        action: 'Launch Viewer',
        specs: ['Baud: 9600', 'Latency: 12ms', 'Freq: 4.2Hz']
    },
    {
        id: 'PR02',
        title: 'RETRO-SYNTH OS',
        description: 'Re-imagining operating systems based on 1980s mainframe logic but powered by modern transformer architectures.',
        icon: 'terminal',
        image: '/data/project-images/retro-synth.jpg',
        action: 'Access Repo',
        specs: ['Kernel: monolithic', 'Arch: x64/RISC-V', 'UI: TUI-First']
    },
    {
        id: 'PR03',
        title: 'DATA MONOLITH',
        description: 'Physicalizing digital data sets through brutalist 3D structures and sonic mapping in virtual reality environments.',
        icon: 'database',
        image: '/data/project-images/data-monolith.jpg',
        action: 'Enter Space',
        specs: ['Scale: 1:100', 'Mats: Virtual Conc.', 'Engine: Unreal 5']
    }
];

export const ASCII_ART: string[] = [
    `[+]`,
    `/ \\`,
    `|--|`,
    `>>`,
    `_.*._`,
    `{ : }`,
    `<|--|>`,
    `0xFD`,
    `::::`,
    `[SYS]`,
    `((.))`,
    `[====]`,
    `#_#`,
    `^v^`
];

export const generateFloatingAscii = (count: number): AsciiElement[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `ascii-${i}`,
        text: ASCII_ART[Math.floor(Math.random() * ASCII_ART.length)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5
    }));
};
