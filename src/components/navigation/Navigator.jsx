import { useState } from "react";
import { Link }  from "react-router";
import { useDispatch , useSelector } from 'react-redux';
import ModalInfo from "../../components/modals/ModalInfo.jsx";
import { clearFormData } from "../../store/features/form/formSlice.js";

const Navigator = () => {
    
    const dispatch = useDispatch();
    const initialValueForm = useSelector((state) => state.form);

    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleLogout = () => {
        setModalMessage("¿Estás seguro de que quieres cerrar sesión?");
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        dispatch(clearFormData()); // Limpiar datos de las variables de estado del usuario en Redux
        setShowLogoutModal(false);
    };

    const onCloseModalInfo = () => {
        setShowLogoutModal(false);
    };

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
            <div className="nav-span">
                {initialValueForm.formLogin.email && (
                    <>
                        <h5>Bienvenido {initialValueForm.formLogin.username} | {initialValueForm.formLogin.email}</h5>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>

            <ModalInfo 
                visible={showLogoutModal}
                message={modalMessage} 
                onClose={onCloseModalInfo}
                isSuccess={false}
            >
                <button className="confirm-logout-btn" onClick={confirmLogout}>
                    Presionar para salir
                </button>
            </ModalInfo>
        </nav>
    );
}

export default Navigator;