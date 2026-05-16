import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Card.css'
// import '../index.css'

const Card = ({ product }) => {

    return (
        <>

            <div className="card h-100 border-0 product-card overflow-hidden">

            <div className="position-relative overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top img-fluid product-image"
                />


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

            <div className="card-body p-3">

                <p className="text-uppercase small mb-1 product-category">
                    {product.category}
                </p>

                <h6 className="fw-semibold lh-base product-title">
                    {product.name}
                </h6>

                <div className="d-flex align-items-center gap-2">

                    <span className="fw-bold fs-6">
                        ₹{product.price}
                    </span>

                </div>

            </div>

        </div>

        </>
    )
}

export default Card