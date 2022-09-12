import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Comment } from "./Comment";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  @ManyToOne((type) => User)
  author: User;

  @Column()
  comments: Comment;
}
