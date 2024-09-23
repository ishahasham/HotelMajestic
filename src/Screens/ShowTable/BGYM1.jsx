import React from 'react'
import styles from './ShowTable.module.css'
import { Button, Container, Typography } from '@mui/material'
import GymTable from '../../Components/Tables/GymTable'
import Footer from '../../Components/Footer/Footer'
import AdminSidebar from '../../Components/Sidebar/AdminSidebar'

const BGYM1 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <AdminSidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
          <Typography variant='h3'> 
            BOOKED GYM:
             </Typography>
                <GymTable/>
           
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default BGYM1
