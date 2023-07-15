import React from "react";
import { Alert } from "react-bootstrap";

const ReceivingComponent = ({ rowData }) => {
    return (
        <div>
            {rowData ? (
                <Alert variant="info">
                    <p>Name : {rowData.promotionName}</p>
                    <p>Code : {rowData.code}</p>
                    <p>Status : {rowData.status}</p>
                    <p>Value : {rowData.value}</p>
                    <p>created : {rowData.createdBY}</p>
                    <p>Start Date : {rowData.startDate}</p>
                    <p>Expering On : {rowData.experingOn}</p>
                </Alert>
            ) : (
                <Alert variant="warning">No row selected</Alert>
            )}
        </div>
    );
};

export default ReceivingComponent;