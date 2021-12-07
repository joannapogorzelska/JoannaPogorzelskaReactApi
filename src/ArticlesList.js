import React from 'react';

import Article from './Article.js';

import './index.css';

const ArticlesList = (props) => {
    return(<ul className="results"> {props.articles.map((article) => (
                        <Article    key = {article.id}
                                    title = {article.title}
                                    description = {article.description}
                                    url = {article.url}
                                    code = {article.code}/>
                    ))
                }
            </ul>
        );
};

export default ArticlesList;
