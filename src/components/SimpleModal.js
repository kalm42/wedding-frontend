import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
  animation: ${show} 0.5s ease;
`;

const Modal = styled.div`
  width: 100%;
  background-color: var(--lightshade);
  box-shadow: var(--shallowboxshadow);
  @media screen and (min-width: 576px) {
    width: 32rem;
  }
`;

const SimpleModal = ({ onCloseRequest, children }) => {
  return (
    <ModalOverlay>
      <Modal>
        <div>{children}</div>
      </Modal>
      <button type="button" onClick={onCloseRequest}>
        Close
      </button>
    </ModalOverlay>
  );
};

SimpleModal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SimpleModal;
