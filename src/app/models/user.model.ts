import { Post } from "./post.model";
import { Collection } from "./collection.model";

export class User {
    public posts: Post[];
    public collections: Collection[];
    public followers: User[];
    public following: User[];

    constructor(public username:string, public email:string, public password:string, public image?:string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image ? image: "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png";
        
        this.posts = [];
        this.collections = [];
        this.followers = [];
        this.following = [];
    }

    public addFollower(follower:User) {
        this.followers.push(follower);
        follower.startFollowing(this);
    }

    public startFollowing(user:User) {
        this.following.push(user);
        user.addFollower(this);
    }

    public addCollection(collectionName:string) {
        this.collections.push(new Collection(collectionName, this));
    }

    public addPostToCollection(collection:Collection, post:Post) {
        collection.posts.push(post);
    }

    public addPost(imageUrl:string, tags:string[]) {
        this.posts.push(new Post(this, imageUrl, tags));
    }
}