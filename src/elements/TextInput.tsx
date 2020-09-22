import styled from 'styled-components';
import { themeType } from '../theme';

type InputType = {
	theme: themeType;
};

export default styled.input<InputType>`
	color: inherit;
	border: none;
	border-bottom: 1px solid ${(props): string => props.theme.secondaryColor};
	outline: none;
`;
