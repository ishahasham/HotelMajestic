import React from 'react'
import styles from './Booking.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Container, Typography } from '@mui/material'
import GymBookingForm from '../../Components/Forms/GymbookingForm'
import Footer from '../../Components/Footer/Footer'

const Gym = () => {
    const handleBookingSubmit = () => {
        console.log("Booking submitted!");

    };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <div className={styles.subContent}>
            <Container>
            <Typography variant="h3" >
            Book GYM
          </Typography>
            <GymBookingForm  onSubmit={handleBookingSubmit}/>
            </Container>
        
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Gym
