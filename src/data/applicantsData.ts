export interface Applicant {
  name: string;
  age: number;
  email: string;
  password: string;
}

export const applicantsData: Applicant[] = [
  { name: "LeBron James", age: 23, email: "lebron@example.com", password: "123456" },
  { name: "Luka Doncic", age: 21, email: "luka@example.com", password: "654321" },
];
