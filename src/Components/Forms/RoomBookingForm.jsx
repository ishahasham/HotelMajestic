import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormLabel } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Configuration/Firebase';
import Radiobutton from '../Buttons/Radiobutton';
import { useNavigate } from 'react-router-dom';

function RoomBookingForm({ formTitle, onSubmit }) {
    const navigate =useNavigate();
    const [guestFirstName, setGuestFirstName] = useState('');
    const [guestLastName, setGuestLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomType, setRoomType] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'booked_rooms'), {
                guestFirstName,
                guestLastName,
                email,
                phoneNumber,
                checkInDate,
                checkOutDate,
                roomType,
                specialRequests,
                gender
            });

            // Clear form fields
            setGuestFirstName('');
            setGuestLastName('');
            setEmail('');
            setPhoneNumber('');
            setCheckInDate('');
            setCheckOutDate('');
            setRoomType('');
            setSpecialRequests('');
            setGender('');

            onSubmit(); // Callback after submission
        } catch (error) {
            console.error("Error saving booking data: ", error);
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
                    label="Check-In Date"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Check-Out Date"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    sx={textFieldStyles}
                />
                <TextField
                    fullWidth
                    label="Room Type"
                    variant="outlined"
                    margin="normal"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    placeholder="e.g., Single, Double, Deluxe"
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
                <Button type="submit" onClick={()=>navigate('/Booking/PaymentMethod')} fullWidth sx={{ color: "white", marginTop: '20px', backgroundColor: "#0B1726" }}>
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

export default RoomBookingForm;
