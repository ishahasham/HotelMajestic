import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import hotel1 from '../../assets/hotel1.jpg';
import hotel3 from '../../assets/hotel3.jpg';

const images = [
  { src: hotel1 },
  { src: hotel3 },
];

const CarouselCustom = () => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {images.map((image, i) => (
          <div key={i}>
            <img src={image.src} alt={image.label} style={{ width: '100%', height: 'auto' }} />
            <Box sx={{ position: 'absolute', bottom: 16, left: 16, color: 'white' }}>
              <Typography variant="h5">{image.label}</Typography>
            </Box>
          </div>
        ))}
      </SwipeableViews>
      <Box sx={{ position: 'absolute', top: '50%', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', zIndex: 1 }}>
        <Button onClick={() => handleChangeIndex((index - 1 + images.length) % images.length)} sx={{ color: 'white', backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } }}>
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={() => handleChangeIndex((index + 1) % images.length)} sx={{ color: 'white', backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } }}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselCustom;
