
import React from 'react';
import { Database, Users, Target, Search, FileText } from 'lucide-react';
import { QualityFacet } from './types';
import csvFile from './diabetes_study_data.csv?raw';

// Load CSV data from the file
export const loadCSVData = async (): Promise<string> => {
  return csvFile;
};

export const QUALITY_FACETS: Record<string, QualityFacet> = {
  data: {
    title: 'Data & Metadata',
    description: 'Qualities intrinsic to the data itself. The data facet encompasses all challenges related to the data being assessed and its metadata',
    dimensions: [
      { name: 'Accuracy', description: 'Correspondence between a phenomenon in the world and its description as data.' },
      { name: 'Representativity', description: 'Ensuring characteristics of reference data are present in the considered data.' },
      { name: 'Completeness', description: 'The extent to which data (entities and attributes) are present according to the schema.' }
    ],
    intentionalIssues: [
      'Missing Units: Glucose (mg/dL?), Blood Pressure, Weight, HbA1c, and Dose have inconsistent or missing unit specifications.',
      'Completeness Issues: Multiple rows for blood pressure, weight, and HbA1c are empty.',
      'Temporal Gap: No data recorded between Feb 15th and May 18th, 2024—a critical 3-month silence.',
      'Metadata Absence: No data dictionary explains what "Source" or different entry types actually mean.'
    ]
  },
  source: {
    title: 'Source',
    description: 'Evaluating the data generation and collection processes, assessing the source\'s integrity and organisational compliance (e.g., anonymisation)..',
    dimensions: [
      { name: 'Provenance', description: 'Information about the data origin, transformations, and storage history.' },
      { name: 'Reputation', description: 'The assessment requires evaluating a data source’s credibility and reliability, and thus, considering historical reliability with data lineage.' },
      { name: 'Believability', description: 'The key challenge is to verify the data origin (time range), source transformations (data lineage), and involved entities (process).' }
    ],
    intentionalIssues: [
      'Conflicting Values: Same-day records from different sources (Lab vs. Patient Report) show significant discrepancies in glucose readings.',
      'Naming Inconsistency: The same medication is recorded as "Insulin Glargine" (generic) and "Lantus" (brand name).',
      'Unknown Collection Methods: No details on which devices patients used or how manual entries were verified.'
    ]
  },
  system: {
    title: 'System',
    description: 'Physical aspects including infrastructure, technology for storage, and technical/legal compliance.',
    dimensions: [
      {
        name: 'Clarity', description: 'Includes documenting the system’s architecture, data processing capabilities, interoperability with other systems, security features, and user interface aspects.'
      },
      { name: 'Auditability', description: 'Ability to verify compliance with regulations (like GDPR and security standards).' },
      { name: 'Recoverability', description: 'Ability to restore a prior state of data.' },
      { name: 'Portability', description: 'The key challenge is to understand the storage system, including file formats (clarity) and interoperability standards (auditability).' }
    ],
    intentionalIssues: [
      'Privacy Violation: CPR numbers are stored in plain text, presenting a major GDPR risk.',
      'System Fragmentation: Data is scattered across .proprietary, .csv, and .db formats in different directory paths.',
      'Accessibility Obstacles: Historical data is in a proprietary format requiring special software, while only recent data is easily accessible.'
    ]
  },
  task: {
    title: 'Task',
    description: 'The task facet pertains to the specific use case and the context in which the data is employed. It is the context in which the data is going to be used and has to make sense. The task influences which parts of the data (e.g., columns, tuples) are considered and how well they represent the real world.',
    dimensions: [
      { name: 'Timeliness', description: 'Defining an acceptable timeframe for tasks and to classify how data are considered up-to-date or relevant. ' },
      { name: 'Relevancy', description: 'The assessment involves balancing the need for complete information (relevance) against the risk of including unnecessary data that can violate legal requirements (risk).' }
    ],
    intentionalIssues: [
      'Population Inference Risk: Attempting to generalize results from only 5 patients to all of Denmark is a statistical overreach.',
      'Data-Task Mismatch: Using this clinical dataset to assess "Patient Satisfaction" (which isn\'t measured) is a complete task mismatch.'
    ]
  },
  human: {
    title: 'Human',
    description: 'Subjective view of stakeholders interacting with data, performing tasks, and interpreting results.',
    dimensions: [
      {
        name: 'Ease of Manipulation', description: 'Manipulability can impact accessibility positively and data integrity negatively, the assessment must consider the users intent of manipulation.'
      },
      { name: 'Relevance', description: 'Determining relevant data varies by user perspective, experience, expertise etc. (intent). The evolving nature of relevancy with changing user needs, market trends, and legal standards complicates maintaining up-to-date assessments (survey design).' }
    ],
    intentionalIssues: [
      'Expert vs. Non-Expert Perception: A Clinical Researcher would spot unit errors, but a Hospital Admin might miss them and make flawed decisions.',
      'Subjective Assessment: Data quality isn\'t objective—it depends entirely on who is assessing it and what they know.'
    ]
  }
};
