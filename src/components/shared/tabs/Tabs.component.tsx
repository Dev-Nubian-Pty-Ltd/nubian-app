import React, { Children, ReactElement, ReactNode, useState } from 'react';

import classes from './Tabs.module.scss';

interface TabProps {
  children: React.ReactNode;
  tabHeadings: Array<string | number | boolean>;
}
const Tabs: React.FC<TabProps> = ({ children, tabHeadings }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const tabElements: Array<ReactElement | ReactNode | any> = Children.toArray(children);

  const switchTab = async (idx: number) => {
    setSelectedIndex(idx);
  };

  const setActiveTab = (idx: number, className: string) => {
    return selectedIndex === idx ? className : '';
  };

  return (
    <div role="navigation">
      <ul className={classes['tabs']}>
        {tabHeadings.map((item, idx) => {
          return (
            <li className={`${classes['tab']} ${classes[setActiveTab(idx, 'current')]}`} onClick={() => switchTab(idx)} key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className={classes['tab-content-wrapper']}>
        {tabElements.map((item, idx) => {
          return (
            <div className={`${classes['tab-content']} ${classes[setActiveTab(idx, 'current')]}`} key={idx}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tabs };
