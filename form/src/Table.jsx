
import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const Table = () => {
    const { formData } = useContext(FormContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Contact</th>
                    <th>Degree</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {formData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.dob}</td>
                        <td>{data.contact}</td>
                        <td>{data.degree}</td>
                        <td>{data.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
