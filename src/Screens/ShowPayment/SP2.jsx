import React from 'react'
import styles from './SP.module.css'
import { Button, Container, Typography } from '@mui/material'
import ManagerSidebar from '../../Components/Sidebar/ManagerSidebar'
import PaymentTable from '../../Components/Tables/PaymentTable'
import Footer from '../../Components/Footer/Footer'


const SP2 = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <ManagerSidebar/>
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

export default SP2