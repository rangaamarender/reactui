import React from "react";
import { Form } from "react-bootstrap";

function InputField2(props) {
    const { label, value, onChange, type, name, placeholder } = props;

    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    );
}

export default InputField2;
