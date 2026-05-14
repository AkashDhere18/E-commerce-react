import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Card.css'

const ProductList = () => {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    async function fetchData() {

        try {
            const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')

            if (!res.ok) {
                setLoading(false)
                setError(true)
            } else {
                const data = await res.json()
                setProduct(data)
                setLoading(false)
                setError(false)
            }

        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (error) return <p>404 page not found</p>
    if (loading) return <p>Loading...</p>

    return (
        <>
            {/* <div>ProductList</div>
            <div className="container-fluid">
                <div className="row">
                {
                    product.map((prod, i) => (
                        <div className='col mb-1' key={i}>

                            <Card product={prod} />
                        </div>
                        // <li key={i}>{prod.name}</li>
                    ))

                }
            </div>
        </div > */}
            <div className=' container-fluid px-lg-3 px-2 py-4" '>
                <div className='row g-4'>{
                    product.map((prod, i) => (
                        <div className="col-6 col-md-4 col-lg-3" key={i}>

                            <Card product={prod} />
                        </div>

                    ))
                }
                </div>
            </div>
        </>
    )
}

export default ProductList