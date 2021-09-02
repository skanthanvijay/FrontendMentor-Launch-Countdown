import React from 'react';
import Header from './Title';
import Footer from './Footer';
import FlipClock from './FlipClock';

function App() {

  return (
    <div className="App">
      <Header />
      <FlipClock type="countdown" count_to = "2022-01-01 00:00:00" />
      <Footer />
    </div>
  );
}

export default App;
