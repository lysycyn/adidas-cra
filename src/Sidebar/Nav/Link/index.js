import React from 'react';
import cn from 'classnames'
import './styles.css'

export default (props) => {
  const {isActive = false, href, name} = props;
  const classNameActive = {
    "menu__item_active": !!isActive
  };
  return (
      <a className={cn('menu__item', classNameActive)}
          href={href}>{name}</a>
  );
};
