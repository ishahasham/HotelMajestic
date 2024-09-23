import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allRoomData } from './roomData'; // Import the combined room data
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';

const RoomDetails = () => {
  const { id } = useParams(); // Get the room id from the URL
  const navigate = useNavigate(); // For navigation
  const room = allRoomData.find((room) => room.id === parseInt(id)); // Find the room by id

  // Handle case where room is not found
  if (!room) {
    return <div>Room not found</div>;
  }

  // Find related rooms (exclude current room)
  const relatedRooms = allRoomData.filter((relatedRoom) => relatedRoom.id !== room.id);

  // Function to handle booking navigation based on money type
  const handleBookingNavigation = () => {
    if (room.money.includes('$100')) {
      navigate('/Booking/BookPoolSideRooms'); 
    } else if (room.money.includes('$150')) {
      navigate('/Booking/BookBeachViewRooms'); 
    } 
  };

  return (
    <div>

      <div>
        <Sidebar />
      </div>

     
      <div style={{ marginTop: '100px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
         
          <Card sx={{ maxWidth: 600, textAlign: 'center', mb: 5 }}>
            <CardMedia
              component="img"
              height="300"
              image={room.img}
              alt={room.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {room.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {room.desc}
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Price: {room.money}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleBookingNavigation}>
                Book Your Room
              </Button>
            </CardContent>
          </Card>

          {/* Related Rooms Section */}
          <Typography variant="h5" gutterBottom>
            Related Rooms
          </Typography>
          <Grid container spacing={3} sx={{ maxWidth: '80%' }}>
            {relatedRooms.slice(0, 3).map((relatedRoom) => (
              <Grid item xs={12} sm={6} md={4} key={relatedRoom.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={relatedRoom.img}
                    alt={relatedRoom.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {relatedRoom.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {relatedRoom.money}
                    </Typography>
                  </CardContent>
                  <Button size="small" onClick={() => navigate(`/Rooms/${relatedRoom.id}`)}>View Details</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      {/* Footer */}
      <br /><br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RoomDetails;
