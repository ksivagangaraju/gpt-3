import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WhatIsGPT3 from './components/WhatIsGPT3';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import CTA from './components/CTA';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <WhatIsGPT3 />
      <Feature1 />
      <Feature2 />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
