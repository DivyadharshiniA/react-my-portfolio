// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 
import Projects from './components/Projects.jsx'; 
import Contact from './components/Contact.jsx'; 
import About from './components/About.jsx'; 


const App = () => {
    return (
        <div>
            <Header />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
