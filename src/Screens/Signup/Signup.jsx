import React, { useState } from 'react';
import { Avatar, Button, TextField, Grid, Box, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../Configuration/Firebase'; 
import main from '../../assets/main.jpg';

const Signup = () => {
  const [error, setError] = useState(null);
  const [role, setRole] = useState(''); // State for selected role
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        email,
        role,  // Save the role to Firestore
      });

      // Save user info to local storage
      localStorage.setItem('user', JSON.stringify({ uid: user.uid, email, firstName, lastName, role }));
      
      // Redirect to login page
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

 

  return (
    <div style={{ 
      height: '110vh', 
      backgroundImage: `url(${main})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        height: '100vh', 
        padding: 4,  
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
      }}>
        <Box sx={{ textAlign: 'left', color: 'white', marginLeft: "30px" }}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              padding: 4,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'white', color: "black" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
              Sign up
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: 'white' },
                          '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                      }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: 'white' },
                          '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                      }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: 'white' },
                          '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                      }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: 'white' },
                          '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                      }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                displayEmpty
                fullWidth
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  backgroundColor: 'white',
                  color: 'black',
                  height: '40px',
                }}
              >
                <MenuItem value="" disabled>
                  Select Role
                </MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="staff">Staff</MenuItem>
              </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'white', color: 'black' }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/" variant="body2" sx={{ color: 'white', textDecoration: 'none', '&:visited': { color: 'white' } }}>
                    Already have an account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
