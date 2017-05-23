import React, {PropTypes} from 'react';

import classNames from 'classnames/bind';
import Styles from './styles.scss';
const cx = classNames.bind(Styles)

const Footer = () => (
  <div className={'container-fluid'}>
    <div className={cx('row')}>
      <div className={cx('col-xs-12', 'col-sm-3')}>Copyright</div>
      <div className={cx('col-xs-12', 'col-sm-1', 'col-sm-offset-8')}>Logo</div>
    </div>
  </div>
)

export default Footer;
