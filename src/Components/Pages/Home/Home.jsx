import Box from "../../Box/Box";
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    return (
        <>
            <h1 className="text-center my-5">Important Products</h1>
            <div className="container">
                <div className="row">
                    {(product !== "") ?
                        product.map(({ price, id, title, thumbnail, description }) => {
                            return (
                                <div key={id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                    <Box id={id} img={thumbnail} title={title} desc={description} price={price} />
                                </div>)
                        }) :
                        <h2 className="text-center">Loading................</h2>
                    }
                </div>
            </div>
        </>
    )
}
