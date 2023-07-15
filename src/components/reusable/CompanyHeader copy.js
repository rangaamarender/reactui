import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { Image } from 'primereact/image';
import Image from 'react-bootstrap/Image';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

const CompanyHeader = ({ companyImage, companyTitle, contractName, status, contractID, contractCategory }) => {

    return (
        <>
            <div className="">
                <Row>
                    <Col xs={4} md={3}>
                        <Image src={companyImage} alt={companyImage} width="78" height='78' roundedCircle />
                    </Col>
                    <Col xs={8} md={9}>
                        <Row>
                            <h4>{companyTitle}</h4>
                        </Row>
                        <Row>
                            <div className='d-flex center'>
                                <h6 className='me-3'>{contractName}</h6>
                                <Tag severity="success" value={status}></Tag>

                                <Button label="Add Note" severity="secondary" icon="pi pi-plus" size="small" outlined />
                                <Button label="Add Employee" severity="secondary" icon="pi pi-plus" size="small" outlined />
                                <Button label="Add Document" severity="secondary" icon="pi pi-plus" size="small" outlined />

                            </div>
                        </Row>

                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CompanyHeader;