import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Markqee from './components/Markqee'
import Markqee_top from './components/Markqee-top'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Markqee_top/>
      <Featured />
      <Markqee/>
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
