import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
import { Button, Container, Typography } from '@mui/material'
import About from '../../About/About'
import CarouselCustom from '../../../Components/Carousel/CarouselCustom'
import Rooms from '../../Rooms/Rooms'
import Footer from '../../../Components/Footer/Footer'
import ContactForm from '../../../Components/Forms/ContactForm'



const CustomerDashboard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <Sidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
            <CarouselCustom/> <br /><br /><br />
           <About/>
           <Rooms/>
           <ContactForm/>
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default CustomerDashboard
