export default interface person {
  name: string;
  lastName: string;
  profession: string;
  education: schooles[];
  experience: experience[];
}

export interface schooles {
  id: number;
  schoolName: string;
  studyTitle: string;
  studyDate: string
}

export interface experience {
  id: number;
  companyName: string
  positionTitle: string;
  mainResponsibilities: string;
  workedTime: string
}
