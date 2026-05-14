import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

const Dashboard = ({loggeduser}) => {
  return (
    <>
    <Navbar loggeduser={loggeduser}/>
    <ProductList />
    <Footer />
    </>
  )
}

export default Dashboard