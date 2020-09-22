import styled from 'styled-components';

export default styled.button<{ primary?: string }>`
	background: ${(props): string => props.theme.primaryColor ?? 'white'};
	width: 200px;
	height: 40px;
	border-radius: 3px;
	border: none;
	color: white;
`;
