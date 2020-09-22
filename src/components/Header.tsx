import React from 'react';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import { Link, useLocation } from 'react-router-dom';
import WatchListBtn from './WatchListBtn';
import Logo from '../elements/Logo';

const Root = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 1;
	width: 100%;
	height: 60px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: inherit;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
`;

const Header: React.FC = () => {
	const location = useLocation();

	if (location.pathname === '/') {
		return <div></div>;
	}
	return (
		<Root>
			<Link to="/">
				<Logo>Movie Searcher</Logo>
			</Link>
			<SearchInput inHeader />
			{location.pathname !== '/watchlist' && <WatchListBtn />}
		</Root>
	);
};

export default Header;
