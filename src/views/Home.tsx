import React from 'react';
import SearchInput from '../components/SearchInput';
import LogoElm from '../elements/Logo';
import styled from 'styled-components';
import WatchListBtn from '../components/WatchListBtn';

const Logo = styled(LogoElm)`
	font-size: 50px;
	margin-bottom: 10px;
`;

const ButtonBar = styled.div`
	position: absolute;
	top: 10px;
	right: 15px;
`;

const Home: React.FC = () => {
	return (
		<>
			<div style={{ 'margin-top': '150px' } as object}>
				<Logo>MOVIE SEARCHER</Logo>
				<SearchInput />
			</div>
			<ButtonBar>
				<WatchListBtn />
			</ButtonBar>
		</>
	);
};

export default Home;
