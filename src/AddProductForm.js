import "bootstrap/dist/css/bootstrap.min.css";
import { use, useState } from "react";
function AddProductForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    function addProduct() {
        const product = {
            title: title,
            description: description,
            price: price,
            image: image
        }
        fetch("http://localhost:8080/products", {
            headers: {
                "content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(product)
        })
            .then(res => {
                if (res.ok) {
                    alert("Data Inserted")
                } else {
                    alert("Failed to insert")
                }
            }
            )

    }

    return (
        <div className="container mt-5">
            <h2>Add New Product</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Product Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter product title" />
                    <label htmlFor="description" className="form-label">Product Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter product description" />
                    <label htmlFor="title" className="form-label">Product Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter product price" />
                    <label htmlFor="title" className="form-label">Product image url</label>
                    <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter product url" />
                    <button onClick={addProduct} type="button" className="btn btn-primary mt-3">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm;