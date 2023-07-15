import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import ContractDetails from "./ContractDetails";
import ContractDocuments from "./ContractDocuments";
import ContractResource from "./ContractResource";
import ContractRate from "./ContractRate";
import TimelineStatusReuse from "../../../components/reusable/TimelineStatusReuse";
import { useEffect } from "react";
import axios from "axios";

function ContractViewTabs({ eachDetail }) {
    const [key, setKey] = useState('home');
    const [timelineDetails, setTimelineDetails] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // Timeline Status API
            try {
                const timelineResponse = await axios.get('http://localhost:4000/timelineDetails');
                setTimelineDetails(timelineResponse.data);
            } catch (error) {
                console.log('Error fetching timeline details:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Tabs
                activeclassname="active"
                id="uncontrolled-tab-example"
                className="mb-0"
            >
                <Tab eventKey="taskList" title="Details">
                    <ContractDetails />
                </Tab>
                <Tab eventKey="notes" title="Notes">
                    <h4>Notes</h4>

                </Tab>
                <Tab eventKey="documents" title="Documents">

                    <ContractDocuments />
                </Tab>
                <Tab eventKey="resources" title="Resources">
                    <ContractResource />
                </Tab>
                <Tab eventKey="rates" title="Rates">
                    <ContractRate />
                </Tab>
                <Tab eventKey="history" title="History">
                    <div className="mt-4" >
                        {/* <h4>History</h4> */}
                        <TimelineStatusReuse timelineDetails={timelineDetails} />
                    </div>
                </Tab>
            </Tabs>
        </>
    );
}

export default ContractViewTabs;