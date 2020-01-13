import * as React from 'react';
import { SigninHandler } from '../../containers/signin/index';
import AppGlobalHeader from '../../parts/molecules/AppGlobalHeader';
import AppCheckbox from '../../parts/molecules/AppCheckbox';
import labels from '../../assets/doc/signup';
import logo from '../../assets/images/icon_service_logo.svg';
import thumbnail from '../../assets/images/signup/bg_signup_thumbnail.svg';

import ClassList from '../../plugins/classList';
import styles from '../../assets/scss/style.module.scss';
const classNames = ClassList(styles);

interface OwnProps {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

type State = {
  name: string;
  email: string;
  password: string;
};

type Props = OwnProps & SigninHandler;
class SignupComponent extends React.Component<Props, State> {
  container: HTMLDivElement | null = null;
  wrapper: HTMLDivElement | null = null;

  refContainer = (element: HTMLDivElement) => {
    this.container = element;
  };
  refWrapper = (element: HTMLDivElement) => {
    this.wrapper = element;
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    console.log(classNames);
    if (this.container) {
      this.container.style.height = `${window.innerHeight}px`;
    }
    if (this.wrapper) {
      this.wrapper.style.height = `${window.innerHeight}px`;
    }
  }

  handleChange = (e: any) => {
    switch (e.target.name) {
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
      case 'name':
        this.setState({ name: e.target.value });
        break;
      default:
        break;
    }
  };

  handleOnProps = (e: any) => {
    switch (e.target.name) {
      case 'email':
        this.props.handleChangeEmail(this.state.email);
        break;
      case 'password':
        this.props.handleChangePassword(this.state.password);
        break;
      default:
        break;
    }
  };

  handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.handleOnFirebaseLogin(this.state.email, this.state.password);
  };

  handleSocialLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (e.currentTarget.getAttribute('data-name')) {
      case 'Google':
        this.props.handleOnGoogleLogin();
        break;
      case 'Facebook':
        this.props.handleOnFacebookLogin();
        break;
      case 'Yahoo':
        this.props.handleOnYahooLogin();
        break;
      default:
        break;
    }
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={classNames.lAccount} ref={this.refContainer}>
        <AppGlobalHeader isLoggedIn={this.props.isLoggedIn} />
        <div className={classNames.lWrapper} ref={this.refWrapper}>
          <div className={classNames.lGlobalInner}>
            <img className={classNames.pGlobalLogo} src={logo} alt="" />
            <p className={classNames.pGlobalLabel}>{labels.labels.label}</p>
            <div className={classNames.pSocialBtnArea}>
              {labels.social.map((item, i) => {
                return (
                  <button
                    type="button"
                    data-name={item.name}
                    className={`${classNames.mAppBtn} ${classNames.Inclusion} ${classNames[item.name]}`}
                    key={i}
                    onClick={this.handleSocialLogin}
                  >
                    <img src={require(`../../assets/images/icon/icon_${item.icon}.svg`).default} alt="" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className={classNames.pAccountForm}>
              <div className={classNames.mFormControl}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  onBlur={this.handleOnProps}
                />
                <label>{labels.labels.email}</label>
              </div>
              <div className={classNames.mFormControl}>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  onBlur={this.handleOnProps}
                />
                <label>{labels.labels.password}</label>
              </div>
              <div className={classNames.mFormControl}>
                <input type="text" name="name" value={name} onChange={this.handleChange} onBlur={this.handleOnProps} />
                <label>{labels.labels.name}</label>
              </div>
              <div className={classNames.pAccountCheck}>
                <AppCheckbox
                  id={labels.privacyPolicy.id}
                  label={labels.privacyPolicy.label}
                  property={labels.privacyPolicy.property}
                />
                <span>{labels.labels.privacy}</span>
              </div>
              <button
                type="button"
                className={`${classNames.mAppBtn} ${classNames.Primary}`}
                onClick={this.handleLogin}
              >
                {labels.buttons.signup.label}
              </button>
            </div>
          </div>
          <img className={classNames.pGlobalThumbnail} src={thumbnail} alt="" />
        </div>
      </div>
    );
  }
}

export default SignupComponent;
