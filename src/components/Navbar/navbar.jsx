import React, {PropTypes} from 'react';

import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Styles from './styles.scss';
const cx = classNames.bind(Styles)

const Navbar = () => (
  <div>
    <nav className={cx('navbar', 'navbar-default')}>
      <div className={cx('container-fluid')}>
        <div className={cx('navbar-header')}>
          <a className={cx('navbar-brand')} href='#'>
            Brand
          </a>
        </div>
        <ul className={cx('nav', 'navbar-nav', 'navbar-right')}>
          <li><Link to='/movies'>Movies</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar;
