export class MyBooks {
    public title: string;
    public url: string;
    public img: string;
    public author: string;

    constructor(title: string, author: string, img: string, url: string) {
        this.title = title;
        this.author = author;
        this.img = img;
        this.url = url;
    }
    }
