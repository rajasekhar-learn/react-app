import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AnalysisDashBoard from './components/analysis-dashboard'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Header />
       <AnalysisDashBoard />
       <br/>
       <br/>
       <Footer />
       <br/>
    </div>
  );
}

export default App;
