
import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';

const degrees = [
    { id: 'CS', text: 'Computer Science' },
    { id: 'SE', text: 'Software' },
    { id: 'ME', text: 'Mechanical' },
    { id: 'EE', text: 'Electrical' },
    { id: 'TE', text: 'Telecommunication' },
];

const Form = () => {
    const { addData } = useContext(FormContext);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        dob: '',
        contact: '',
        degree: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(formValues);
        setFormValues({
            name: '',
            email: '',
            dob: '',
            contact: '',
            degree: '',
            location: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" required />
            <input type="date" name="dob" value={formValues.dob} onChange={handleChange} required />
            <input type="tel" name="contact" value={formValues.contact} onChange={handleChange} placeholder="Contact" required />
            <select name="degree" onChange={handleChange} required>
                <option value="">Select Degree</option>
                {degrees.map(degree => (
                    <option key={degree.id} value={degree.text}>{degree.id}</option>
                ))}
            </select>
            <input type="text" name="location" value={formValues.location} onChange={handleChange} placeholder="Location" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;



