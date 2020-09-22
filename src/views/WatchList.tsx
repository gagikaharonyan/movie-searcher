import React from 'react';
import { useAppContext } from '../AppContext';
import MoivesContainer from '../components/MoviesContainer';

const Search: React.FC = () => {
	const [appState, appDispatch] = useAppContext();
	const movies = appState.watchList;

	return (
		<>
			<MoivesContainer movies={movies.length !== 0 ? movies : 'notFound'} />
		</>
	);
};

export default Search;
