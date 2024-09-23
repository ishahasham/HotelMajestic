import React from 'react'
import styles from './Manager.module.css'
import { Button, Container, Typography } from '@mui/material'
import CarouselCustom from '../../../Components/Carousel/CarouselCustom'
import About from '../../About/About'
import Rooms from '../../Rooms/Rooms'
import ManagerSidebar from '../../../Components/Sidebar/ManagerSidebar'
import Footer from '../../../Components/Footer/Footer'
import ContactForm from '../../../Components/Forms/ContactForm'


const ManagerDashboard = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <ManagerSidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>

              <CarouselCustom/> <br /><br /><br />
              <About/>
              <br /> <br /> <br />
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default ManagerDashboard
