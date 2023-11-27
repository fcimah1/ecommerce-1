import { Link } from 'react-router-dom';
import '../Box/Box.css'
export default function Box({ id, img, title, desc, price }) {
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
            </div>
        </div>

    )
}
