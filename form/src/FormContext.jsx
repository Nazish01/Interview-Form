
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);
   // const savedData = localStorage.getItem('formData');

    const addData = (data) => {
        setFormData([...formData, data]);
    };

    return (
        <FormContext.Provider value={{ formData, addData }}>
            {children}
        </FormContext.Provider>
    );
};






