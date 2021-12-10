import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main id="content">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
