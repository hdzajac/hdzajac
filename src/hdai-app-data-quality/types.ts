
export interface DiabetesDataRow {
  patient_id: string;
  cpr_number: string;
  date: string;
  glucose: string;
  blood_pressure: string;
  weight: string;
  hba1c: string;
  medication: string;
  dose: string;
  source: string;
  data_location: string;
  entered_by: string;
}

export interface QualityFacet {
  title: string;
  description: string;
  dimensions: {
    name: string;
    description: string;
  }[];
  intentionalIssues: string[];
}

export type Page = 'intro' | 'explorer' | 'facets';
