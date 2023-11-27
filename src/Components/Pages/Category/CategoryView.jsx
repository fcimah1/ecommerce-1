import { useEffect, useState } from "react";
import Box from "../../Box/Box";
import { useParams } from "react-router-dom";

export default function CategoryView() {
    const { categoryName } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(productData => setData(productData.products));
    }, [categoryName])
    return (
        <>
            <h1 className="text-center my-5">{categoryName} Products</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map(({ price, id, title, thumbnail, description }) => {
                            return (
                                <div key={id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                    <Box id={id} img={thumbnail} title={title} desc={description} price={price} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
