
import React, { useState } from 'react';
import { FormProvider } from './FormContext';
import Form from './Form';
import Table from './Table';

const Tabs= () => {
    const [showTable, setShowTable] = useState(false);

    return (
        <FormProvider>
            <div>
                <button onClick={() => setShowTable(false)}>Show Form</button>
                <button onClick={() => setShowTable(true)}>Show Data</button>
                {showTable ? <Table /> : <Form />}
            </div>
        </FormProvider>
    );
};

export default Tabs;

