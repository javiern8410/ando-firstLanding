import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory, History, LocationState } from 'history';
import Capture from './pages/Capture';
import Offer from './pages/Offer';
import Qualification from './pages/Qualification';
import DirectQualification from "./pages/DirectQualification";
import Thanks from "./pages/Thanks";

import AOS from "aos";
import "aos/dist/aos.css";

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
	gtmId: 'GTM-PV4LQ97'
}

TagManager.initialize(tagManagerArgs)

// import Sales from './pages/Sales';

AOS.init();

const App: React.FunctionComponent = () => {
	const history: History<LocationState> = createBrowserHistory({ basename: '/' });
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" exact={true} component={Capture} />
				<Route path="/qualification" exact={true} component={Qualification} />
				<Route path="/direct-qualification" exact={true} component={DirectQualification} />
				<Route path="/offer" exact={true} component={Offer} />
				<Route path="/thanks" exact={true} component={() => <Thanks step="capture" />} />
				<Route path="/qualification-thanks" exact={true} component={() => <Thanks step="qualification" />} />
				<Route path="*" component={Capture} />
			</Switch>
		</Router>
	);
};

export default App;
