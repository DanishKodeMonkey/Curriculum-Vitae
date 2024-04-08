import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../styles/Experience.css';

function InputField({
    id,
    title,
    description,
    startDate,
    endDate,
    onEdit,
    onRemove,
}) {
    return (
        <div className='input-field'>
            <input
                type='text'
                id='title'
                value={title}
                onChange={(e) => onEdit('title', e.target.value)}
                maxLength={20}
            />

            <input
                type='text'
                id='description'
                value={description}
                onChange={(e) => onEdit('description', e.target.value)}
                maxLength={50}
            />

            <input
                type='date'
                id='startDate'
                value={startDate}
                onChange={(e) => onEdit('startDate', e.target.value)}
            />

            <input
                type='date'
                id='endDate'
                value={endDate}
                onChange={(e) => onEdit('endDate', e.target.value)}
            />

            <div className='buttons'>
                <button
                    type='button'
                    onClick={() => onRemove(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default function Experience({
    type,
    experienceData,
    setExperienceData,
}) {
    const addExperience = () => {
        /* add experience uses the useState setExperience method to update the experiences array */
        setExperienceData([
            ...experienceData,
            {
                id: uuid(),
                title: '',
                description: '',
                startDate: '',
                endDate: '',
            },
        ]);
    };
    /* Remove experience filters the Experiences array for the given id  */
    const removeExperience = (id) => {
        setExperienceData((prevExperiences) =>
            prevExperiences.filter((experience) => experience.id !== id)
        );
    };
    const handleEdit = (id, field, value) => {
        setExperienceData((prevExperiences) => {
            return prevExperiences.map((experience) => {
                if (experience.id === id) {
                    return {
                        ...experience,
                        [field]: value,
                    };
                }
                return experience;
            });
        });
    };
    /*     useEffect(() => {
        console.log(experienceData);
    }, [experienceData]); */
    return (
        <div className='experience-container'>
            <h2>{type} experience:</h2>
            <div className='cross-bar'>
                <div className='label'>Job title:</div>
                <div className='label'>Description:</div>
                <div className='label'>Start date:</div>
                <div className='label'>End date:</div>
                <div className='label'></div>
            </div>
            {experienceData.map((experience) => (
                <InputField
                    key={experience.id}
                    title={experience.title}
                    description={experience.description}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    onEdit={(field, value) =>
                        handleEdit(experience.id, field, value)
                    } // Edit field(placeholder)
                    onRemove={() => removeExperience(experience.id)} // Remove field
                />
            ))}
            <button
                type='button'
                onClick={addExperience}
            >
                Add {type} experience
            </button>
        </div>
    );
}
