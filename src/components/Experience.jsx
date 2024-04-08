import { useState } from 'react';
import '../styles/Experience.css';

function InputField({ onEdit, onRemove }) {
    return (
        <div className='input-field'>
            <input
                type='text'
                id='title'
                required
                maxLength={20}
            />

            <input
                type='text'
                id='description'
                required
                maxLength={50}
            />

            <input
                type='datetime-local'
                id='startDate'
                required
            />

            <input
                type='datetime-local'
                id='endDate'
            />

            <button onClick={onEdit}>Edit</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export default function Experience({ type }) {
    // Initiate state for the experiences.
    const [experiences, setExperiences] = useState([]);

    const addExperience = () => {
        /* add experience uses the useState setExperience method to update the experiences array */
        setExperiences([...experiences, {}]);
    };
    /* Remove experience filters the Experiences array for the given index  */
    const removeExperience = (index) => {
        setExperiences(experiences.filter((i) => i !== index));
    };
    return (
        <div className='experience-container'>
            <h2>{type} experience:</h2>
            <div className='cross-bar'>
                <div className='label'>Job title:</div>
                <div className='label'>Description:</div>
                <div className='label'>Start date:</div>
                <div className='label'>End date:</div>
                <div className='label'></div>
                <div className='label'></div>
            </div>
            {experiences.map((experience, index) => (
                <InputField
                    key={index}
                    onEdit={() => console.log('Edit click on row: ', index)} // Edit field(placeholder)
                    onRemove={() => removeExperience(index)} // Remove field
                />
            ))}
            <button onClick={addExperience}>Add {type} experience</button>
        </div>
    );
}
