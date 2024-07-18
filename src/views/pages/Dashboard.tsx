import * as React from 'react';
import { styled } from '@mui/material/styles';

import { useState } from 'react';


import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import '../../assets/css/main.css'

import TopNav  from '../../components/TopNav/TopNav'
import SideNav  from '../../components/SideNav/SideNav'
import MenuCard from '../../components/MenuCard/MenuCard'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderRadius: 0,
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: 0,
  margin: 0,
}));

export default function Dashboard() {
  const [selectedPath, setSelectedPath] = useState('/');

  const handleNavigation = (path: string) => {
    setSelectedPath(path);
  };

  return (
    <GridContainer  container spacing={0}>
      <Grid xs={12}>
        <Item sx={{ height: '8vh' }}>
          <TopNav />
        </Item>
      </Grid>
      <Grid xs={1}>
        <Item sx={{ height: '92vh' }}>
          <SideNav navigate={handleNavigation}/>
        </Item>
      </Grid>
      <Grid xs={11}>
        <Item sx={{ height: '92vh' }}>
          {(selectedPath === '/dashboard/dashboard' || selectedPath === '/') && <MenuCard />}
          {selectedPath === '/management/assert' && <MenuCard />}
        </Item>
      </Grid>
    </GridContainer >
  );
}
