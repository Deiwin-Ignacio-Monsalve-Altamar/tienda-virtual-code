import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.css'
import '../assets/styles/global.css';

import Home from '../containers/Home';
import Contacts from '../containers/Contacts';
import SingUp from '../containers/SingIn';
import Men from '../containers/Men';
import Women from '../containers/Women'
import Child from '../containers/Childrens';
import Babys from '../containers/Babys';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contacts} />
        <Route exact path="/login" component={SingUp} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/babys" component={Child} />
        <Route exact path="/childrens" component={Babys} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;