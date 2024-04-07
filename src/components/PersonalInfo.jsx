import { useState } from 'react';
import './PersonalInformation.css';

function InputField({ label, id, type, value, onChange }) {
    return (
        <div className='input-field'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default function PersonalInformation() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const handleInputChange = (e, field) => {
        const updatedInfo = { ...person, [field]: e.target.value };
        setPerson(updatedInfo);
    };

    const handleSubmit = () => {
        console.log('Personal information submitted: ', person);
    };

    return (
        <div className='personal-information'>
            <InputField
                label='First name:'
                id='firstName'
                type='text'
                value={person.firstName}
                onChange={(e) => handleInputChange(e, 'firstName')}
            />
            <InputField
                label='Last name: '
                id='lastName'
                type='text'
                value={person.lastName}
                onChange={(e) => handleInputChange(e, 'lastName')}
            />
            <InputField
                label='Email: '
                id='email'
                type='email'
                value={person.email}
                onChange={(e) => handleInputChange(e, 'email')}
            />
            <InputField
                label='Phone: '
                id='phoneNumber'
                type='tel'
                value={person.phoneNumber}
                onChange={(e) => handleInputChange(e, 'phoneNumber')}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
