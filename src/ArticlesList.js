import React from 'react';

import Article from './Article.js';

const ArticlesList = (props) => {
    return (<ul> {props.articles.map((article) => (
                <Article key = {article.id}
                        title = {article.title}
                        description = {article.description}
                        url = {article.url}
                />
            ))
        } </ul>
    );
};

export default ArticlesList;