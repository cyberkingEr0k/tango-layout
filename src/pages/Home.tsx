import { Chip, FormControl, Grid, Input, InputAdornment, InputLabel, Paper, Stack } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import './Home.css';
import OfferCard from '../components/OfferCard';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
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
                    <Grid item xs={0.75}>
                        <div className='layout-top first-layout'>
                        <div className="flex-container">
                        <div>
                        <img src="https://www.tango.me/images/e0a97aef668cb63a53573d1d7423864a-brand-logo.svg" className="w5wP8" alt="logo" />
                        </div>
                        <div><VideocamIcon fontSize="large" className='default-color'></VideocamIcon></div>
                        {/* <div></div> */}
                        <div><GroupsOutlinedIcon fontSize="large"/></div>  
                        <div><FeedOutlinedIcon fontSize="large"/></div> 
                        <div><ChatOutlinedIcon fontSize="large"/></div> 
                        </div>
                        {/* <Grid container>
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
                        </Grid> */}
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className='layout-top grey'>
                        <Grid>
                        <Grid item xs={12}>
                        <div className="searchBar">
                        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
                        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                        <svg style={{width:24,height:24}} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        </button>
                    </div>
                            <OfferCard text="Get +20% coins for every purchase" btnText="SHOW OFFER" img="https://www.tango.me/images/3d18171a6bb26c808f6a55631477fe71-20.png"/>
                            <OfferCard text="Bring friends and earn cash" btnText="START NOW" img="https://www.tango.me/images/63e982f6ed5dae99b3bedd8a6b20e20e-reward.png"/>
                            <OfferCard text="Partner with tango" btnText="SIGN UP" img="https://www.tango.me/images/24944f9bc5b6ac7ddca3347fc99a2d43-agencies_banner.svg" inner={<div className="_3ys-L iQp3X"><span>Earn for every Referral</span></div>}/>
                            <OfferCard text="Join Tango community" btnText="JOIN NOW" inner={<ul className="iQp3X"><li className="_3ys-L"><span>Chat with broadcasters</span></li><li className="_3ys-L"><span>Support broadcasters</span></li><li className="_3ys-L"><span>Follow your favorite streams</span></li></ul>}/>
                        </Grid>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={9.25}>
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
