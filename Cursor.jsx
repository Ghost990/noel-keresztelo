import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import CursorImage from '../../assets/cursor.svg';

const pulse = keyframes`
    50% {
    opacity: 0;
  }
`;

const pulseRing = keyframes` 
  0% {
    transform: scale(0.33);
  }
  80%,
  100% {
    opacity: 0;
  }
`;

const pulseDot = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`;

const CursorWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 30%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  margin-top: 10px;
  &.left {
    animation: ${pulse} 2s 10s infinite;
  }
  &.right {
    animation: ${pulse} 3s infinite;
  }
  .pulsating-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 30px;
    height: 30px;
  }
  .pulsating-circle:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: #01a4e9;
    -webkit-animation: ${pulseRing} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    animation: ${pulseRing} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }
  .pulsating-circle:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    -webkit-animation: ${pulseDot} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
    animation: ${pulseDot} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }
`;

const Cursor = ({ position }) => {
  return (
    <>
      {position === 'left' ? (
        <CursorWrapper className="left">
          <div className="pulsating-circle"></div>
        </CursorWrapper>
      ) : (
        <CursorWrapper className="right">
          <div className="pulsating-circle"></div>
        </CursorWrapper>
      )}
    </>
  );
};

export default Cursor;

Cursor.propTypes = {
  position: PropTypes.string,
};
