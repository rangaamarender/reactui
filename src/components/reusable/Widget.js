import React from 'react';
import { Card } from 'react-bootstrap';

const Widget = ({ title, value, graphData }) => {

    return (
        <>
            <Card className="widgets">
                <Card.Body>
                    <Card.Title className="l-fs-14 l-fw-500 l-color-widget-lable" style={{display:'contents'}}>{title}</Card.Title>
                    <Card.Text className="l-fs-20 l-fw-500">{value} <span> {graphData}</span></Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Widget;