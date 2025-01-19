import { Link }  from "react-router";
import { useSelector } from "react-redux";

const Navigator = () => {
    
    const initialValueForm = useSelector((state) => state.form);

    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/counter" className="nav-link">Counter</Link>
                <Link to="/think" className="nav-link">Think</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
            <span className="nav-span">
                {initialValueForm.formData.email && <h5>Bienvenido {initialValueForm.formData.username} | {initialValueForm.formData.email}</h5>}
            </span>
        </nav>
    );
}

export default Navigator;