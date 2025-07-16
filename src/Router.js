import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ProductList from './ProductList';
import "bootstrap/dist/css/bootstrap.min.css";

function Router() {
    return (
        <>
            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" >
                <li className="nav-item" role="presentation">
                    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
                </li>
            </ul>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/product-list' element={<ProductList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;