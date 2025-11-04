export interface Company {
  name: string;
  hr: string;
  age: number;
  email: string;
  password: string;
}

export const companiesData: Company[] = [
  { name: "National Banana Corp", hr: "Maria Santos", age: 35, email: "maria@banana.com", password: "123456" },
  { name: "VisaCool", hr: "John Cruz", age: 29, email: "john@visacool.com", password: "123456" },
];
