import React from 'react';
import {Provider} from 'react-redux';
import Store from './store';
import Home from './src/Components/Home'
const App = () => {
  
    return (
      <Provider store={Store}>
        <Home />
       </Provider>
    );
}
export default App;