import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import ListUsers from '../components/listUsers';
import Modal from '../components/modal';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <ListUsers />
      <Modal />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
