import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Card.css'
// import '../index.css'

const Card = ({ product }) => {
    // const [p, setP] = useState()
    return (
        <>
            {/* <div classNameNameName="card" style={{ width: '18rem' }}>
                <img src={product.image} classNameNameName="card-img-top" alt="..." />
                <div classNameNameName="card-body">
                    <h5 classNameNameName="card-title">{product.name}</h5>
                    <p>Price : &#8377;<i>{product.price}</i></p>
                    <button classNameNameName='btn btn-primary'>Add to bag</button>
                    <Link to={`/product/${product.id}`} classNameNameName='btn btn-success ms-2'>Explore</Link>
                </div>
            </div> */}

            <div className="card h-100 border-0 product-card overflow-hidden">

            {/* IMAGE */}
            <div className="position-relative overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top img-fluid product-image"
                />

                {/* TAG */}
                <span className="product-tag">
                    New
                </span>

                {/* OVERLAY */}
                <div className="product-overlay d-flex">

                    <Link
                        to={`/product/${product.id}`}
                        className="overlay-btn text-decoration-none text-center flex-fill py-3"
                    >
                        View Details
                    </Link>

                    <button
                        className="overlay-btn border-start flex-fill py-3"
                    >
                        Add to Bag
                    </button>

                </div>

            </div>

            {/* BODY */}
            <div className="card-body p-3">

                <p className="text-uppercase small mb-1 product-category">
                    Women · Fashion
                </p>

                <h6 className="fw-semibold lh-base product-title">
                    {product.name}
                </h6>

                <div className="d-flex align-items-center gap-2">

                    <span className="fw-bold fs-6">
                        ₹{product.price}
                    </span>

                    <small className="text-decoration-line-through text-muted">
                        ₹2999
                    </small>

                    <small className="fw-semibold product-discount">
                        -35%
                    </small>

                </div>

            </div>

        </div>

        </>
    )
}

export default Card