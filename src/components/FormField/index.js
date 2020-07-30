import React from 'react';

function FormField({label, type, name, value, onChange}) {
    let response;
    if(type === "textarea") {
        response = (
            <div>
                <label>
                    {label}: 
                    <textarea
                        type={"text"}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    } else {
        response = (
            <div>
                <label>
                    {label}: 
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
    return( response )
}

export default FormField;