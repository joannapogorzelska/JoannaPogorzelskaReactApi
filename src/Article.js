import React from 'react';
import './index.css';

const Article = (props) => {
    return (
        <li className="result">
            <h2>{props.title} </h2>
            <p>{props.description} </p>
            <a href={props.url} target="blank" rel="noreferrer" >read more</a>
            <p>{props.code} </p>
        </li>
    );
};

export default Article;
