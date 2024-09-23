import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HoverButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#38aaa4', 
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  textTransform: 'none',
  transition: 'background-color 0.3s ease',
  borderRadius: '0', 
  '&:hover': {
    backgroundColor: '#037F7D', 
  },
}));

export default function CustomButton() {
  return (
    <HoverButton>
      Hover Me
    </HoverButton>
  );
}
