import React from "react";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ResourceView from '../ResourceView';
import ResourceNotes from "./ResourceNotes";
import ResourceBillProfile from "./ResourceBillProfile";
import ResourceOptions from "../ResourceOptions";
import ResourceExpenses from "./ResourceExpenses";
import ResourcePayStubs from "./ResourcePayStubs";
import ResourcePayProfile from "./ResourcePayProfile";
import ResourceImmigration from "./ResourceImmigration";
import ResourceTimesheets from "./ResourceTimesheets";
// import { useNavigate } from "react-router-dom";

function ResourceViewTabs({ eachDetail }) {
    // const navigate = useNavigate;
    // const [key, setKey] = useState('home');
    return (
        <>
            <>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-0"
                >
                    <Tab eventKey="profile" title="Profile">
                        <ResourceView eachDetail={eachDetail} />
                    </Tab>
                    <Tab eventKey="note" title="Note">
                        <ResourceNotes />
                    </Tab>
                    <Tab eventKey="billProfile" title="Bill Profile (WO)">
                        <ResourceBillProfile />
                    </Tab>
                    <Tab eventKey="timesheets" title="Timesheets">
                        <ResourceTimesheets />
                    </Tab>
                    <Tab eventKey="expenses" title="Expenses">
                        <ResourceExpenses />
                    </Tab>
                    <Tab eventKey="payStubs" title="Pay Stubs">
                        <ResourcePayStubs />
                    </Tab>
                    <Tab eventKey="payProfile" title="Pay Profile (PO)">
                        <ResourcePayProfile />
                    </Tab>
                    <Tab eventKey="immigration" title="Immigration">
                        <ResourceImmigration />
                    </Tab>
                    {/* <Tab eventKey="more" title="more" className="dropdown-menu" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </Tab> */}
                </Tabs>
            </>
        </>
    );
}

export default ResourceViewTabs;