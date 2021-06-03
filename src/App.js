import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Section/>
          {/* <Footer/> */}
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
