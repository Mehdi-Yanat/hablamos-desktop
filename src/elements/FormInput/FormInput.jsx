import React from 'react'
import classes from './FormInput.module.scss';
import Auxiliary from '../../hoc/Auxiliary';

const FormInput = (props) => {

    let input;

    if (props.select) {
        input = (<select 
            ref={props.inputRef} 
            className={`${classes.FormInput} ${classes.FormSelect}`} >{props.children}</select>
        );    
    } else {
        input = (
            <input 
                type={props.type}
                placeholder={props.placeholder}
                className={`${props.sign ? classes.SignForm : classes.FormInput}`} 
                ref={props.inputRef}
                value={props.value}
                name={props.name}
                required={props.required}
                onChange={props.onChange} 
                disabled={props.disabled} />   
        )
    }

    return (
        <Auxiliary>
            {input}
        </Auxiliary>
    )
}

export default FormInput;
