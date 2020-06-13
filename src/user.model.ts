export class User {
  constructor(user) {
    this.Email = user.Email;
    this.IGN = user.IGN;
    this.Roles = user.Roles;
    this.Token = user.Token;
  }
  Email: string;
  IGN: string;
  Roles: string[];
  Token: string;
}
