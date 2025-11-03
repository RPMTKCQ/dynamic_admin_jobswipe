let admins = [
  {
    email: "admin@gmail.com",
    password: "admin123",
  },
];

export function addAdmin(email: string, password: string) {
  const exists = admins.some((a) => a.email === email);
  if (!exists) {
    admins.push({ email, password });
  }
}

export function getAdmin(email: string, password: string) {
  return admins.find((a) => a.email === email && a.password === password);
}

export function getAllAdmins() {
  return admins;
}
