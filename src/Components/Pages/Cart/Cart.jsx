import { useRecoilValue } from "recoil"
import cartDetaials from "../../../Atoms/Cart.atom"
import './cart.css'
import { useRef, useState } from "react"
export default function Cart() {
    const cartValues = useRecoilValue(cartDetaials)
    let inpVal = useRef()
    let [value, setValue] = useState(0)
    console.log(value)

    return (
        <>
            <div className="container mt-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Countity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartValues?.map(product => {
                                return (
                                    <tr className="" key={product.id}>
                                        <th scope="row">{product.id}</th>
                                        <td><img src={product.img} className="img" alt="product" /></td>
                                        <td>{product.title}</td>
                                        <td>{product.desc.split(" ").slice(0, 8).join(" ")}...</td>
                                        <td>${product.price}</td>
                                        <td >
                                            {/* {product.countity} */}
                                            <button onClick={() => setValue(inpVal.current.value--)}>-</button>
                                            <input ref={inpVal} className="" type='number' value={value} />
                                            <button onClick={() => setValue(inpVal.current.value++)}>+</button>
                                        </td>
                                        <td>${product.countity * product.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
