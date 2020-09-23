import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from '../axios';
import MoivesContainer from '../components/MoviesContainer';
import debounce from 'lodash.debounce';
import { Spinner } from 'react-bootstrap';

const Search: React.FC = () => {
	const match = useRouteMatch<{ movie: string }>();
	const [movies, setMovies] = useState<Array<any> | 'notFound'>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const searchedMovie = match.params.movie;

	const LoadMovies = async (): Promise<any> => {
		if (page !== 0) {
			setIsLoading(true);
			try {
				const response = await axios.get('', {
					params: {
						s: searchedMovie,
						page,
					},
				});

				setIsLoading(false);

				if (response.data.Search) {
					const _movies = response.data.Search.filter((movie: any) => movie.Poster !== 'N/A');
					if (movies.length > 0) {
						setMovies([...(movies as Array<any>), ..._movies]);
					} else {
						setMovies(_movies);
					}
				} else {
					if (page === 1) {
						setMovies('notFound');
					} else {
						setPage(0);
					}
				}
			} catch {
				console.log('An error occurred');
			}
		}
	};

	const scrollHandler = debounce(() => {
		if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.offsetHeight) {
			setPage((prev) => {
				console.log(prev);
				return prev !== 0 ? prev + 10 : 0;
			});
		}
	}, 100);

	useEffect(() => {
		window.onscroll = scrollHandler;
	}, []);

	useEffect(() => {
		LoadMovies();
	}, [page]);

	useEffect(() => {
		setMovies([]);
	}, [searchedMovie]);

	useEffect(() => {
		if (movies.length === 0) LoadMovies();
	}, [movies]);

	return (
		<>
			<MoivesContainer movies={movies} />
			{isLoading && <Spinner style={{ 'margin-top': '50px' } as object} animation="border" />}
		</>
	);
};

export default Search;
