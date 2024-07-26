import './CardItems.css'

import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const CardOperation = styled(Box)(({ theme }) => ({
    backgroundColor:  'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0px',
    height: '100%',
    width: '100%',
    opacity: 0,
    transition: 'opacity 0.3s',
}));


interface Props {
    device_name: string;
}

const RecipeReviewCard = ({ device_name }: Props) => {

    const [showOverlay, setShowOverlay] = useState(false);

    const handleIconButtonClick = () => {
        setShowOverlay(!showOverlay);
    };
  
  return (
    <Card className='CardItems'>
        <CardHeader
            action={
            <IconButton aria-label="settings" onClick={handleIconButtonClick}>
                <MoreVertIcon />
            </IconButton>
            }
            title={device_name}
        />
        <CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Device Id
                </Typography>
            </CardContent>
            <CardOperation style={{ opacity: showOverlay ? 1 : 0 }}>
                <p style={{padding:0,margin:0}}>Hi</p>
            </CardOperation>
        </CardActionArea>
    </Card>
  );
}


export default RecipeReviewCard;
