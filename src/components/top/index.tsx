import * as React from 'react';
import AppLinkButton from '../../parts/atoms/AppLinkButton';
import labels from '../../assets/doc/top';
import logo from '../../assets/images/icon_service_logo.svg';
import thumbnail from '../../assets/images/top/bg_main_thumbnail.svg';

import ClassList from '../../plugins/classList';
import styles from '../../assets/scss/style.module.scss';
const classNames = ClassList(styles);

const TopComponent: React.FC = () => {
  const container = React.useRef({} as HTMLDivElement);
  React.useEffect(() => {
    container.current.style.height = `${window.innerHeight}px`;
  });
  return (
    <div ref={container} className={classNames.lTop}>
      <div className={classNames.pTopContent}>
        <div className={classNames.pTopIntro}>
          <img src={logo} alt="" />
          <p className={classNames.pTopCopy} dangerouslySetInnerHTML={{ __html: labels.copy }}></p>
          <ul className={classNames.pTopList}>
            {labels.list.map((item, index) => {
              return (
                <li key={index}>
                  <img src={require(`../../assets/images/top/icon_${item.icon}.svg`).default} alt="" />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classNames.pTopContent}>
        <div className={classNames.pTopBtnBox}>
          <AppLinkButton
            name={labels.buttons.signup.name}
            label={labels.buttons.signup.label}
            target={labels.buttons.signup.target}
          />
          <p className={classNames.pTopBtnLabel}>{labels.labels.signin}</p>
          <AppLinkButton
            name={labels.buttons.signin.name}
            label={labels.buttons.signin.label}
            target={labels.buttons.signin.target}
          />
        </div>
        <img src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default TopComponent;
