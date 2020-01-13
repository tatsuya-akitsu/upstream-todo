import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Actions } from '../actions/index';

export interface State {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export const initialState: State = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.handleOnEmail, (state, email) => {
    return { ...state, email };
  })
  .case(Actions.handleOnPassword, (state, password) => {
    return { ...state, password };
  });
