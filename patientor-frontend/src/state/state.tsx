import React, { createContext, useContext, useReducer } from 'react';
import { Patient } from '../types';

import { Action } from './reducer';

//--Type for the State
export type State = {
  patients: { [id: string]: Patient };
  singlePatient?: Patient;
};
//-------------------

//--Initial State, Single 'Patient' key
//--With empty object as value
const initialState: State = {
  patients: {},
};
//-------------------

//--First parameter is initial state variable above
//--Second parameter is a function that returns initialState
export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);
//-------------------

//--Type for the Provider
type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};
//-------------------

//
export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

//--Creating a Custom Hook Called useStateValue()
//--Which is equivalent to calling
//--useContext(StateContext)
export const useStateValue = () => useContext(StateContext);
//-------------------
