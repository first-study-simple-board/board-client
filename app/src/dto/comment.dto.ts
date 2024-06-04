import { Expose } from "class-transformer";

export class CommentDto {
  @Expose({ name: "id" })
  public readonly id: number = 0;

  @Expose({ name: "author" })
  public readonly author: string = "";

  @Expose({ name: "content" })
  public readonly content: string = "";

  @Expose({ name: "password" })
  public readonly password: string = "";

  @Expose({ name: "post_id" })
  public readonly postId: number = 0;

  @Expose({ name: "created_at" })
  public readonly createdAt: string = "";
}
