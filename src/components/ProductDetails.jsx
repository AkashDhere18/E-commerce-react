import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetails.css'

const ProductDetails = () => {
    const { ID } = useParams()
    const [product, setProduct] = useState()
    const [error, setError] = useState(false)
    const [loadding, setLoadding] = useState(true)


    async function fetchData() {

        try {
            const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')

            if (!res.ok) {
                setError(true)
                setLoadding(false)
            } else {

                const data = await res.json()
                const product = await data.find((p) => p.id == ID)

                setProduct(product)

                setError(false)
                setLoadding(false)
            }

        } catch (error) {
            setLoadding(false)
            setError(true)

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (error) return <p>404 not found</p>
    if (loadding) return <p>Loading...</p>
    if (!product) return <p>product not found</p>

    return (
        <>
            {/* <h1>{product.name}</h1> */}
            <div className="comp-panel" id="panel-detail">
                <div className="detail-layout">
                    {/* <!-- Gallery --> */}
                    <div className="detail-gallery">
                        <div className="gallery-main">
                            <img src={product.image} className="product-detail-image img-fluid" alt="..." />
                            <span className="gallery-zoom"><i className="bi bi-zoom-in"></i> Hover to zoom</span>
                        </div>
                        <div className="thumbs-row">
                            <div className="thumb-item active">👗</div>
                            <div className="thumb-item">🪡</div>
                            <div className="thumb-item">🧵</div>
                            <div className="thumb-item">✂️</div>
                        </div>
                    </div>
                    {/* <!-- Info --> */}
                    <div className="detail-info">
                        <p className="detail-brand">DRAPE Studio</p>
                        <h1 className="detail-name">{product.name}</h1>
                        <div className="detail-rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-n">4.9</span>
                            <span className="rating-c">(128 reviews)</span>
                        </div>
                        <div className="detail-price-row">
                            <span className="detail-price">₹1,490</span>
                        </div>
                        <p className="detail-tax">Inclusive of all taxes · Free shipping above ₹999</p>
                        <div className="detail-divider"></div>

                        {/* <!-- Size --> */}
                        <p className="opt-label">Size <em id="selSize">— Select</em></p>
                        {/* <div className="size-row">
                            <button className="sz-btn" onClick="pickSize(this,'XS')">XS</button>
                            <button className="sz-btn" onClick="pickSize(this,'S')">S</button>
                            <button className="sz-btn active" onClick="pickSize(this,'M')">M</button>
                            <button className="sz-btn" onClick="pickSize(this,'L')">L</button>
                            <button className="sz-btn oos" title="Out of Stock">XL</button>
                        </div> */}

                        {/* <!-- Color --> */}
                        <p className="opt-label">Color <em id="selColor">Natural Linen</em></p>
                        {/* <div className="color-row">
                            <button className="clr-btn active" style={{background:"#D4C9B0"} ,{onClick:"{pickColor(this,'Natural Linen')}"}}></button>
                            <button className="clr-btn" style={{background:"#2C3E50"},{ onClick:{pickColor(this,'Midnight Blue')}}}></button>
                            <button className="clr-btn" style={{background:"#C0392B"},{onClick:"{pickColor(this,'Terracotta')}"}}></button>
                            <button className="clr-btn" style={{background:"#111"},{onClick:"{pickColor(this,'Noir')}"}}></button>
                        </div> */}

                        {/* <!-- Qty + CTA --> */}
                        <div className="add-to-bag-row">
                            <div className="qty-ctrl">
                                {/* <button className="qc-btn" onClick="var v=this.parentElement.querySelector('.qc-v');v.textContent=Math.max(1,+v.textContent-1)">−</button> */}
                                <span className="qc-v">1</span>
                                {/* <button className="qc-btn" onClick="var v=this.parentElement.querySelector('.qc-v');v.textContent=+v.textContent+1">+</button> */}
                            </div>
                            <button className="btn-add">Add to Bag</button>
                            {/* <button className="btn-wish-d" onClick="this.style.borderColor='var(--red)';this.style.color='var(--red)'"><i className="bi bi-heart"></i></button> */}
                        </div>
                        <button className="btn-buynow">Buy Now</button>

                        {/* <!-- Perks --> */}
                        <div className="perks-grid">
                            <div className="perk"><span className="perk-ic">🚚</span><div className="perk-text"><p>Free Delivery</p><span>Orders above ₹999</span></div></div>
                            <div className="perk"><span className="perk-ic">↩️</span><div className="perk-text"><p>30-Day Returns</p><span>Hassle-free</span></div></div>
                            <div className="perk"><span className="perk-ic">🔒</span><div className="perk-text"><p>Secure Payment</p><span>UPI, Cards, Wallets</span></div></div>
                            <div className="perk"><span className="perk-ic">🌿</span><div className="perk-text"><p>Sustainable</p><span>Ethically sourced</span></div></div>
                        </div>

                        {/* <!-- Accordion --> */}
                        {/* <div className="acc-item">
                            <div className="acc-head" onClick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
                                <h5>Product Details</h5><i className="bi bi-plus"></i>
                            </div>
                            <div className="acc-body">100% pure linen, V-neckline, adjustable tie waist, midi length. Machine wash cold. Made in India 🇮🇳</div>
                        </div>
                        <div className="acc-item">
                            <div className="acc-head" onClick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
                                <h5>Size & Fit</h5><i className="bi bi-plus"></i>
                            </div>
                            <div className="acc-body" style="display:none">Model is 5'7" wearing size S. Relaxed fit — size up for looser feel.</div>
                        </div>
                        <div className="acc-item">
                            <div className="acc-head" onClick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
                                <h5>Shipping & Returns</h5><i className="bi bi-plus"></i>
                            </div>
                            <div className="acc-body" style="display:none">Free standard delivery (3–5 days). Express at checkout. Easy 30-day returns.</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductDetails