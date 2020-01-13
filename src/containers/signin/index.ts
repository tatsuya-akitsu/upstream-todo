import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../actions/index';
import SigninComponent from '../../components/signin/index';
import { AppState } from '../../store/index';
import firebase from '../../firebase/index';

export interface SigninHandler {
  handleChangeEmail(value: string): void;
  handleChangePassword(value: string): void;
  handleOnFirebaseLogin(email: string, password: string): void;
  handleOnGoogleLogin(): void;
  handleOnFacebookLogin(): void;
  handleOnYahooLogin(): void;
}

const mapStateToProps = (appState: AppState) => {
  return {
    email: '',
    password: '',
    isLoggedIn: false,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleChangeEmail: (value: string) => {
      dispatch(Actions.handleOnEmail(value));
    },
    handleChangePassword: (value: string) => {
      dispatch(Actions.handleOnPassword(value));
    },
    handleOnFirebaseLogin: (email: string, password: string) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success login');
        })
        .catch(err => {
          console.log(err, 'error login');
        });
    },
    handleOnGoogleLogin: () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(() => {
          console.log('success google auth');
        })
        .catch(err => {
          console.log(err, 'error google auth');
        });
    },
    handleOnFacebookLogin: () => {
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(() => {
          console.log('success facebook auth');
        })
        .catch(err => {
          console.log(err, 'error facebook auth');
        });
    },
    handleOnYahooLogin: () => {
      let provider = new firebase.auth.OAuthProvider('yahoo.com');
      firebase.auth().signInWithPopup(provider)
        .then(() => {
          console.log('success yahoo auth');
        })
        .catch(err => {
          console.log(err, 'error yahoo auth');
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninComponent);
