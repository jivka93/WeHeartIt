import { Post } from "./post.model";
import { Collection } from "./collection.model";

export class User {
    public username: string;
    public email: string;
    public password: string;
    public image: string;

    public posts: Post[];
    public collections: Collection[];
    public followers: User[];
    public following: User[];

    constructor(username:string, email:string, password:string, image:string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
    }

    public follow(follower:User) {
        this.followers.push(follower);
    }

    public addCollection(collectionName:string) {
        this.collections.push(new Collection(collectionName, this));
    }

    public addPost(imageUrl:string, tags:string[]) {
        this.posts.push(new Post(this, imageUrl, tags));
    }
}