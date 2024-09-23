import React from 'react'
import styles from './ShowTable.module.css'
import { Button, Container, Typography } from '@mui/material'
import Footer from '../../Components/Footer/Footer'
import ManagerSidebar from '../../Components/Sidebar/ManagerSidebar'
import GymTable from '../../Components/Tables/GymTable'


const BGYM2 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <ManagerSidebar/>
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

export default BGYM2
