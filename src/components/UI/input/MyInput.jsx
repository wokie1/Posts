import React from 'react';
import classes from "./MyInput.module.css";
const MyInput = (props, ref) => {
    return (
        <input ref={ref} type="text" className={classes.myInput} {...props} />
    );
};

export default MyInput;