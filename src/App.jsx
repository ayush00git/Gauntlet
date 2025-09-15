import React, { useState } from 'react';
import FarmerLogin from './components/farmerLogin';
import CreateFarmer from './components/createFarmer';

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login' or 'register'

  const showLogin = () => {
    setCurrentView('login');
  };

  const showRegister = () => {
    setCurrentView('register');
  };

  return (
    <div className="App">
      {currentView === 'login' ? (
        <FarmerLogin onNavigateToRegister={showRegister} />
      ) : (
        <CreateFarmer onBackToLogin={showLogin} />
      )}
    </div>
  );
}

export default App;