import { actionCreatorFactory } from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const Actions = {
  handleOnEmail: actionCreator<string>('ACTIONS_HANDLE_ON_EMAIL'),
  handleOnPassword: actionCreator<string>('ACTIONS_HANDLE_ON_PASSWORD'),
  handleOnFirebaseLogin: actionCreator('ACTIONS_HANDLE_ON_AUTH_LOGIN'),
  handleOnGoogleLogin: actionCreator('ACTIONS_HANDLE_ON_GOOGLE_AUTH'),
  handleOnFacebookLogin: actionCreator('ACTIONS_HANDLE_ON_FACEBOOK_AUTH'),
  handleOnYahooLogin: actionCreator('ACTIONS_HANDLE_ON_YAHOO_LOGIN'),
};
