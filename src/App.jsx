import Experience from './components/Experience.jsx';
import PersonalInformation from './components/PersonalInfo.jsx';
import { useState } from 'react';
function App() {
    /* function to handle saving, placeholder to console for now */
    const [personData, setPersonData] = useState([]);
    const [workExperienceData, setWorkExperienceData] = useState([]);
    const [EducExperienceData, setEducExperienceData] = useState([]);
    const handleSave = () => {
        const jsonData = JSON.stringify({
            'Personal information': personData,
            'Work experience': workExperienceData,
            'Educational experience': EducExperienceData,
        });
        console.log('Data saved!');
        console.log('================================');
        console.log(jsonData);
    };
    return (
        <form
            action=''
            id='CV'
        >
            <h1>Curriculum Vitae</h1>
            <section>
                <PersonalInformation
                    personData={personData}
                    setPersonData={setPersonData}
                />
            </section>
            <section>
                <Experience
                    type='Work'
                    experienceData={workExperienceData}
                    setExperienceData={setWorkExperienceData}
                />
            </section>
            <section>
                <Experience
                    type='Educational'
                    experienceData={EducExperienceData}
                    setExperienceData={setEducExperienceData}
                />
            </section>
            {/* save button */}
            <button
                type='button'
                onClick={handleSave}
            >
                Save
            </button>
        </form>
    );
}

export default App;
