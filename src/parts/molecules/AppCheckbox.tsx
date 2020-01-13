import * as React from 'react';
import styles from '../../assets/scss/style.module.scss';
import ClassList from '../../plugins/classList';
const classNames = ClassList(styles);

interface IProps {
  id: Number;
  label: String;
  property: String;
}

const AppCheckbox: React.FC<IProps> = ({ id, label, property }) => {
  return (
    <span className={`${classNames.mAppCheckbox}`}>
      <input type="checkbox" id={`${property}${id}`} />
      <label htmlFor={`${property}${id}`}>
        <span>{label}</span>
      </label>
    </span>
  );
};

export default AppCheckbox;
