import React from 'react';
import Routs from './routs';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Container fluid="md">
				<Routs></Routs>
			</Container>
		</>
	);
};

export default App;
