import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import Corousels from '../components/Corousels'
import Hero from '../components/Hero'

const Dashboard = ({loggeduser}) => {
  return (
    <>
    <Navbar loggeduser={loggeduser}/>
    <Hero />
    <ProductList />
    <Footer />

    </>
  )
}

export default Dashboard