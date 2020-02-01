import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '60em'}}>
            {props.children}
        </div>
    );
};
export default Scroll;