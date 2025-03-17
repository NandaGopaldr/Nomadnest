import React, { Component } from 'react'
import { Grid, Typography, Paper, Box, Button, Avatar } from '@mui/material';
import  {Link} from 'react-router-dom'

export default class Myprofile extends Component {
    h3style={marginLeft:'85px', marginTop:'2px',marginBottom:'20px',padding:'5px',align:'center'}
    h3style1={marginLeft:'125px', marginTop:'2px',marginBottom:'20px',padding:'5px',align:'center'}
    boxstyle={ marginBottom:'5px',marginLeft:'50px',height:'200px',width: '200px',opacity:'1',borderRadius:'5%'}
    boxstyle1={marginBottom:'5px',marginLeft:'80px',marginTop:'5px',height:'200px',width: '200px',borderColor:'black', opacity:'1',borderRadius:'5%'}
    
  render() {
    return (
      <div style={{backgroundImage:'url(../travel.jpg)',height:'100vh',
      marginTop:'0px',padding:'0px',fontSize:'50px',backgroundSize:'cover',backgroundRepeat:'no-repeat',opacity:'0.95'}}>
        <Grid style ={{padding:'50px'}}>
                <Typography>
                    <h1 style={{margin:'10px', fontFamily:'cursive'}}>MY PROFILE</h1>
                    <br/>
                    <div style={{textAlign:'right'}}>

                        <Button variant='outlined'sx={{color:'#F5F3E1',backgroundColor:'#155AC6',borderColor:'#0480AB '}} startIcon = { < Avatar src = {'../heart.png'} /> } ><Link to="../Likedtrips"><Button variant="contained" sized="large" color='info'>
                            LIKED TRIPS
                        </Button></Link></Button>
                        
                    </div>

                    <Paper style={{opacity:'0.8',backgroundcolor:'#CDE5F3'}}>
                            <h1 style={{fontFamily:'serif',fontStyle:'revert-layer', marginLeft:'30px'}}>My Trips</h1>
                            <div style={{align:'center',display:'inline-block'}}>
                                <Box 
                                    sx= {{
                                        display: 'flex',
                                        flexDirection:'row',
                                        alignItems: 'center'
                                    }} >
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle}
                                        src="https://images.unsplash.com/photo-1557313501-341d9d6fd40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxiYW5pYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"/>
                                        <h3 style={this.h3style}>DARJEELING</h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://cdn.pixabay.com/photo/2014/09/11/10/13/hawa-mahal-441563__340.jpg"/>
                                        <h3 style={this.h3style1}>JAIPUR</h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://images.unsplash.com/photo-1586053226626-febc8817962f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                                        <h3 style={this.h3style1}>ANDAMAAN</h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://images.unsplash.com/photo-1585116938581-9d993839191c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhcmFuYXNpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                        <h3 style={this.h3style1}>VAARANASI</h3>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src ='https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmFyYW5hc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                                        <h3 style={this.h3style1}>KOLKATA</h3>

                                </div>
                                </Box>
                            </div>
                    </Paper>
                    <br></br>
                    <Link to="../Enjoy">
                    <Button variant="contained" size="large"  color='primary'>Plan a Trip</Button>
                    </Link>
                    <h1 style={{color:'#FCFAE9'}}>Life is short and the world is wide!!</h1>
                </Typography>
            {/* </Paper> */}
        </Grid>
      </div>
    )
}
}