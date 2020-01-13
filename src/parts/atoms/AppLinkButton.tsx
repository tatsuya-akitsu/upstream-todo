import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/scss/style.module.scss';
import ClassList from '../../plugins/classList';
const classNames = ClassList(styles);

interface IProps {
  name: String;
  label: String;
  target: String;
}

const AppLinkButton: React.FC<IProps> = ({ name, label, target }) => {
  const type = name === '--primary' ? classNames.Primary : classNames.Secondary;
  return (
    <Link to={`${target}`} className={`${classNames.mAppBtn} ${type}`}>{label}</Link>
  );
};

export default AppLinkButton;
