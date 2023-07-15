import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import ContractDocumentView from "./ContractDocumentView";
import ContractAddEditDocument from "./ContractAddEditDocument";
import ContractStatus from "../ContractStatus";
import ContractChangeDate from "../ContractChangeDate";
import ContractChangeDocNum from "./ContractChangeDocNum";
import ContractChangeTitle from "./ContractChangeTitle";


function ContractDocumentOptions({eachDetail}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant=""  id="dropdown-basic" className="l-dropdown-toggle">
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >
             <ContractDocumentView/>
        </Dropdown.Item>
        <Dropdown.Item >
          <ContractAddEditDocument
          addEditComponent={"edit"}
          title={"Edit Document"}
          />
        </Dropdown.Item>
        <Dropdown.Item>
          <ContractStatus/> 
          </Dropdown.Item>
         <Dropdown.Item>
          <ContractChangeDate/>
          </Dropdown.Item>
          <Dropdown.Item>
             <ContractChangeDocNum/> 
             </Dropdown.Item>
           <Dropdown.Item>
            <ContractChangeTitle/>
             </Dropdown.Item>
            <Dropdown.Item></Dropdown.Item>
        
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContractDocumentOptions;

