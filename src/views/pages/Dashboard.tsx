import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import '../../assets/css/main.css'

import TopNav  from '../../components/TopNav/TopNav'

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
  return (
    <GridContainer  container spacing={0}>
      <Grid xs={12}>
        <Item sx={{ height: '8vh' }}>
          <TopNav />
        </Item>
      </Grid>
      <Grid xs={2}>
        <Item sx={{ height: '92vh' }}>xs=2</Item>
      </Grid>
      <Grid xs={10}>
        <Item sx={{ height: '92vh' }}>xs=10</Item>
      </Grid>
    </GridContainer >
  );
}
