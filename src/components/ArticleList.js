import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const postsArticle = posts.map(posts => 
         <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} minutes={posts.minutes} />)
    
            
    return (
        

            <main>
                {postsArticle}
            </main>
       
    )
}
export default ArticleList;