import React from 'react';

import './index.css';

const ShowHistory = (props) => {
    return (
            <div className="showHistory">
                {props.searchHistory.map((items, index) => <div key={index}> {items} </div>)}
            </div>
    );
};

export default ShowHistory;