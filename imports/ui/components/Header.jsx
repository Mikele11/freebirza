import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <div className="container">
          <input type="checkbox" id="hmt" className="hidden-menu-ticker"/>
          <label className="btn-menu" htmlFor="hmt">
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
          </label>
          <ul className="hidden-menu">
            <li><NavLink activeClassName="active" exact to="/">Список предложений</NavLink></li>
            <li><NavLink activeClassName="active" to="/create">Создать заявку</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">О нас</NavLink></li>
            <li><LoginButtons align='left' /></li>
          </ul>
        </div>
      </header>
    );
  }
}
