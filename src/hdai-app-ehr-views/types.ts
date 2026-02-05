
export interface Episode {
  Episode_Number: number;
  Date_Start: string;
  Date_End: string;
  Episode_Type: string;
  Chief_Complaint: string;
  Department: string;
  Provider: string;
  BP_Systolic?: string;
  BP_Diastolic?: string;
  Heart_Rate?: string;
  Respiratory_Rate?: string;
  SpO2_Room_Air?: string;
  SpO2_With_O2?: string;
  O2_Liters?: string;
  Temperature_C?: string;
  Interventions: string;
  Medications: string;
  Disposition: string;
  Follow_Up?: string;
}

export interface PatientInfo {
  name: string;
  dob: string;
  id: string;
  sex: string;
  primaryDx: string;
}
