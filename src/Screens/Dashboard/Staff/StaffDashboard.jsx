import React from 'react'
import styles from './Staff.module.css'
import { Button, Container, Typography } from '@mui/material'
import CarouselCustom from '../../../Components/Carousel/CarouselCustom'
import About from '../../About/About'
import StaffSidebar from '../../../Components/Sidebar/StaffSidebar'
import Footer from '../../../Components/Footer/Footer'



const StaffDashboard = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <StaffSidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
              <CarouselCustom/> <br /><br /><br />
              <About/>
              
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default StaffDashboard
