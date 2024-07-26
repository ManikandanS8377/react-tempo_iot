import './DeviceManagement.css'

import AddIcon from '@mui/icons-material/Add';
import CardItems from '../CardItems/CardItems';
import  Container  from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';



export default function DeviceManagement() {
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
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={4}>
              <CardItems device_name="Device1"/>
            </Grid>
          </Grid>
        </Container>
        {/* <div className='card-wrapping-section'>
          <CardItems device_name="Device1"/>
          <CardItems device_name="Device2"/>
          <CardItems device_name="Device3"/>
          <CardItems device_name="Device4"/>
          <CardItems device_name="Device5"/>
          <CardItems device_name="Device6"/>
          <CardItems device_name="Device7"/>
          <CardItems device_name="Device8"/>
          <CardItems device_name="Device9"/>
          <CardItems device_name="Device10"/>
        </div> */}
      </div>
    </div>
  );
}