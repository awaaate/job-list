import React from "react";

export const FormControl = ({ label, value, name, ...otherProps }) => {
    return (
        <div className={`input-wrapper ${value ? "shrink" : ""}`}>
            <input value={value} name={name} {...otherProps} />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};
