import Experience from './components/Experience.jsx';
import PersonalInformation from './components/PersonalInfo.jsx';
import Footer from './components/Footer.jsx';
import { useEffect, useState } from 'react';
import './styles/App.css';
function App() {
    const [personData, setPersonData] = useState([]);
    const [workExperienceData, setWorkExperienceData] = useState([]);
    const [EducExperienceData, setEducExperienceData] = useState([]);

    useEffect(() => {
        // check if there is saved data in local storage
        const savedData = localStorage.getItem('Curriculum-Vitae');
        if (savedData) {
            console.log('Saved data found, parsing...');
            const parsedData = JSON.parse(savedData);
            setPersonData(parsedData['Personal information'] || []);
            setWorkExperienceData(parsedData['Work experience'] || []);
            setEducExperienceData(parsedData['Educational experience'] || []);
        }
        /* Run once, thanks internet */
    }, []);
    const handleSave = () => {
        const jsonData = JSON.stringify({
            'Personal information': personData,
            'Work experience': workExperienceData,
            'Educational experience': EducExperienceData,
        });
        console.log('Data saved to local storage!');
        localStorage.setItem('Curriculum-Vitae', jsonData);
    };

    return (
        <div className='app-container'>
            <header>
                <h1>Curriculum Vitae</h1>
                <h5>
                    Note: This is a sample project, no information is stored
                    anywhere except for your browsers local storage
                </h5>
            </header>
            <main>
                <form
                    action=''
                    id='CV'
                >
                    {/* save button */}
                    <button
                        type='button'
                        className='save-button'
                        onClick={handleSave}
                    >
                        Save
                    </button>
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
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
