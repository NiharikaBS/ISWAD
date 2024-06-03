import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import PngIcon from '@/baseComponents/ReusableComps/PngIcon';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import { FOLLOW } from '../constants';
import styles from '../Footer.module.scss';

const Follow = () => {
  return (
    <>
      <Div className="global-font-title f-b m-b-16 height-px-30">Follow</Div>
      <Div type="flex" vAlign="start" className={cx(styles.heightForText, '')}>
        {FOLLOW?.map((item, idx) => (
          <Anchor to={item?.url} internal anchorType={ANCHOR_TYPES.noEffect} className="m-r-8">
            <Div type="flex" vAlign="center" key={idx} className="m-b-8">
              <Div>
                <PngIcon type={item?.icon} width={30} />
              </Div>
              <Div>{item?.value}</Div>
            </Div>
          </Anchor>
        ))}
      </Div>
    </>
  );
};

export default Follow;
