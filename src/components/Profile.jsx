import React from "react";
import { Typography, Paper, Box, Button, Avatar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import travelBg from "../components/images/travel.jpg";
import heartIcon from "../components/images/heart.png";

const MyProfile = () => {
  const trips = [
    { src: "https://images.unsplash.com/photo-1557313501-341d9d6fd40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxiYW5pYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60", label: "DARJEELING" },
    { src: "https://cdn.pixabay.com/photo/2014/09/11/10/13/hawa-mahal-441563__340.jpg", label: "JAIPUR" },
    { src: "https://images.unsplash.com/photo-1586053226626-febc8817962f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", label: "ANDAMAN" },
    { src: "https://images.unsplash.com/photo-1585116938581-9d993839191c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhcmFuYXNpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", label: "VARANASI" },
    { src: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmFyYW5hc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", label: "KOLKATA" }
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${travelBg})`,
        height: "100vh",
        margin: "0",
        padding: "0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "0.95",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Grid container justifyContent="center" sx={{ padding: "50px", maxWidth: "1000px" }}>
        <Typography variant="h3" sx={{ textAlign: "center", color: "white", fontFamily: "cursive", marginBottom: "20px" }}>
          MY PROFILE
        </Typography>

        {/* Liked Trips Button */}
        <Grid item xs={12} sx={{ textAlign: "right", marginBottom: "20px" }}>
          <Link to="/Likedtrips">
            <Button
              variant="outlined"
              sx={{ color: "#F5F3E1", backgroundColor: "#155AC6", borderColor: "#0480AB" }}
              startIcon={<Avatar src={heartIcon} />}
            >
              LIKED TRIPS
            </Button>
          </Link>
        </Grid>

        {/* My Trips Section */}
        <Paper sx={{ opacity: 0.8, backgroundColor: "#CDE5F3", padding: "20px", width: "100%" }}>
          <Typography variant="h4" sx={{ fontFamily: "serif", marginBottom: "20px", textAlign: "center" }}>My Trips</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {trips.map((trip, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "5%",
                    border: "2px solid black",
                  }}
                  src={trip.src}
                  alt={trip.label}
                />
                <Typography variant="h6" sx={{ marginTop: "10px" }}>{trip.label}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Plan a Trip Button */}
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/Enjoy">
            <Button variant="contained" size="large" sx={{ backgroundColor: "#155AC6" }}>
              Plan a Trip
            </Button>
          </Link>
        </Grid>

        {/* Motivational Quote */}
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5" sx={{ color: "#FCFAE9" }}>
            Life is short and the world is wide!!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyProfile;
