import { Chip, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import './Home.css';
import OfferCard from '../components/OfferCard';
import VideocamIcon from '@mui/icons-material/Videocam';
import MCard from '../components/MCard';
const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100vh"
  }));
export default class Home extends React.Component {
    render() {
      return( 
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={0.5}>
                        <div className='layout-top first-layout'>
                        <Grid container>
                        <Grid item xs={12}>
                        <img src="https://www.tango.me/images/e0a97aef668cb63a53573d1d7423864a-brand-logo.svg" className="w5wP8" alt="logo" />
                        </Grid>
                        <Grid item xs={12} className='nav-bars'>
                            <div className='nav-bars'>
                            <VideocamIcon fontSize="large" className='default-color'/>
                            <div className='bar-texts default-color'>Live</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='nav-bars'>
                            <div className='nav-bars'></div>
                        </Grid>
                        <Grid item xs={12} className='nav-bars'>
                            <div className='nav-bars'></div>
                        </Grid>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={2.5}>
                        <div className='layout-top grey'>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <div className="search-container">
                            <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                            <OfferCard text="Get +20% coins for every purchase" btnText="SHOW OFFER" img="https://www.tango.me/images/3d18171a6bb26c808f6a55631477fe71-20.png"/>
                            <OfferCard text="Bring friends and earn cash" btnText="START NOW" img="https://www.tango.me/images/3d18171a6bb26c808f6a55631477fe71-20.png"/>
                            <OfferCard text="Partner with tango" btnText="SIGN UP" img="https://www.tango.me/images/63e982f6ed5dae99b3bedd8a6b20e20e-reward.png"/>
                            <OfferCard text="Join Tango community" btnText="JOIN NOW" img="https://www.tango.me/images/3d18171a6bb26c808f6a55631477fe71-20.png"/>
                        </Grid>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className='layout-top'>
                            <Grid item xs={12}>
                                <div className='layout-top-chip'>
                                <Stack direction="row" spacing={1}>
                                <Chip label="For You" className='chip'/>
                                <Chip label="Nearby" className='chip'/>
                                <Chip label="Rising Star" className='chip'/>
                                <Chip label="New" className='chip'/>
                                <Chip label="Popular" className='chip'/>
                                <Chip label="Artists" className='chip-selected'/>
                                <Chip label="Social" className='chip'/>
                                <Chip label="Games" className='chip'/>
                                </Stack>
                                </div>
                            </Grid>
                            <div className='video-section'>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            {Array.from(Array(12)).map((_, index) => (
                                <Grid item xs={2.4} sm={2.4} md={2.4} key={index}>
                                <MCard />
                                </Grid>
                            ))}
                            </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
      );
    }
  }

function div(div: any) {
    throw new Error('Function not implemented.');
}
