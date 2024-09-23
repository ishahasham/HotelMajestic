import React from 'react'
import styles from './CTS.module.css'
import { Button, Container, Typography } from '@mui/material'
import ContactTable from '../../Components/Tables/ContactTable'
import AdminSidebar from '../../Components/Sidebar/AdminSidebar'


const CT1 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <AdminSidebar/>
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

export default CT1
