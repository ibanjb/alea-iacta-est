import * as React from 'react';
import * as styles from './styles.module.scss';

const ShapeUp = () => {
  return (
    <>
      <svg
        className={styles.shape}
        viewBox="0 0 1440 95"
        preserveAspectRatio="none"
        version="1.1"
      >
        <g
          id="bg-header"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M0,0 L1440,0 L1440,81.369012 C1199.63126,90.4563373 959.631256,95 720,95 C480.368744,95 240.368744,90.4563373 0,81.369012 L0,0 Z"
            id="Rectangle-Copy"
            fill="#fff"
          ></path>
        </g>
      </svg>
    </>
  );
};
export default ShapeUp;
