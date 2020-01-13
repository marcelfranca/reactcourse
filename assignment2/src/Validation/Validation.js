import React from "react";

const validation = (props) => {
    let validationMessage =  'long enough!';

    if (props.inputLength <= 5) {
        validationMessage = 'too short!';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;
