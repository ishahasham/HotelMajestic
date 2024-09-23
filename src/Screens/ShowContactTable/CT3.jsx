import React from 'react'
import styles from './CTS.module.css'
import { Button, Container, Typography } from '@mui/material'
import StaffSidebar from '../../Components/Sidebar/StaffSidebar'
import ContactTable from '../../Components/Tables/ContactTable'
import Footer from '../../Components/Footer/Footer'


const CT3 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <StaffSidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
          <Typography variant='h3'> 
            Contact Information:
             </Typography>
                <ContactTable/>
           
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default CT3
