import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
console.log(posts)
    const blogPosts = posts.map((postElement)=>{
        return <article key={postElement.id}>
               <Article title={postElement.title} date={postElement.date} preview={postElement.preview}/>
        </article>
    })
console.log(blogPosts)

    return (
        <main>
            {blogPosts}
        </main>
    );
}

export default ArticleList