import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Categories from "../Categories/Categories";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
import './navbar.css'

export default function Navbar() {
    const inpText = useRef()
    const [value, setValue] = useState("")
    const cart = useRecoilValue(cartDetaials)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand text-white fw-bold fs-3" to="/">Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/categories" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </NavLink>
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
                            <Link to="/cart" className="text-dark "
                                onClick={console.log(cart)}>
                                <AiOutlineShoppingCart />
                                <p className="number-of-products">{cart.length}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
