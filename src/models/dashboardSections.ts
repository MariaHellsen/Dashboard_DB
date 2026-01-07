export type Location = 'Stockholm' | 'Malmö' | 'Gothenburg' | 'Remote';

// A “Top match” in the Search section
export interface TopMatch {
  id: string;
  title: string;
  publishedDate: string; 
  startDate: string;     
  location: string;
}

// Applied section
export interface Application {
  id: string;
  title: string;
  result: ApplicationResult;       
  startDate: string;
  location: string;
  remote: boolean;
}

export type ApplicationResult = 
  | 'Showed interest'
  | 'Screening'
  | 'Presented to Customer'
  | 'Interview booked'
  | 'Proposed assignment'
  | 'No from Customer'
  | 'No feedback from client'
  | 'Paused process';


// On Assignment section
export interface Assignment {
  id: string;
  client: string;
  hourRate: number;
  startDate: string;          
  endDate: string | null;     
  location: string;
  remote: boolean;
}

export interface Invoice {
  id: string;
  month: string;         
  hours: number;
  amountSEK: number;
}




