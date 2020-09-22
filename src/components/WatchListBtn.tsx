import React from 'react';
import ButtonElem from '../elements/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(ButtonElem)`
	background-color: inherit;
	color: inherit;
	border: 1px solid ${(props): string => props.theme.secondaryColor};
	opacity: 1;
	font-size: 20px;
`;

const WatchListBtn: React.FC = () => {
	return (
		<Link to="/watchlist">
			<Button>
				<i className="fas fa-film"></i> Watchlist
			</Button>
		</Link>
	);
};

export default WatchListBtn;
