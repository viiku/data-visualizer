import React from 'react';
import Header from './Header';
import Main from './Main';
import Feature from './Feature';
import Footer from './Footer';
// import Navbar from './Navbar';

function HomePage() {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header/>

      {/* <Navbar /> */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <Main/>

      {/* Features Section */}
      <Feature/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default HomePage;