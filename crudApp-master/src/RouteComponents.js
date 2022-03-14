import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddDiary from './AddDiary';
import LearnMore from './LearnMore';
import MainPage from './MainPage';
import Diary from './Diary'

function RouteComponents() {
	return (
		<div>
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/adddiary' component={AddDiary} />
				<Route path='/learnmore' component={LearnMore} />
				<Route path='/diary' component={Diary} />
			</Switch>
		</div>
	)
}

export default RouteComponents;
