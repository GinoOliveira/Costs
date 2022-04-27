
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProjet from './components/pages/NewProjet';
import Footer from './components/layout/Footer'
import Projects from './components/pages/projects';





function App() {
  return (
   
    <Router>
        <Navbar/>
        
        <Container custonClass= "min-height"> 
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/company" element={<Company />}></Route>
            <Route exact path="/newprojet" element={<NewProjet />}></Route>
          </Routes>
        </Container>
        <Footer/>
     </Router>
     
  );
}

export default App;
