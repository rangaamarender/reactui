import React, { useState } from 'react';
import './../../Global.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import plusIcon from '../../assets/plusIcon.svg'
import AddContract from '../../pages/contracts/contractAdd/AddContract';
import AddCompany from './addCompany/AddCompany';
import CreateResource from '../../pages/contracts/createResource/CreateResource';
import AddResourceSteps from '../../pages/resources/resourceAdd/AddResourceSteps';
import AddVendor from '../../pages/resources/resourceAdd/AddVendor';
import AddCompanies from '../../pages/companies/addCompanies/AddCompanies';
import AddResource from '../../pages/contracts/contractAdd/AddResource';
import AddTimesheet from '../../pages/timesheets/addTimesheet/AddTimesheet';
import AddNewContract from '../../pages/contracts/contractAdd/AddNewContract';
import { ScrollPanel } from 'primereact/scrollpanel';

export default function AddSidebarRight({ sidebarToBeRender }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex justify-content-center">

            <Sidebar position='right' visible={visible} onHide={() => setVisible(false)} className="l-width-100">
                <ScrollPanel className='my-custom-scrollpanel' style={{height:"100%"}}  >
                    {sidebarToBeRender === "addResourceSteps" && <AddResourceSteps />}
                    {sidebarToBeRender === "addVendor" && <AddVendor />}
                    {sidebarToBeRender === "contract" && <AddContract />}
                    {sidebarToBeRender === "newContract" && <AddNewContract />}
                    {sidebarToBeRender === "addCompany" && <AddCompany addCompanyStepsView="companies" />}
                    {/* {sidebarToBeRender === "addResource" && <CreateResource />} */}
                    {sidebarToBeRender === "addResource" && <AddResource />}
                    {sidebarToBeRender === "addTimesheet" && <AddTimesheet />}

                    {sidebarToBeRender === "addResource" && <CreateResource />}
                    {/* {sidebarToBeRender === "addCompanies" && <AddCompany addCompanyStepsView="addCompanies" />} */}
                    {sidebarToBeRender === "addCompanies" && <AddCompanies addCompanies="addCompanies" />}
                </ScrollPanel>
            </Sidebar>

            {sidebarToBeRender === "addResourceSteps" && <img src={plusIcon} className='cursorPointer' onClick={() => setVisible(true)} />}
            {sidebarToBeRender === "newContract" && <img src={plusIcon} className='cursorPointer' onClick={() => setVisible(true)} />}
            {sidebarToBeRender === "contract" && <img src={plusIcon} className='cursorPointer' onClick={() => setVisible(true)} />}
            {sidebarToBeRender === "addTimesheet" && <img src={plusIcon} className='cursorPointer' onClick={() => setVisible(true)} />}
            {sidebarToBeRender === "addCompany" && <span className='pe-2 l-color-orange l-fw-500 cursorPointer' onClick={() => setVisible(true)} >  + ADD Company</span>}
            {sidebarToBeRender === "addResource" && <span className='pe-2 l-color-orange l-fw-500 cursorPointer' onClick={() => setVisible(true)} >  + ADD RESOURCE</span>}
            {sidebarToBeRender === "addCompanies" && <img src={plusIcon} className='cursorPointer' onClick={() => setVisible(true)} />}

        </div>
    )
}




