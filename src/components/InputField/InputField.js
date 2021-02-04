import React from 'react';
import "./InputField.scss"
const Input = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => {
    return (
        <div className="custom-input">
            <div>
                <input {...input} placeholder={label} type={type} />
                <div className="error">
                    {touched &&
                        ((error && <span>{error}</span>) ||
                            (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>
    );
}



export default Input;
