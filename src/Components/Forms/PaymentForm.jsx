import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, MenuItem } from '@mui/material';
import { db } from '../../Configuration/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const PaymentForm = ({label1, label2}) => {
  const [formData, setFormData] = useState({
    name: '',
    roomType: '',
    amount: '',
    paymentMethod: ''
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

      await addDoc(collection(db, 'paid_customer'), formData);
      alert("PAID SUCCESSFULLY!");

    
      setFormData({
        name: '',
        roomType: '',
        amount: '',
        paymentMethod: ''
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
        <Typography variant="h5" align="center" gutterBottom>
          Payment Method
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
            label="Room Type"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            select
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
          >
            <MenuItem value="label 1">{label1}</MenuItem>
            <MenuItem value="label 2">{label2}</MenuItem>
          </TextField>
          <TextField
            label="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            select
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
          >
            <MenuItem value="$150">$150 for {label1}</MenuItem>
            <MenuItem value="$100">$100 for {label2}</MenuItem>
          </TextField>
          <TextField
            label="Payment Method"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            select
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
          >
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Debit Card">Debit Card</MenuItem>
            <MenuItem value="Net Banking">Net Banking</MenuItem>
            <MenuItem value="UPI">UPI</MenuItem>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#0b1726", color: "white" }}
          >
            Submit Payment
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default PaymentForm;
