
export default function AddProduct() {
    return (
        <>
            <form className="container mt-5">
                <div className="mb-3">
                    <label htmlFor="inpTitle" className="form-label">Title</label>
                    <input name="productTitle" type="text" className="form-control" id="inpTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpImage" className="form-label">Image</label>
                    <input name="productImage" type="file" accept="image/*" className="form-control" id="inpimage" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpDescription" className="form-label">Description</label>
                    <input name="productDescription" type="text" className="form-control" id="inpDescription" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpPrice" className="form-label">Price</label>
                    <input name="productPrice" type="number" className="form-control" id="inpPrice" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpRating" className="form-label">Rating</label>
                    <input name="productRating" type="number" className="form-control" id="inpRating" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpDiscount" className="form-label">Discount Percentage</label>
                    <input name="productDiscount" type="number" className="form-control" id="inpDiscount" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpStock" className="form-label">Stock</label>
                    <input name="productStock" type="number" className="form-control" id="inStock" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpBrand" className="form-label">Brand</label>
                    <input name="productBrand" type="text" className="form-control" id="inpBrand" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpCategory" className="form-label">Category</label>
                    <input name="productCategory" type="text" className="form-control" id="inpCategory" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpOtherImages" className="form-label">Other Images</label>
                    <input name="productOtherImages" type="file" accept="image/*" className="form-control" id="inpOtherImages" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
