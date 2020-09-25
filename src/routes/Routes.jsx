import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import App from '../components/App';

const Routes = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
);
export default Routes;
