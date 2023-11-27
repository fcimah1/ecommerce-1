import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";

export default function Navbar() {
    const inpText = useRef()
    const [value, setValue] = useState("")
    // console.log(inpText)
    const setCart = useRecoilValue(cartDetaials)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand text-dark fw-bold fs-3" to="#">Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                {<Categories />}
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input ref={inpText} className="form-control me-2" onChange={() => {
                                setValue(inpText.current.value)
                            }} type="search" placeholder="Search" aria-label="Search" />
                            <Link to={(value !== "") ? `search/${inpText.current.value}`
                                : null} className="btn btn-secondary" type="submit">Search</Link>
                        </div>
                        <div className="cart">
                            <Link to="/cart" className="text-dark fs-3 ms-4"
                            onClick={console.log(setCart)}>
                                <AiOutlineShoppingCart />
                                <span className="text-danger">{setCart.length }</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
