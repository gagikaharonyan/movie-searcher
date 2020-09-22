import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { AppContextProvider } from './AppContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<AppContextProvider>
				<Router basename="/movie-searcher">
					<App />
				</Router>
			</AppContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
