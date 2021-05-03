import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const modalRootRef = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className={styles.Modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal__content}>
          <button className={styles.button_x} onClick={() => this.props.onClose()}>X</button>
          {this.props.children}</div>
      </div>,
      modalRootRef,
    );
  }
}

export default Modal;
