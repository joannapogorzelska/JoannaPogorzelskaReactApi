import React from 'react';

const Article = (props) => {
    return (
        <li >
            <h2>{props.title} </h2>
            <h3>{props.description} </h3>
            <p>{props.url} </p>
        </li>
    );
};

export default Article;