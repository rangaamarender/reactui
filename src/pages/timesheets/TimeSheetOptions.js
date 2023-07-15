import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import TimeSheetCanvas from "./TimeSheetCanvas";

function TimeSheetOptions({ eachDetail }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="l-dropdown-toggle">
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          {/* <ContractCanvas
            eachDetail={eachDetail}
            componentToBeRendered={"view"}
            title={eachDetail.contractTitle}
          /> */}
          <TimeSheetCanvas
            eachDetail={eachDetail}
            title={eachDetail.resource}
          />
        </Dropdown.Item>
        <Dropdown.Item>
          {/* <ContractCanvas
            componentToBeRendered={"edit"}
            title={"Edit Resourse"}
          /> */}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TimeSheetOptions;
