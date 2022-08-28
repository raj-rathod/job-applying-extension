export const enum JobStatus{
    apply = 0,
    applied,
    rejected,
    resumeSelected,
    interviewPass,
    interviewFail,
    offerLetter,
}

export const jobStatus: string[] = [
   "Apply",
   "Applied",
   "Rejected",
   "Resume Selected",
   "Interview Failed",
   "Interview Pass",
   "Offer Letter"
];