import React from "react";
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory, History, LocationState } from 'history';
import Capture from './pages/Capture';
import Offer from './pages/Offer';
import Qualification from './pages/Qualification';
import Thanks from "./pages/Thanks";
// import Sales from './pages/Sales';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App: React.FunctionComponent = () => {
  const history: History<LocationState> = createBrowserHistory({ basename: '/' });
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={Capture}/>
                <Route path="/qualification" exact={true} component={Qualification}/>
                <Route path="/offer" component={Offer}/>
                <Route path="/thanks" component={Thanks}/>
            </Switch>
        </Router>
    );
};

export default App;
