import React from 'react'
import Banner from '../../components/campaigns/banner/Banner'
import Navbar from '../../components/header/Navbar'

function Contribute() {
  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <Banner 
        path="/images/landing5.png" 
        />
      </main>
    </React.Fragment>
  )
}

export default Contribute