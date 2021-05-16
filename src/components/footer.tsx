import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { memo } from 'preact/compat';
import { EEFooter } from '../styles/common.style';

const Footer: FunctionComponent = (): VNode => {
  return (
    <EEFooter>
      <p>
        <span role="img" aria-label="coding">
          🧑‍💻
        </span>{' '}
        2.0.1
      </p>
      <p>
        <span role="img" aria-label="time">
          🕑
        </span>{' '}
        2021
      </p>
    </EEFooter>
  );
};

export default memo(Footer);
