import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { db } from '../../Configuration/Firebase'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save data to Firebase
      await addDoc(collection(db, 'contactedpeople'), formData);
      alert("Contact details saved successfully!");

      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          p: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          marginTop: 4,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{color:"#0b1726"}}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0b1726',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0b1726',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0b1726',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0b1726',
                }
              }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0b1726',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0b1726',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0b1726',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0b1726',
                }
              }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            multiline
            rows={4}
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0b1726',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0b1726',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0b1726',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0b1726',
                }
              }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#0b1726", color: "white" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
