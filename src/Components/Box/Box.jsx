import { Link } from 'react-router-dom';
import '../Box/Box.css'
import { useRecoilState, useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
export default function Box({ id, img, title, desc, price }) {
    const [cart, setCart] = useRecoilState(cartDetaials)
    const cardValues = useRecoilValue(cartDetaials)



    // const add = (id) => {
    //     cardValues.map((value) => {
    //         if (id === value.id) {
    //             value.countitiy += 1;
    //             setCart([...cart, value]);
    //             console.log(value.countitiy);
    //         }
    //     }
    //     )
    // }
    // const remove = (id) => {
    //     cardValues.map((value) => {
    //         if (id === value.id) {
    //             value.countitiy -= 1;
    //             setCart([...cart, value]);
    //             console.log(value.countitiy);
    //         }
    //     }
    //     )
    // }

    // const handleAddToCart = () => {
    //     const updatedCart = { ...cart }
    //     console.log(updatedCart.hasOwnProperty(id));
    //     if (updatedCart.hasOwnProperty(id)) {
    //         updatedCart[id]++
    //     } else {
    //         updatedCart[id] = 1
    //     }
    //     setCart(updatedCart)
    // }
    function operationAdd() {
        setCart([...cart, {
            id,
            countitiy: 1,
            img,
            title,
            desc
        }])
    }

    function addToCart(index) {
        console.log(index);
        console.log(cardValues.length);
        if (cardValues.length > 0) {
            cardValues.map((value) => {
                if (index === value.id) {
                    console.log(value.countitiy);
                    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]) 
                    // value.countitiy += 1;
                    // setCart([...cart, value]);
                    console.log(value.countitiy);
                } else {
                    operationAdd()
                }
            })
        } else {
            operationAdd()
        }
    }
    return (
        <div className="card">
            <div className="img">
                <img src={img} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">price: ${price} </p>
                <p className="card-text">{desc.split(" ").slice(1, 6).join(" ")}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/productDetails/${id}`} className="btn btn-primary">Show Details</Link>
                    <button className="btn btn-success"
                        to='/cart' onClick={() => addToCart(id)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}
