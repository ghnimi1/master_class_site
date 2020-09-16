import React from 'react';
import {Provider} from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './component/Home/Home';
import dashboard from './partieback/dashboard';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
    <div className="app">
       <Route exact path='/' component={Home}/>
       <Route exact path='/dashboard' component={dashboard}/>
      
    </div> 
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
