import React, { useState } from 'react';
import { Avatar, Button, TextField, Grid, Box, Typography, Container, Select, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../Configuration/Firebase'; // Firebase configuration
import main from "../../assets/main.jpg";

const Login = () => {
  const [error, setError] = useState(null);
  const [role, setRole] = useState(''); // State to store selected role
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (!role) {
      setError("Please select a role.");
      return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Fetch the role from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userRole = userDoc.data()?.role;
    
        console.log("User Role:", userRole); // Debugging line
    
        // Save user info to local storage
        localStorage.setItem('user', JSON.stringify({ uid: user.uid, email: user.email, role: userRole }));
    
        // Navigate to the respective dashboard based on role
        navigate(`/${userRole}-dashboard`);
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
              backgroundColor: '#fffff',
              padding: 4,
             
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'white', color: "black" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
              Login 
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                placeholder="Enter your email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                placeholder="Enter your password"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />

              {/* Role selection dropdown */}
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'white', color: 'black' }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2" sx={{ color: 'white', textDecoration: 'none' }}>
                    Don't have an account? 
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

export default Login;
