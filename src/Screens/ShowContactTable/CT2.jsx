import React from 'react'
import styles from './CTS.module.css'
import { Button, Container, Typography } from '@mui/material'
import StaffSidebar from '../../Components/Sidebar/StaffSidebar'
import ContactTable from '../../Components/Tables/ContactTable'
import ManagerSidebar from '../../Components/Sidebar/ManagerSidebar'
import Footer from '../../Components/Footer/Footer'


const CT2 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <ManagerSidebar/>
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

export default CT2
