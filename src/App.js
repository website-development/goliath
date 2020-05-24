import React, { useState } from 'react';
import { useRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

import SideNav from './components/SideNav';

const App = () => {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);
  const [isActive, setIsActive] = useState(false);

  return (
    <BrowserRouter>
      {isActive && <div className="cover-layer black-layer"></div>}
      {isAuthenticated && <SideNav setIsActive={setIsActive} isActive={isActive} />}
      {routes}
    </BrowserRouter>
  );
}

export default App;
