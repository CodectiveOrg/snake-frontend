export class User {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public gender!: "male" | "female";
  public picture!: Buffer | null;
}
