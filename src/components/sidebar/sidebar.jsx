import React, { Component } from 'react';
import icon from './image/icon.png'
import { Sidebar, Menu, MenuItem  } from 'react-pro-sidebar';
import './sidebar.css';
class SideBar extends Component {
    state = {  } 
    
    render() { 
        return (
    <div style={{ display: 'flex', height: '100%' , width: '20%'}} class="side">

      <Sidebar>
      <div class='header' style={{display: 'flex', alignItems: 'center'}}>
        <img src={icon} width="20%" />
        <t1 >On The Reg</t1>

        </div>
        <Menu>
          <MenuItem> View Class</MenuItem>
          <MenuItem> Class Schedule</MenuItem>
          <MenuItem> Add Class</MenuItem>
          <MenuItem> Drop Class</MenuItem>
          <MenuItem> Enrollment Status</MenuItem>
        </Menu>
      </Sidebar>
      <main>
      </main>
    </div>
        );
    }
}
 
export default SideBar;