import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";



function ContractRateOptions({eachDetail}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant=""  id="dropdown-basic" className="l-dropdown-toggle">
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >
            
        </Dropdown.Item>
        <Dropdown.Item >
         
        </Dropdown.Item>
        <Dropdown.Item>
          
          </Dropdown.Item>
         <Dropdown.Item>
         
          </Dropdown.Item>
         
        
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContractRateOptions;

