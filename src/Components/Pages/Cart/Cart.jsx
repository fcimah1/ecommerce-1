import { useRecoilState, useRecoilValue } from "recoil"
import cartDetaials from "../../../Atoms/Cart.atom"
import './cart.css'
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
                } else if (operation === "-") {
                    setCart([...cart.slice(0, i), { ...cunrrentProduct, countity: +cunrrentProduct.countity - 1 }, ...cart.slice(i + 1)])
                }
            } else {
                operationAdd()
            }
        } else {
            operationAdd()
        }
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
                            <th scope="col">Countity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartValues?.map((product) => {
                                return (
                                    <tr className="" key={product.id}>
                                        <th scope="row">{product.id}</th>
                                        <td><img src={product.img} className="img" alt="product" /></td>
                                        <td>{product.title}</td>
                                        <td>{product.desc.split(" ").slice(0, 8).join(" ")}...</td>
                                        <td>${product.price}</td>
                                        <td >
                                            <button onClick={() => { operationOfCount(product.id, "-") }}>- </button>
                                            <span className="" > {product.countity} </span>
                                            <button onClick={() => operationOfCount(product.id, "+")}> +</button>
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
