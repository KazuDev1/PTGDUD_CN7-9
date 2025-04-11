import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import DetailReport from './components/DetailReport';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex font-sans">
      <Sidebar />

      <div className="flex-1 bg-gray-50 p-6 flex flex-col">
        <Header />
        <Overview />
        <DetailReport />
        <Footer />
      </div>
    </div>
  );
}

export default App;