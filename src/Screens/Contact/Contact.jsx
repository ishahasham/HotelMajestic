import { Container } from '@mui/material'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import styles from './Contact.module.css'
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/Forms/ContactForm'

const Contact = () => {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
    <Sidebar/>
    </div>
   <div className={styles.content}>
    <div className={styles.subContent}>
        <Container>
          <ContactForm/>
          <br /><br />
        </Container>
    </div> 
   </div>
   <div className={styles.footer}> 
      <Footer/>
   </div>
  </div>
  )
}

export default Contact
