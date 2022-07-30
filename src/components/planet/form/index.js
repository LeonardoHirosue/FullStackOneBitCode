import React, { Fragment, useState } from 'react';

const initialState = {
    name: ''
}

const Form = (props) => {

    const [fields, setFields] = useState([initialState]);
    const handleChange = (e) => setFields(
        {
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value
        }
    )

    const handleSubmit = (e) => {
        props.addSatellite(fields);
        e.preventDefault();
        setFields(initialState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fields'>Nome do Satelite: </label>
                    <input id='fields' type='text' name='name' value={fields.name} onChange={handleChange}></input>
                </div>
                <br />
                <input type='submit' />
            </form>
        </Fragment>
    );
}

export default Form;