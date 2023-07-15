import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import ResourceCanvas from "./ResourceCanvas";
import ResourceStatus from "./ResourceStatus";
import ResourceChangeDate from "./ResourceChangeDate";
import ResourceAddTimesheet from "./ResourceAddTimesheet";
import ResourceAddDocument from "./ResourceAddDocument";
import ResourceAddNote from "./ResourceAddNote";

function ResourceOptions({ eachDetail }) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="l-dropdown-toggle">
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >
          <ResourceCanvas eachDetail={eachDetail} componentToBeRendered={"view"} title={eachDetail.resourceName} />
        </Dropdown.Item>
        <Dropdown.Item >
          <ResourceCanvas componentToBeRendered={"edit"} title={"Edit Resource"} />
        </Dropdown.Item>
        <Dropdown.Item>
          <ResourceStatus />
        </Dropdown.Item>
        <Dropdown.Item>
          <ResourceChangeDate />
        </Dropdown.Item>
        <Dropdown.Item>
          <ResourceAddTimesheet />
        </Dropdown.Item>
        <Dropdown.Item>
          <ResourceAddDocument />
        </Dropdown.Item>
        <Dropdown.Item>
          <ResourceAddNote />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ResourceOptions;

