import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from 'react-bootstrap/Button';
import { RiFilter2Fill } from "react-icons/ri";
import { Container, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import plusIcon from '../../assets/plusIcon.svg';
import filterIcon from '../../assets/filterIcon.svg';
import filter2Icon from '../../assets/filter2Icon.svg';
import AddSidebarRight from "../../components/reusable/AddSidebarRight";

function ResourceTabs() {

  return (
    <>
      <Container className="ms-0">
        <Stack direction="horizontal" gap={3} >
          <div >
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="">
              <Tab eventKey="all" title="All"></Tab>
              <Tab eventKey="billable" title="Billable"></Tab>
              <Tab eventKey="nonBillable" title="Non Billable"></Tab>
              <Tab eventKey="bench" title="Bench"></Tab>
              <Tab eventKey="terminated" title="Terminated"></Tab>
            </Tabs>
          </div>

          <div className="">
            {/* <RiFilter2Fill /> */}
            <img src={filterIcon} className='' />
          </div>

          {/* <Link to="/addResource"> <img src={plusIcon} className='me-3' /></Link> */}
          <AddSidebarRight sidebarToBeRender={"addNewResource"} />
          <div>
            <Form >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default ResourceTabs;