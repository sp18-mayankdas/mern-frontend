import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
                    alt="App Logo"
                    className="logoImage"
                />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>

                </ul>

            </div>
        </div>
    )
}
