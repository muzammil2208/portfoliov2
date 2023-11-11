
import Background from './Components/Background';
import Jumbotron from './Components/Jumbotron';
import Skills from './Components/Skills';
import ModeButton from './Components/ModeButton';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div class="container">
      <ModeButton/>
      <Jumbotron/>
      <Background/>
      <Skills/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
