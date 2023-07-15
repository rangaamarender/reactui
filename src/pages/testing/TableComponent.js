import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const TableComponent = ({ onRowClick }) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3031/promotions") // Replace with your API endpoint
            .then((response) => {
                setRowData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleRowClick = (row) => {
        onRowClick(row);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Promotion Name</th>
                    <th>Code#</th>
                    <th>Status</th>
                    <th>No Of Used</th>
                    <th>Value</th>
                    <th>Created By</th>
                    <th>Start Date</th>
                    <th>Expering On</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {rowData.map((row) => (
                    <tr key={row.id} onClick={() => handleRowClick(row)}>
                        <td>{row.promotionName}</td>
                        <td>{row.code}</td>
                        <td>{row.status}</td>
                        <td>{row.noOfUsed}</td>
                        <td>{row.value}</td>
                        <td>{row.createdBY}</td>
                        <td>{row.startDate}</td>
                        <td>{row.experingOn}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableComponent;