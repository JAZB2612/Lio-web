import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Requirements from './components/Requirements';
import ApplicationForm from './components/ApplicationForm';
import SearchLicense from './components/SearchLicense';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Requirements />
        <ApplicationForm />
        <SearchLicense />
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
