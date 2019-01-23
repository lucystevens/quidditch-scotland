export class Article {
    id: number;
    title: string;
    image: string;
    content: string;
    author: string;
    date: Date;
    tags: string[];
}

export class Player {
    name: string;
    positions: string[];
    experience: number;
    number: number;
    photo: string;
    info: string;
}

export class Fixture {
    opposition: string;
    score?: string;
    date: Date;
    location: string;
}

export class Video {
    description: string;
    url: string;
    thumbnail: string;
}

export class Config {
    contactEmail: string;
}