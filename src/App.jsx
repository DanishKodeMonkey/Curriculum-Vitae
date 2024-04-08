import Experience from './components/Experience.jsx';
import PersonalInformation from './components/PersonalInfo.jsx';

function App() {
    return (
        <form
            action=''
            id='CV'
        >
            <h1>Curriculum Vitae</h1>
            <section>
                <h2>Contact information:</h2>

                <PersonalInformation />
            </section>
            <section>
                <Experience type='Work' />
            </section>
            <section>
                <Experience type='Educational' />
            </section>
        </form>
    );
}

export default App;
