import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import Movie from './views/Movie';
import WathList from './views/WatchList';

const Routs: React.FC = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/search/:movie" component={Search} />
		<Route path="/movie/:title" component={Movie} />
		<Route path="/watchlist" component={WathList} />
		<Route render={(): React.FunctionComponentElement<{}> => <h1>Page not found</h1>}></Route>
	</Switch>
);

export default Routs;
