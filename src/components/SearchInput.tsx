import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../elements/TextInput';
import { useHistory } from 'react-router-dom';

type InputType = { variant?: string; inHeader?: boolean };
const Input = styled(TextInput).attrs({
	placeholder: 'type a name...',
})<InputType>`
	width: ${(props): string => (props.inHeader ? '400px' : '600px')};
	height: ${(props): string => (props.inHeader ? '40px' : '60px')};
	font-size: ${(props): string => (props.inHeader ? '1.2em' : '1.7em')};
	padding: 3px 7px;
`;

const Root = styled.div`
	display: flex;
`;

type Types = {
	initialInputValue?: string;
	inHeader?: boolean;
};

const SearchInput: React.FC<Types> = (props) => {
	const [text, setText] = useState<string>(props.initialInputValue ?? '');
	const history = useHistory();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		history.push(`/search/${text}`);
	};

	return (
		<Root>
			<form onSubmit={handleSubmit}>
				<Input
					onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setText(event.target.value)}
					value={text}
					inHeader={props.inHeader}
					required
				/>
				<button type="submit">
					<i className="fas fa-search" style={{ fontSize: '27px', margin: 'auto 10px' } as object}></i>
				</button>
			</form>
		</Root>
	);
};

export default SearchInput;
