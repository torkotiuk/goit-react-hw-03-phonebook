import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';

// allyProps --- accessability props
const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  // 'aria-label': PropTypes.string.isRequired,
  'aria-label': PropTypes.string,
};
// 'aria-label' - is exception to the React rules to name props via Camel-Case

export default IconButton;
