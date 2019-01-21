import { Article } from "./data-definitions";

export const ARTICLES : Article[] = [
    {
        id : 1,
        title: "Why markdown is great for writing articles",
        image: "http://placehold.it/700x300",
        content: 
        `
        Markdown is really excellent for writing flexible articles for several reasons;
        ### Lists
        1. You can make ordered lists easily
        2. It requires no knowledge of code
          * You can also have *sub-lists*
        3. Split things up esily with horizontal rules
        ---
        ### Formatting
        Emphasis, aka italics, with *asterisks* or _underscores_.
        Strong emphasis, aka bold, with **asterisks** or __underscores__.
        Combined emphasis with **asterisks and _underscores_**.
        Strikethrough uses two tildes. ~~Scratch this.~~
        ---
        ### Tables
        | Tables        | Are           | Cool  |
        | ------------- |:-------------:| -----:|
        | col 3 is      | right-aligned | $1600 |
        | col 2 is      | centered      |   $12 |
        | zebra stripes | are neat      |    $1 |
        `,
        author: "Luke Stevens",
        date: new Date(2019, 0, 21)
    }
];