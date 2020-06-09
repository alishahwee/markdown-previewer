import React from 'react';
import Info from './Info.js';

function Header(props) {
  return (
    <div className="header">
      <h1 className="header__title">Live Markdown Previewer</h1>
      <Info classname="header__info" />
    </div>
  );
}

export default Header;
