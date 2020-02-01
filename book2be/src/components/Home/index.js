import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';

import Navigation from '../Navigation';
import Borrow from '../Borrow';
import Lend from '../Lend';
import Search from '../Search';

import * as ROUTES from '../../constants/routes';

const Home = () => (
  <Router>
    <div>
    <Navigation />
    <hr />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.BORROW} component={Borrow} />
      <Route path={ROUTES.LEND} component={Lend} />
      <Route path={ROUTES.SEARCH} component={Search} />
    </div>
  </Router>
);
export default Home;