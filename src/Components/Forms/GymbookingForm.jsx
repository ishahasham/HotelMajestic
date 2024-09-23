import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormLabel } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Configuration/Firebase';
import Radiobutton from '../Buttons/Radiobutton';
import { useNavigate } from 'react-router-dom';

function GymBookingForm({ formTitle, onSubmit }) {
    const navigate = useNavigate();
    const [guestFirstName, setGuestFirstName] = useState('');
    const [guestLastName, setGuestLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'gym_members'), {
                guestFirstName,
                guestLastName,
                email,
                phoneNumber,
                bookingDate,
                timeSlot,
                specialRequests,
                gender
            });

            // Clear form fields
            setGuestFirstName('');
            setGuestLastName('');
            setEmail('');
            setPhoneNumber('');
            setBookingDate('');
            setTimeSlot('');
            setSpecialRequests('');
            setGender('');

            onSubmit(); // Callback after submission
            navigate('/Booking/PaymentMethod/Gym'); // Navigate to payment method
        } catch (error) {
            console.error("Error saving gym booking data: ", error);
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: '20px', backgroundColor: '#fff' }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginBottom: '20px', color: '#0B1726' }}>
                {formTitle}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    value={guestFirstName}
                    onChange={(e) => setGuestFirstName(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                    value={guestLastName}
                    onChange={(e) => setGuestLastName(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    margin="normal"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Booking Date"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Time Slot"
                    variant="outlined"
                    margin="normal"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    placeholder="e.g., 10:00 AM - 11:00 AM"
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Special Requests"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any special accommodations or requests"
                    sx={textFieldStyles}
                />
                <FormLabel component="legend" sx={{ marginTop: '20px', color: '#0B1726' }}>
                    Gender
                </FormLabel>
                <Radiobutton
                    label1={'Female'}
                    label2={'Male'}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <Button type="submit" fullWidth sx={{ color: "white", marginTop: '20px', backgroundColor: "#0B1726" }}>
                    Book Now
                </Button>
            </form>
        </Box>
    );
}

const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#0B1726',
        },
        '&:hover fieldset': {
            borderColor: '#0B1726',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0B1726',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#0B1726',
    },
};

export default GymBookingForm;
