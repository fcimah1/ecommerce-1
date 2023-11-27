import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../Box/Box.css'
import { useRecoilState } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
export default function Box({ id, img, title, desc, price }) {
    const [, setCart] = useRecoilState(cartDetaials)
    const add = (id) => {

        setCart((cartDetaials) => [
            ...cartDetaials,
            {
                countitiy: 1,
                id,
                img,
                title
            },
        ])

        console.log(id);
    }
    // function replaceItemAtIndex(arr, index, newValue) {
    //     return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    // }
    // function addToCart(index) {
    //     (!cart.id) ? [...cartDetaials, setCart({
    //         id,
    //         img,
    //         title,
    //         desc,
    //         price,
    //         countity: 1
    //     })] : [...cartDetaials.slice(0, index), cartDetaials.countity++, ...cartDetaials.slice(index + 1)];
    // }
    return (
        <div className="card">
            <div className="img">
                <img src={img} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">price: ${price} </p>
                <p className="card-text">{desc.split(" ").slice(1, 6).join(" ")}</p>
                <Link to={`/productDetails/${id}`} className="btn btn-primary">Show Details</Link>
                <p className="ms-4 fs-3" to='/cart' onClick={() => { add(id) }}>
                    <AiOutlineShoppingCart />
                </p>
            </div>
        </div>

    )
}
