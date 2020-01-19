import React, { Component } from 'react';
import './App.css';
import Cta from './Cta';
import Form from './Form';

class FormContainer extends Component {
    render() {
        return(
            <div className="Container">
                <Cta />
                <Form />
            </div>
        );
    }
}

export default FormContainer;
