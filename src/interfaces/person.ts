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
  id: uuid;
  schoolName: string;
  studyTitle: string;
  studyDate: string
}

export interface experience {
  id: uuid;
  companyName: string
  positionTitle: string;
  mainResponsibilities: string;
  workedTime: string
}
