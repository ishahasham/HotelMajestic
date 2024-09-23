import React from 'react'
import styles from './Services.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import { Container } from '@mui/material'
import ViewGym from '../Gym/ViewGym'
import About from '../About/About'
import Rooms from '../Rooms/Rooms'
import Cuisine from '../../Components/FoodServices/Cuisine'

const Services = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <Sidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
              <About/>
              <Rooms/>
              <ViewGym/>
            <Cuisine/>
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default Services
