import React from 'react'
import styles from '../styles/Contribute.module.scss'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import Donation from '../components/donation/Donation'
import DonationForm from '../components/donation/DonationForm'
import Landing from '../components/contribute/landing/Landing'

function Contribute() {
  return (
   <React.Fragment>
    <Navbar/>
    <main> 
        <Landing/>
        <section className={styles.row}>
            <DonationForm/>
        </section>

    </main>
    <Footer/>

   </React.Fragment>
  )
}

export default Contribute