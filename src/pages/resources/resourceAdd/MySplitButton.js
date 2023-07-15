import React from 'react';
import { SplitButton } from 'primereact/splitbutton';
// import { MenuItem } from 'primereact/menuitem';

const MySplitButton = () => {
    const options = [
        { label: 'Timesheet', icon: 'pi pi-calendar', command: () => handleOptionClick('Timesheet') },
        { label: 'Documents', icon: 'pi pi-file', command: () => handleOptionClick('Documents') },
        { label: 'Note', icon: 'pi pi-pencil', command: () => handleOptionClick('Note') }
    ];

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        // Implement your logic here based on the selected option
    };

    return (
        <SplitButton label="Add" icon="pi pi-plus" model={options}
            className="custom-split-button custom-p-button"
            menuClassName="custom-menu"
        >

        </SplitButton>
    );
};

export default MySplitButton;
