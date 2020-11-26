import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.css'

import Home from '../containers/Home';
/* import Login from '../containers/Login';
import Register from '../containers/Register';
 */
//import NotFound from '../containers/NotFound';
import Contacts from '../containers/Contacts';
//import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
{/*     <Layout> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contacts} />
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFound} /> */}
      </Switch>
{/*     </Layout> */}
  </BrowserRouter>
)

export default App;