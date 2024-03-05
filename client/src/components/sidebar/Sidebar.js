import React from 'react';
import classes from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { sidebarData } from '../../utils/sidebardata';

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        {sidebarData.map((data) => (
          <div key={data.id} className={classes.item}>
            {data.icon}
            <span className={classes.text}>{data.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
