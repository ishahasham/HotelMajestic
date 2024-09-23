import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0B1726', padding: '30px 0', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ textDecoration: 'underline', fontWeight: 'bold' }}
            >
              About Us
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px', lineHeight: 1.8 }}>
              We are a premier hotel offering luxury and comfort. Your satisfaction is our priority.
            </Typography>
          </Grid>
          
          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ textDecoration: 'underline', fontWeight: 'bold' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover" 
                sx={{ marginBottom: '8px', '&:hover': { color: '#FFD700' } }}
              >
                Home
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover" 
                sx={{ marginBottom: '8px', '&:hover': { color: '#FFD700' } }}
              >
                Rooms
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="hover" 
                sx={{ marginBottom: '8px', '&:hover': { color: '#FFD700' } }}
              >
                Services
              </Link>
             
              <Link 
                href="#" 
                color="inherit" 
                underline="hover" 
                sx={{ marginBottom: '8px', '&:hover': { color: '#FFD700' } }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>
          
          {/* Contact Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ textDecoration: 'underline', fontWeight: 'bold' }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px', lineHeight: 1.8 }}>
              Email: info@hotelmajestic.com
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '5px', lineHeight: 1.8 }}>
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '5px', lineHeight: 1.8 }}>
              Address: 123 Hotel St, City, Country
            </Typography>
          </Grid>
        </Grid>

        <Typography 
          variant="body2" 
          align="center" 
          sx={{ marginTop: '30px', borderTop: '1px solid #FFF', paddingTop: '20px' }}
        >
          &copy; {new Date().getFullYear()} Hotel Majestic . All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
