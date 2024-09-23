import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import styles from './Payment.module.css'
import { Container } from '@mui/material'
import PaymentForm from '../../Components/Forms/PaymentForm'

const GymPayment = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <Sidebar/>
      </div>
     <div className={styles.content}>
      <div className={styles.subContent}>
          <Container>
            <PaymentForm label1={'Luxury Gym Room'} label2={'Gym Room'}/>
          </Container>
      </div>
     </div> <br /><br />
     <div className={styles.footer}> 
        <Footer/>
     </div>
    </div>
  )
}

export default GymPayment
