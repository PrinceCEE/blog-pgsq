import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  content: string;

  @Column()
  post: Post;

  @Column()
  comment: Comment;
}
