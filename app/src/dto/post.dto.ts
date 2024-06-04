import { Expose } from "class-transformer";

export class PostDto {
  @Expose({ name: "id" })
  public readonly id: number = 0;

  @Expose({ name: "author" })
  public readonly author: string = "";

  @Expose({ name: "title" })
  public readonly title: string = "";

  @Expose({ name: "content" })
  public readonly content: string = "";

  @Expose({ name: "password" })
  public readonly password: string = "";

  @Expose({ name: "created_at" })
  public readonly createdAt: string = "";
}
