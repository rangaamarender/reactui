import React, { useState } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Sidebar } from 'primereact/sidebar';

const CompanySplitButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { label: 'AddUser', icon: 'pi pi-user', command: () => handleOptionSelect('AddEmployee') },
        { label: 'Documents', icon: 'pi pi-file', command: () => handleOptionSelect('Documents') },
        { label: 'Note', icon: 'pi pi-pencil', command: () => handleOptionSelect('Note') },
    ]

    const handleOptionSelect = (option) => {
        console.log('Option selected:', option);
        setSelectedOption(option);
    };

    const hideSidebar = () => {
        setSelectedOption(null);
    };

    const renderSidebarContent = () => {
        switch (selectedOption) {
            case 'AddEmployee':
                return (
                    <div>
                        <h1>AddUser</h1>
                        {/* Add Timesheet-specific content here */}
                    </div>
                );
            case 'Documents':
                return (
                    <div>
                        <h1>Documents</h1>
                        {/* Add Documents-specific content here */}
                    </div>
                );
            case 'Note':
                return (
                    <div>
                        <h1>Note</h1>
                        {/* Add Note-specific content here */}
                        {/* <AddResource /> */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <SplitButton
                label="Add"
                icon="pi pi-plus"
                model={options}
                className='custom-split-button custom-p-button'
            />
            {selectedOption && (
                <Sidebar visible={true} onHide={hideSidebar} fullScreen>
                    {renderSidebarContent()}
                </Sidebar>
            )}
        </div>
    );
};

export default CompanySplitButton;
