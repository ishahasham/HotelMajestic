import React from 'react'
import styles from './SP.module.css'
import { Button, Container, Typography } from '@mui/material'
import AdminSidebar from '../../Components/Sidebar/AdminSidebar'
import PaymentTable from '../../Components/Tables/PaymentTable'
import GymTable from '../../Components/Tables/GymTable'
import Footer from '../../Components/Footer/Footer'


const SP1 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <AdminSidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
          <Typography variant='h3'> 
            Payment:
             </Typography>
                <PaymentTable/> <br/>
          </Container>
      </div>
     </div>
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default SP1
