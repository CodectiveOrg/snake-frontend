export class User {
  public id!: number;
  public username!: string;
  public email!: string;
  public gender!: "male" | "female";
  public password!: string;
  public picture!: string | null;
}
