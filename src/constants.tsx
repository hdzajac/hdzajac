
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
        id: '1813ai',
        title: '1813AI: Responsible AI for the Emergency Hotline',
        period: '2025—2027',
        status: 'current',
        description: 'A citizen-facing AI chat that guides people while they wait on Denmark\'s 1813 medical hotline. It is built on a locally fine-tuned language model, Denmark\'s largest emergency-call dataset (over 4 million records), and verified health information, and it is designed to say when it cannot give a definitive answer.',
        contribution: [
            'We combine NLP and HCI, developing the system with clinicians and testing it with citizens throughout. The project takes my work on LLM design choices from clinician-facing tools to a public service.'
        ],
        participants: [
            'Tariq Osman Andersen (University of Copenhagen)',
            'Christian Hardmeier (IT University of Copenhagen)',
            'Lucía Gómez Zaragozá (IT University of Copenhagen)',
            'Silja Vase (University of Copenhagen)',
            'Mette Bjerg Lindhøj (Emergency Medical Services, Capital Region of Denmark)'
        ],
        links: [
            { label: 'Project page at DIREC', url: 'https://direc.dk/citizen-facing-bidirectional-ai-for-emergency-triage-1813ai/' }
        ]
    },
    {
        id: 'data-grounded-ai-innovation',
        title: 'Data-Grounded AI Innovation',
        period: '2024—Present',
        status: 'current',
        description: 'A brainstorming method that starts from what an organisation\'s data can actually support, developed through workshops with the companies Simply and Alphalyse.',
        contribution: [
            'Nur Yildirim\'s AI brainstorming toolkit, tested in clinical settings, showed that data-informed ideation creates stronger opportunities. We made data the starting point: after interviews on the work, product, users, and data, teams mapped their current and future data, turned it into "AI can, based on, so that" opportunities, and stress-tested the best ones by asking what happens when the AI is wrong.',
            'Designing for imperfect AI produced more realistic ideas, co-designing with data built ownership, and mixed roles calibrated estimates. Unequal data and maths literacy limited who could fully take part.'
        ],
        participants: [
            'Tariq Osman Andersen (University of Copenhagen)',
            'Nur Yildirim (University of Virginia)',
            'Simply',
            'Alphalyse',
            'AI Denmark'
        ],
        links: [
            { label: 'Builds on: Creating Design Resources to Scaffold the Ideation of AI Concepts (Yildirim et al., DIS \'23)', url: 'https://doi.org/10.1145/3563657.3596058' },
            { label: 'Builds on: Sketching AI Concepts with Capabilities and Examples (Yildirim et al., CHI \'24)', url: 'https://doi.org/10.1145/3613904.3641896' }
        ],
        image: {
            src: '/data/project-images/data-grounded-workshop-cards.jpg',
            width: 2344,
            height: 1079,
            alt: 'Three blank workshop templates: a current data card, a future data card, and an AI concept blueprint with a model performance check.',
            caption: 'Workshop materials: current data card, future data card, and AI concept blueprint.'
        }
    },
    {
        id: 'teledermatology-reporting',
        title: 'AI for Clinical Reporting in Teledermatology',
        period: '2024—2026',
        status: 'past',
        description: 'LLM-generated dermatology reports, designed with the start-up Melatech for the general practitioners who act on them rather than only the specialists who write them.',
        contribution: [
            'We coded 162 anonymised reports, co-designed a report template with 12 GPs, and studied an LLM prototype with 10 dermatologists.',
            'From this we introduced representational design: encoding secondary stakeholders\' perspectives in LLMs through prompts, templates, and constraints. Where outputs clashed with what dermatologists found acceptable, those misalignments set requirements for human-AI interaction.'
        ],
        participants: [
            'Niels Kvorning Ternov (Herlev and Gentofte Hospital)',
            'Tariq Osman Andersen (University of Copenhagen)',
            'Katrine Bear and Cille Wehlast Nielsen (University of Copenhagen)',
            'Melatech',
            'Dermatologists from Denmark, Sweden, and the USA'
        ],
        publications: [
            { label: 'Representational Design for Clinical AI (DIS \'26)', url: 'https://doi.org/10.1145/3800645.3812864' },
            { label: 'Reframing Automation Benefits (CHI EA \'25)', url: 'https://doi.org/10.1145/3706599.3719979' }
        ],
        image: {
            src: '/data/project-images/teledermatology-prototype.jpg',
            width: 1800,
            height: 882,
            alt: 'Prototype interface showing stylised skin images and a medical record beside an evaluation overview and an AI-generated report.',
            caption: 'The teledermatology prototype, with patient images stylised. From Zając et al., DIS \'26 (CC BY-NC-ND 4.0).'
        }
    },
    {
        id: 'braincapture-eeg',
        title: 'Designing Data for EEG AI with BrainCapture',
        period: '2025—2026',
        status: 'past',
        description: 'BrainCapture makes mobile EEG equipment and is working towards a foundation model for interpreting brain signals, to widen access to epilepsy diagnosis.',
        contribution: [
            'We worked out how to frame the annotation of EEG data for machine learning, deciding how it should be labelled and structured before model training. This extended my research on designing ground truth to brain signals.'
        ],
        participants: [
            'William Lehn-Schiøler (BrainCapture)',
            'BrainCapture',
            'University of Copenhagen',
            'AI Denmark'
        ],
        links: [
            { label: 'AI Denmark: finalist for Industriens Fonds AI Prize 2025 (in Danish)', url: 'https://aidenmark.dk/insight/finalist-til-industriens-fonds-ai-pris-braincapture-anvender-ai-til-at-opdage-epilepsi/' }
        ]
    },
    {
        id: 'ai4xray',
        title: 'AI4XRAY',
        period: '2020—2024',
        status: 'past',
        description: 'An AI system for prioritising chest X-rays and giving radiologists a second opinion, built for both Denmark and Kenya with funding from Innovation Fund Denmark.',
        contribution: [
            'We studied chest X-ray work with 18 radiologists at nine sites, then ran 19 design sessions with 13 radiologists across three versions of a working prototype. The result: clinical usefulness depends on configuring AI to the site, the user\'s expertise, and the situation and patient.',
            'We also defined the design of ground truth schema, the work that shapes medical datasets before any annotation begins. This became the basis of my focus on upstream design choices.'
        ],
        participants: [
            'Tariq Osman Andersen, Finn Kensing, and Sune Darkner (University of Copenhagen)',
            'Michael Bachmann Nielsen and Jonathan Frederik Carlsen (Rigshospitalet)',
            'Marco Fraccaro and Henrik Albertsen (Unumed)',
            'Ruth Wanjohi and Mary K. Onyinkwa (The Nairobi Hospital)',
            'Samuel N. Gitau (Aga Khan University Hospital, Nairobi)',
            'Elijah Kwasa (Stratus Medical Imaging Solutions) and Edward K. Mwaniki (Nairobi Adventist Hospital)'
        ],
        publications: [
            { label: 'It Takes a Village to Raise Clinical AI (PhD thesis, 2024)', url: 'https://researchprofiles.ku.dk/en/publications/it-takes-a-village-to-raise-clinical-ai-towards-clinical-usefulne' },
            { label: 'Towards Clinically Useful AI (TOCHI 2025)', url: 'https://doi.org/10.1145/3715115' },
            { label: '"It depends": Configuring AI (DIS \'24)', url: 'https://doi.org/10.1145/3643834.3660707' },
            { label: 'Ground Truth or Dare (AIES \'23)', url: 'https://doi.org/10.1145/3600211.3604766' },
            { label: 'Clinician-Facing AI in the Wild (TOCHI 2023)', url: 'https://doi.org/10.1145/3582430' },
            { label: 'The Added Effect of AI on Physicians\' Performance (Diagnostics 2021)', url: 'https://doi.org/10.3390/diagnostics11122206' }
        ],
        links: [
            { label: 'Project announcement', url: 'https://di.ku.dk/english/news/2020/new-ai-system-will-detect-critical-heart-and-lung-diseases-faster/' }
        ],
        image: {
            src: '/data/project-images/ai4xray-design-sessions.jpg',
            width: 2000,
            height: 425,
            alt: 'Three photographs of radiologists working with AI-based chest X-ray prototypes on laptops and clinical monitors.',
            caption: 'Design interventions in radiology settings in Kenya and Denmark. From Zając et al., DIS \'24 (CC BY-NC-ND 4.0).'
        }
    }
];
