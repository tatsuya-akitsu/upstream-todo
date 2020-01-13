import * as React from 'react';
import { Link } from 'react-router-dom';
import AppLinkButton from '../atoms/AppLinkButton';
import labels from '../../assets/doc/common';
import icon from '../../assets/images/icon_service_icon.svg';

import ClassList from '../../plugins/classList';
import styles from '../../assets/scss/style.module.scss';
const classNames = ClassList(styles);

interface OwnProps {
  isLoggedIn: boolean;
}

const AppGlobalHeader = (props: OwnProps) => {
  const isLoggedIn = () => {
    if (location.href === 'signin') {
      return (
        <div className={classNames.lHeaderInner}>
          <AppLinkButton
            name={labels.buttons.header.signup.name}
            label={labels.buttons.header.signup.label}
            target={labels.buttons.header.signup.target}
          />
        </div>
      );
    }
    return (
      <div className={classNames.lHeaderInner}>
        <AppLinkButton
          name={labels.buttons.header.signin.name}
          label={labels.buttons.header.signin.label}
          target={labels.buttons.header.signin.target}
        />
      </div>
    );
  };
  return (
    <header className={classNames.lHeader}>
      {!props.isLoggedIn ? (
        isLoggedIn()
      ) : (
        <div className={`${classNames.lHeaderInner} ${classNames.Flex}`}>
          <Link to={`/dashboard`}>
            <img src={icon} alt="" />
          </Link>
          <nav className="p-header_nav">
            <ul>
              {labels.labels.header.list.map((item, i) => {
                return (
                  <li key={i}>
                    <Link to={item.target}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppGlobalHeader;
