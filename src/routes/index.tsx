import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Top from '../containers/top/index';
import Signin from '../containers/signin/index';
import Signup from '../containers/signup/index'

const router = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Top} />
      <Route path={`/signin`} component={Signin} />
      <Route path={`/signup`} component={Signup} />
    </Switch>
  );
};

export default router;
