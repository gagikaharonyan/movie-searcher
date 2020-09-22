import React from 'react';
import styled from 'styled-components';
import { themeType } from '../theme';
import { Link } from 'react-router-dom';

type PropTypes = {
	poster: string;
	title: string;
	type: string;
	year: string;
};

const Root = styled.div`
	position: relative;
	width: 200px;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const Poster = styled.div`
	width: 100%;
	height: 310px;
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 5px;
`;

const Info = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
`;

const Text = styled.span<{ variant?: 'title' | 'category'; theme: themeType }>`
	font-size: ${(props): string =>
		props.variant === 'title' ? '1' : props.variant === 'category' ? '0.8' : '0.9'}rem;
	border: ${(props): string => (props.variant === 'category' ? `1px solid ${props.theme.secondaryColor}` : '.9')};
	padding: ${(props): string => (props.variant === 'category' ? `0px 5px` : '0px')};
`;

const MovieCard: React.FC<PropTypes> = ({ poster, title, type, year }) => {
	return (
		<Root>
			<Link to={`/movie/${title}`}>
				<Poster>
					<img src={poster}></img>
				</Poster>
			</Link>
			<Link to={`/movie/${title}`} style={{ maxWidth: '100%' }}>
				<Text variant="title">{title}</Text>
			</Link>
			<Info>
				<Text>{year}</Text>
				<Text variant="category">{type}</Text>
			</Info>
		</Root>
	);
};

export default MovieCard;
