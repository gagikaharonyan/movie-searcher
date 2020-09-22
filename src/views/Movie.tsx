import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import axios from '../axios';
import { Spinner } from 'react-bootstrap';
import { useAppContext, actions } from '../AppContext';
import Button from '../elements/Button';

const MovieContainer = styled.div`
	width: 1050px;
	display: flex;
	margin: 10px auto;
`;

const MainInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const Row = styled(MainInfoContainer)``;

const Poster = styled.div`
	width: 35%;
	height: 480px;
`;

const Info = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
`;

const Text = styled.span<{ variant?: 'title' | 'info' | 'plot' }>`
	font-size: ${(props): string => (props.variant === 'title' ? '2' : props.variant === 'info' ? '.8' : '1')}em;
	margin: 5px 15px;
	white-space: ${(props): string => (props.variant === 'info' ? 'nowrap' : '')};
	text-align: justify;
	opacity: ${(props): string => (props.variant === 'info' ? '.9' : '')};
`;

const Movie: React.FC = () => {
	const match = useRouteMatch<{ title: string }>();
	const [movie, setMovie] = useState<any | 'notFound'>({});
	const title = match.params.title;
	const [appState, appDispatch] = useAppContext();

	console.log(appState);

	useEffect(() => {
		(async (): Promise<any> => {
			setMovie({});
			try {
				const response = await axios.get('', {
					params: {
						t: title,
						plot: 'full',
					},
				});
				setMovie(response.data ?? 'notFound');
			} catch {
				console.log('An error occurred');
			}
		})();
	}, [title]);

	const isInWatchList = (): boolean =>
		Boolean(appState && appState.watchList.find((m): boolean => m.Title === movie.Title));

	const handleWatchListBtn = (): void => {
		const { Title, Poster, Year, Type } = movie;
		appDispatch({
			type: isInWatchList() ? actions.REMOVE_FROM_WARCH_LIST : actions.ADD_TO_WATCH_LIST,
			value: { Title, Poster, Year, Type },
		});
	};

	return (
		<MovieContainer>
			{movie === 'notFound' ? (
				<h2>Movie not found</h2>
			) : Object.keys(movie).length !== 0 ? (
				<>
					<MainInfoContainer>
						<Poster>
							<img src={movie.Poster}></img>
						</Poster>
						<Info>
							<Text variant="title">{movie.Title}</Text>
							<Row>
								<Text variant="info">
									<i className="far fa-clock"></i>
									{' ' + movie.Runtime}
								</Text>
								<Text variant="info">
									<i className="far fa-calendar-check"></i> {' ' + movie.Released}
								</Text>
								<Text variant="info">
									<i className="fas fa-globe-americas"></i>
									{' ' + movie.Country}
								</Text>
							</Row>
							<Text variant="info">{movie.Genre}</Text>
							<Text variant="plot">{movie.Plot}</Text>
						</Info>
					</MainInfoContainer>
					<Button onClick={handleWatchListBtn}>{isInWatchList() ? 'Remove' : 'Add to watchlist'}</Button>
				</>
			) : (
				<Spinner animation="border" />
			)}
		</MovieContainer>
	);
};

export default Movie;
