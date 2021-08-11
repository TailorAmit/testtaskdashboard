import React from 'react';
import { Spin } from 'antd';

import './spinner.scss';

const Spinner = ({ loading = false }) => {
  return (
    <div className="spinner-wrapper">
      <Spin
        tip={'Loading...'}
        spinning={loading}
      />
    </div>
  )
};

export default Spinner;
