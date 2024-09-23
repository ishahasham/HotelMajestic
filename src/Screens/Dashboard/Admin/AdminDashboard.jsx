import React from 'react'
import styles from './AdminDashboard.module.css'
import { Button, Container, Typography } from '@mui/material'
import AdminSidebar from '../../../Components/Sidebar/AdminSidebar'
import CarouselCustom from '../../../Components/Carousel/CarouselCustom'
import About from '../../About/About'
import Footer from '../../../Components/Footer/Footer'



const AdminDashboard = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <AdminSidebar/>
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

export default AdminDashboard
