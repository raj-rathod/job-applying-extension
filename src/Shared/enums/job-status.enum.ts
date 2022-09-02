export enum JobStatus {
  apply = 0,
  applied,
  rejected,
  resumeSelected,
  interviewPass,
  interviewFail,
  offerLetter,
}

export const jobStatus: string[] = [
  'Apply',
  'Applied',
  'Rejected',
  'Resume Selected',
  'Interview Failed',
  'Interview Pass',
  'Offer Letter',
];

export const jobStatusTab: string[] = [
  'task-tab',
  'warning-tab',
  'error-tab',
  'success-tab',
  'error-tab',
  'success-tab',
  'success-tab',
];
