import "bootstrap/dist/css/bootstrap.min.css";
function ProductCard({ title, price, description, image }) {
    return (
        <div className="col-md-3">
            <div className="card  m-4 p-4" style={{ "width": "18rem" }}>
                <img src={image} style={{ "width": "200px", height: "200px" }} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;
// npx create-react-app e-commerce
// cd e-commerce
// npm start