import Box from "../../Box/Box";
import React, { useEffect, useState } from 'react'
import Slider from "../../Slider/Slider";
import './home.css'
import TopRated from "../../../TopRated/TopRated";
import NewArrivals from "../../NewArrivals/NewArrivals";
import SwipperSlides from "../../SwipperSlides/SwipperSlides";

export default function Home() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    return (
        <>
            <Slider />
            <div className="container pt-5 ">
                <h2 className=" text-center head my-5 text-primary ">Important Products</h2>
                <div className="row pt-5">
                    {(product !== "") ?
                        product.map(({ price, id, title, thumbnail, description }, index) => {
                            if (index < 8) {
                                return (
                                    <div key={id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                        <Box id={id} img={thumbnail} title={title} desc={description} price={price} />
                                    </div>)
                            }
                            return null
                        }) :
                        <h2 className="text-center">Loading................</h2>
                    }
                </div>
            </div>
            <TopRated />
            <NewArrivals />
            <SwipperSlides />

        </>
    )
}
