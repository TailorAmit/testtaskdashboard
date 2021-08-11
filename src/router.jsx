import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import { SideBar } from 'Layout/sidebar/index';
import Spinner from 'Components/Spinner';

const Dashboard = React.lazy(() => import('Pages/Dashboard/index'))

const Routers = () => {
  return (
    <Suspense fallback={<Spinner loading={true} />}>
      <Switch>
        <SideBar path="/" component={Dashboard} exact />
      </Switch>
    </Suspense>
  )
};

export default Routers;
