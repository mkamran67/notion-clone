import React from 'react';
import { Provider } from 'react-redux'; // -> Responsible for connecting
import store from './store'; // Redux Store
import './styles/main.css'; // CSS

function App() {
  return (
    <Provider store={store}>
      <div className='nt-clone'></div>
    </Provider>
  );
}

export default App;
