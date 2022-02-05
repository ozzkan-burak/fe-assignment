import React, {useEffect} from 'react';


// components
import Header from './components/header';
import Navigation from './components/navigation';
import BreadCrumb from './components/bread-crumb';

//pages
import Layout from './pages/layout';
import Footer from './components/footer';



function App() {

 

  return (
    <div className="App">
      <Header />
      <div className="container">
        <BreadCrumb />
        <div className='content-wrapper'>
          <Navigation />
          <Layout />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
