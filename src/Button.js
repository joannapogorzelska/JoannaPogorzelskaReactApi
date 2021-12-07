import React from 'react';

import './index.css';

const Button = (props) => {
    return (<React.Fragment>
                <button className="showHistory" onClick={props.click}>
                    {props.active ? "Show History" : "Hide History"}
                </button>
            </React.Fragment>
    );
};

export default Button;