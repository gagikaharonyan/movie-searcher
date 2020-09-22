import React, { useReducer, useContext } from 'react';

const actions = {
	ADD_TO_WATCH_LIST: 'ADD_TO_WATCH_LIST',
	REMOVE_FROM_WARCH_LIST: 'REMOVE_FROM_WARCH_LIST',
};

type StateType = {
	watchList: Array<WatchListType>;
};

type WatchListType = {
	Title?: string;
	Poster?: string;
	Type?: string;
	Year?: string;
};

type DispatchType = (action: ActionType) => void;

type ActionType = {
	type: string;
	value: WatchListType;
};

const initialState: StateType = localStorage.getItem('appState')
	? (JSON.parse(localStorage.getItem('appState') ?? '') as StateType)
	: {
			watchList: [],
	  };

const AppContextState = React.createContext<StateType>(initialState);
const AppContextDispatcher = React.createContext<DispatchType>(() => {});

function appReducer(state: StateType, action: ActionType): StateType {
	let _state: StateType;
	switch (action.type) {
		case actions.ADD_TO_WATCH_LIST:
			_state = { ...state, watchList: [...state.watchList, action.value] };
			console.log();
			localStorage.setItem('appState', JSON.stringify(_state));
			return _state;
		case actions.REMOVE_FROM_WARCH_LIST:
			_state = {
				...state,
				watchList: state.watchList.filter((movie) => movie.Title !== action.value.Title),
			};
			localStorage.setItem('appState', JSON.stringify(_state));
			return _state;
	}

	return state;
}

const AppContextProvider: React.FC<{}> = (props) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	return (
		<AppContextState.Provider value={state}>
			<AppContextDispatcher.Provider value={dispatch}>{props.children}</AppContextDispatcher.Provider>
		</AppContextState.Provider>
	);
};

const useAppContext = (): [StateType, DispatchType] => {
	return [useContext(AppContextState), useContext(AppContextDispatcher)];
};

export { AppContextProvider, useAppContext, actions };
export type { StateType, DispatchType };
