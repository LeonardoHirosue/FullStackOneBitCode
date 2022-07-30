import React, { Fragment, useState } from "react";

const Form = (props) => {
    const initialState = {
        name: '',
        description: '',
        img_url: '',        
        link: ''
    }

    const[fields, setFields] = useState(initialState);
    const handleFieldsChange = (e) => setFields( 
        {
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value
        }
    )

    const handleSubmit = (event) => {
        props.addPlanet(fields);
        event.preventDefault(); //evita o reload do Browser após a inserção do component
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fields">Nome: </label>
                    <input id="fields" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="fields">Descrição: </label>
                    <input id="fields" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="fields">img_url: </label>
                    <input id="fields" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="fields">Link: </label>
                    <input id="fields" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;