import React from 'react';
import Hero from './components/Hero';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';


import About from './components/About';

function App() {
  return (
    <div className="app-container">
      {/* Optional subtle noise texture or pattern can be added here via CSS overlay */}
      <main>
        <Hero />
        <About />

        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
