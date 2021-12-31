import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Grid, Stack } from '@mui/material';
import './OfferCard.css';

export default function OfferCard(props: any) {
  return (
    <Card sx={{ maxWidth: 345 }} className="offer-card">
        {/* <img id="buy-coins-banner" src={props.img} className="offer-img" alt="" /> */}
      <CardActionArea>
          <div className="offer-text">
            {props.text}
          </div>
      </CardActionArea>
      <CardActions className="offer-btn">
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Chip label={props.btnText} className='offer-btn-chip'/>
        </Grid>
      </Grid>
      </CardActions>
    </Card>
  );
}
