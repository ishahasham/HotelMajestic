import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataGym } from './DataGym'; 
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';

const GymDetails = () => {
  const { id } = useParams(); // Get the gym id from the URL
  const navigate = useNavigate(); // For navigation
  const gym = DataGym.find((gym) => gym.id === parseInt(id)); // Find the gym by id

  // Handle case where gym is not found
  if (!gym) {
    return <div>Gym not found</div>;
  }

  // Function to handle booking navigation based on price
  const handleBookingNavigation = () => {
    navigate('/Booking/GYM'); 
  };

  return (
    <div>
      <Sidebar />
      <div style={{ marginTop: '100px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
          <Card sx={{ maxWidth: 600, textAlign: 'center', mb: 5 }}>
            <CardMedia
              component="img"
              height="300"
              image={gym.img}
              alt={gym.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {gym.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {gym.desc}
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Price: {gym.money}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleBookingNavigation}>
                Book Your Gym Session
              </Button>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GymDetails;
