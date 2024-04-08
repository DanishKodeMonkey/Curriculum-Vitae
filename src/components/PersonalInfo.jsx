import '../styles/PersonalInformation.css';

function InputField({ label, id, type, value, onChange }) {
    return (
        <div className='input-field-contact'>
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

export default function PersonalInformation({ personData, setPersonData }) {
    const handleInputChange = (e, field) => {
        const updatedInfo = { ...personData, [field]: e.target.value };
        setPersonData(updatedInfo);
    };

    return (
        <div className='personal-information'>
            <h2>Contact information:</h2>
            <InputField
                label='First name:'
                id='firstName'
                type='text'
                value={personData.firstName || ''}
                onChange={(e) => handleInputChange(e, 'firstName')}
            />
            <InputField
                label='Last name: '
                id='lastName'
                type='text'
                value={personData.lastName || ''}
                onChange={(e) => handleInputChange(e, 'lastName')}
            />
            <InputField
                label='Email: '
                id='email'
                type='email'
                value={personData.email || ''}
                onChange={(e) => handleInputChange(e, 'email')}
            />
            <InputField
                label='Phone: '
                id='phoneNumber'
                type='tel'
                value={personData.phoneNumber || ''}
                onChange={(e) => handleInputChange(e, 'phoneNumber')}
            />
        </div>
    );
}
