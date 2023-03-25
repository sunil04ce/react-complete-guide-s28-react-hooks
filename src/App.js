import React, { useContext } from 'react';
import { AuthContext } from './context/auth-context';
import Auth from './components/Auth';
import Ingredients from './components/Ingredients/Ingredients';

const App = props => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />
  }
  return content;
};

export default App;
