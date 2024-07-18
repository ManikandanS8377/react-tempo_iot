import * as React from 'react';
import './MenuCard.css'
import { width } from '@fortawesome/free-solid-svg-icons/fa2';

import AddIcon from '@mui/icons-material/Add';

export default function SideNav() {
  return(
    <div className='content-area'>
      <div className='subnavbar display_flex justify_center align_center'>
        <div className='display_flex align_center half_sec'>
          <p className='paddMarZero dashboard_name'>Device Management</p>
        </div>
        <div className='display_flex align_center justify_end half_sec'>
          <p className='paddMarZero active_count left_align_lable'><span className='left_align_lable'>8</span>Active</p>
          <p className='paddMarZero inactive_count left_align_lable'><span className='left_align_lable'>8</span>Inactive</p>
        </div>
      </div>
      <div className='nextednavbar display_flex justify_center align_center'>
        <div className='display_flex align_center nes_sec_left'>
          <p className='paddMarZero dashboard_name'></p>
        </div>
        <div className='display_flex align_center justify_end nes_sec_right'>
          <div className='display_flex align_center add_option left_align_lable'>
            <AddIcon className='content-icon'/>
            <p className='paddMarZero right_align_lable'>Add Device</p>
          </div>
          
        </div>
      </div>
      <div className='main-content'>
        Hello
      </div>
    </div>
  );
}