import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import PaymentForm from '../../Components/Forms/PaymentForm'
import styles from './Payment.module.css'
import { Container } from '@mui/material'
import Footer from '../../Components/Footer/Footer'


const Payment = () => {
    
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <Sidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
            <PaymentForm label1={'Beach View Room'} label2={'Pool Side Room'}/>
          </Container>
      </div>
     </div> <br /><br />
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default Payment
