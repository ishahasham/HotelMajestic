import React from 'react'
import styles from './ShowTable.module.css'
import { Button, Container, Typography } from '@mui/material'
import StaffSidebar from '../../Components/Sidebar/StaffSidebar'
import BookedRoomsTable from '../../Components/Tables/BookedRoomsTable'
import Footer from '../../Components/Footer/Footer'


const BR3 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <StaffSidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
          <Typography variant='h3'> 
            BOOKED ROOM:
             </Typography>
             <BookedRoomsTable/>
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default BR3
