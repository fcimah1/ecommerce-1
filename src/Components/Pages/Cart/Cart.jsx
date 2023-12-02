import { useRecoilState, useRecoilValue } from "recoil"
import cartDetaials from "../../../Atoms/Cart.atom"
import './cart.css'
import { Link } from "react-router-dom"
export default function Cart({ id, img, title, desc, price }) {
    const cartValues = useRecoilValue(cartDetaials)
    const [cart, setCart] = useRecoilState(cartDetaials)

    function operationAdd() {
        setCart([...cart, {
            id,
            countity: 1,
            img,
            title,
            desc,
            price
        }])
    }

    function operationOfCount(id, operation) {
        let check = 0
        if (cartValues.length > 0) {
            let i = 0
            for (; i < cartValues.length; i++) {
                if (id === cartValues[i].id) {
                    check = 1
                    break
                }
            }
            let cunrrentProduct = cartValues[i]
            if (check === 1) {
                if (operation === "+") {
                    setCart([...cart.slice(0, i), { ...cunrrentProduct, countity: +cunrrentProduct.countity + 1 }, ...cart.slice(i + 1)])
                    localStorage.setItem("cart", cart);
                } else if (operation === "-") {
                    setCart([...cart.slice(0, i), { ...cunrrentProduct, countity: +cunrrentProduct.countity - 1 }, ...cart.slice(i + 1)])
                    localStorage.setItem("cart", cart);

                }
            } else {
                operationAdd()
            }
        } else {
            operationAdd()
        }
    }

    function operationDelete(index) {
        setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
        localStorage.setItem("cart", cart);
    }

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
                            <th scope="col">Price</th>
                            <th scope="col">Countity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartValues?.map((product, index) => {
                                return (
                                    <tr className="" key={product.id}>
                                        <th className="" title="delete from cart" scope="row">
                                            <div onClick={() => { operationDelete(index) }} className="text-danger delete">X</div>
                                        </th>
                                        <td>
                                            <Link to={`/productDetails/${product.id}`}>
                                                <img to={`/productDetails/${product.id}`} src={product.img} className="img" alt="product" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/productDetails/${product.id}`}><h5>{product.title}</h5></Link>
                                        </td>
                                        <td>{product.desc.split(" ").slice(0, 8).join(" ")}...</td>
                                        <td>${product.price}</td>
                                        <td >
                                            <div className="count">
                                                <button onClick={() => { operationOfCount(product.id, "-") }}>- </button>
                                                <span className="" > {product.countity} </span>
                                                <button onClick={() => operationOfCount(product.id, "+")}> +</button>
                                            </div>
                                        </td>
                                        <td>${(product.countity) * product.price}</td>
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
