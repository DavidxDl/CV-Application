export default interface person {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  profession: string;
  aboutMe: string;
  education: schooles[];
  experience: experience[];
}

export interface schooles {
  id: string;
  schoolName: string;
  studyTitle: string;
  studyDate: string
}

export interface experience {
  id: string;
  companyName: string
  positionTitle: string;
  mainResponsibilities: string;
  workedTime: string
}
