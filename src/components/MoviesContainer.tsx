import React from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { Spinner } from 'react-bootstrap';

const Root = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 10px;
`;

const MoviesContainer: React.FC<{ movies: Array<any> | 'notFound' }> = ({ movies }) => {
	return (
		<>
			<Root>
				{movies === 'notFound' ? (
					<h2>Movie not found</h2>
				) : movies.length !== 0 ? (
					<>
						{movies.map((movie: any, index) => (
							<MovieCard
								key={index}
								poster={movie.Poster}
								title={movie.Title}
								type={movie.Type}
								year={movie.Year}
							/>
						))}
					</>
				) : (
					<Spinner animation="border" />
				)}
			</Root>
		</>
	);
};

export default MoviesContainer;
