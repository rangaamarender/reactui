import React, { useEffect, useState } from 'react'
import CompanyHeader from '../../components/reusable/CompanyHeader';
import axios from 'axios';
import EmployeeHeader from '../../components/reusable/EmployeeHeader';
import MultiButtons from '../../components/reusable/MultiButtons';
import AddResourceSteps from '../resources/resourceAdd/AddResourceSteps';
import SplitButtonComponent from '../../components/reusable/EmployeeSplitButton';
import ReusableDropdown from '../../components/reusable/DropdownComponent';
import DropdownComponent from '../../components/reusable/DropdownComponent';
import { SplitButton } from 'primereact/splitbutton';
import MySplitButton from '../resources/resourceAdd/MySplitButton';
import ReusableSplitButton from '../../components/reusable/ReusableSplitButton';
import CompanySplitButtonComponent from '../../components/reusable/CompanySplitButton';
import BasicDemo from './BasicDemo';
import EmployeeTimesheetSplitButton from '../../components/reusable/EmployeeTimesheetSplitButton';
import MyForm from './MyForm';
import SettingsSwitch from './SettingsSwitch';
import TimelineStatus from './TimelineStatus';
import CalenderTest from './CalenderTest';
import TimelineStatusReuse from '../../components/reusable/TimelineStatusReuse';
import NotesReusebale from '../../components/reusable/notesComponent/NotesReusebale';
import MyDropdown from './MyDropdown';
import EditableDemo from './EditableDemo';
import SignupTest from '../../components/loginSignup/SignupTest';
import Signup from '../../components/loginSignup/Signup';
import Testing from '../testing/Testing';

function Dashboard() {
  const [timelineDetails, setTimelineDetails] = useState([]);
  const [text, setText] = useState('');
  const [companyHeader, setCompanyHeader] = useState([]);
  const [empHeader, setEmpHeader] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    // Handle form submission logic here
  };

  const options = [
    { label: 'Timesheet', icon: 'pi pi-calendar' },
    { label: 'Documents', icon: 'pi pi-file' },
    { label: 'Note', icon: 'pi pi-pencil' },
    { label: 'Abc', icon: 'pi pi-pencil' },
  ];

  // const timelineDetails = [
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  //     description: "Changed the Status to ",
  //     status: "Not in Consideration",
  //     name: "Vinod Kumar",
  //     date: "Jun 28, 2020 10:30 PM",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
  //     description: "Changed the Status to ",
  //     status: "Assigned",
  //     name: "Sri Ram",
  //     date: "Jun 29, 2020 10:30 PM",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  //     description: "Changed the Status to ",
  //     status: "Not in Consideration",
  //     name: "Vinod Kumar",
  //     date: "Jun 28, 2020 10:30 PM",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
  //     description: "Changed the Status to ",
  //     status: "Assigned",
  //     name: "Sri Ram",
  //     date: "Jun 29, 2020 10:30 PM",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  //     description: "Changed the Status to ",
  //     status: "Not in Consideration",
  //     name: "Vinod Kumar",
  //     date: "Jun 28, 2020 10:30 PM",
  //   }

  // ];


  // const handleDropdownChange = (e) => {
  //   setSelectedOption(e.value);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const timelineResponse = await axios.get('http://localhost:4000/timelineDetails');
  //       setTimelineDetails(timelineResponse.data);
  //     } catch (error) {
  //       console.log('Error fetching timeline details:', error);
  //     }

  //     try {
  //       const companyHeaderResponse = await axios.get('http://localhost:4000/companyHeader');
  //       setCompanyHeader(companyHeaderResponse.data);
  //     } catch (error) {
  //       console.log('Error fetching company header:', error);
  //     }

  //     try {
  //       const employeeHeaderResponse = await axios.get('http://localhost:4000/employeeHeader');
  //       setEmpHeader(employeeHeaderResponse.data);
  //     } catch (error) {
  //       console.log('Error fetching employee header:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className='p-3'>
        {/* <h5>Dashboard</h5> */}


        {/* <Testing /> */}

        {/* <CalenderTest /> */}
        <>
          {/* <MyForm /> */}
          {/* <TimelineStatus /> */}

          {/* Use TimelineStatus component */}
          {/* <TimelineStatusReuse timelineDetails={timelineDetails} /> */}

          {/* <NotesReusebale /> */}
        </>

        {/* <hr></hr> */}
        {/* <>
          {
            companyHeader.map((item) => (
              <CompanyHeader companyImage={item.companyImage} companyTitle={item.companyTitle} contractName={item.contractName}
                status={item.status}
              />
            ))}
        </> */}

        {/* <hr></hr> */}
        {/* <>
          {
            empHeader.map((item) => (
              <EmployeeHeader empImage={item.empImage} empName={item.empName} empType={item.empType} status={item.status} />
            ))}
        </> */}
        {/* <hr></hr> */}
        {/* <MultiButtons buttons={buttons} /> */}
        {/* <hr></hr> */}
        {/* <h6>Employee</h6> */}
        {/* <SplitButtonComponent /> */}
        {/* <hr></hr> */}
        {/* <h6>Timesheet</h6> */}
        {/* <EmployeeTimesheetSplitButton /> */}
        {/* <hr></hr> */}

        {/* <ReusableSplitButton options={options} /> */}


        {/* <h6>Contract</h6> */}
        {/* <CompanySplitButtonComponent /> */}
        {/* <br></br> */}
        {/* <>
          {
            empHeader.map((item) => (
              <EmployeeHeader empImage={item.empImage} empName={item.empName} empType={item.empType} status={item.status} />
            ))
          }
        </> */}
        {/* <br></br> */}

        {/* <SettingsSwitch /> */}

        {/* <BasicDemo /> */}

        {/* <DropdownComponent
          options={options1}
          value={selectedOption}
          onChange={handleDropdownChange}
        /> */}
        {/* <hr></hr> */}
        {/* <SplitButtonComponent options={options} label="+ Add" /> */}
        {/* <AddResourceSteps /> */}

        {/* <h6>Document Dropsown</h6>
        <MyDropdown/>
        <EditableDemo/> */}

        {/* <SignupTest/> */}
        {/* <Signup/> */}
        <h1>Dashboard Component</h1>

      </div >

    </>
  )
}

export default Dashboard