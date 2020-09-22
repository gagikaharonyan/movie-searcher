import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from '../axios';
import MoivesContainer from '../components/MoviesContainer';

const Search: React.FC = () => {
	const match = useRouteMatch<{ movie: string }>();
	const [movies, setMovies] = useState<Array<any> | 'notFound'>([]);
	const searchedMovie = match.params.movie;

	useEffect(() => {
		(async (): Promise<any> => {
			setMovies([]);
			try {
				const response = await axios.get('', {
					params: {
						s: searchedMovie,
					},
				});
				setMovies(response.data.Search ?? 'notFound');
				//setMovies(searchedMovies.Search);
			} catch {
				console.log('An error occurred');
			}
		})();
	}, [searchedMovie]);

	return (
		<>
			<MoivesContainer movies={movies} />
		</>
	);
};

export default Search;
