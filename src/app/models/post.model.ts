import { User } from "./user.model";

export class Post {
    public rating: number;

    constructor(public author: User, public imageUrl: string, public tags: string[] ) {
        this.author = author;
        this.imageUrl = imageUrl;
        this.tags = tags;
        this.rating = 0;
    }

    public like() {
        this.rating++;
    }
}