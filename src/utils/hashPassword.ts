export function hashPassword(password: string): string {
  return password;
}

export function comparePasswords(
  hashedPassword: string,
  password: string
): boolean {
  return hashedPassword === password;
}
