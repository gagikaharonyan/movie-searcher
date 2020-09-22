import styled from 'styled-components';

export default styled.span`
	font-size: 25px;
	font-family: 'Anton', sans-serif;
	color: ${(props): string => props.theme.primaryColor};
`;
