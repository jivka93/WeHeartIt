import { User } from "./user.model";
import { Post } from "./post.model";

export class Collection {
    public name: string;
    public author: User;
    public coverImageUrl: string;
    public posts: Post[] = [];
    public followers: User[] = [];

    constructor(name:string, author:User) {
        this.author = author;
        this.name = name;
    }

    public addPost(post:Post) {
        this.posts.push(post);
        if (this.posts.length === 1) {
            this.coverImageUrl = post.imageUrl;
        }
    }

    public setCoverImage(post:Post) {
        this.coverImageUrl = post.imageUrl;
    }

    public follow(follower:User) {
        this.followers.push(follower);
    }
}