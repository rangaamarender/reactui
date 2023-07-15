import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import ContractCanvas from "./ContractCanvas";
import ContractStatus from "./ContractStatus";
import ContractChangeDate from "./ContractChangeDate";
import ContractAddEmployee from "./ContractAddEmployee";
import ContractAddInvoice from "./ContractAddInvoice";
import ContractAddDocument from "./ContractAddDocument";
import ContractAudit from "./ContractAudit";

function ContractOptions({ eachDetail }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="l-dropdown-toggle">
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <ContractCanvas
            eachDetail={eachDetail}
            componentToBeRendered={"view"}
            title={eachDetail.contractTitle}
          />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractCanvas
            componentToBeRendered={"edit"}
            title={"Edit Resourse"}
          />
        </Dropdown.Item>

        <Dropdown.Item>
          <ContractStatus />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractChangeDate />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractAddEmployee />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractAddDocument />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractAddInvoice />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractAudit />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContractOptions;
