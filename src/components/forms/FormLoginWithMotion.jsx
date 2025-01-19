import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "motion/react";
import { setInitialValue } from "../../store/features/form/formSlice.js";
import useForm from "../hooks/useForm.js";
import ModalInfo from "../../components/modals/ModalInfo.jsx";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {

    const {formData, handleChange} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(""); // Estado para almacenar el mensaje del modal.
    const [isSuccess, setIsSuccess] = useState(false); // Estado para controlar si la validación fue exitosa
    const [inputsDisabled, setInputsDisabled] = useState(false); // Estado para controlar si los inputs están deshabilitados
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
    

    const dispatch = useDispatch(); // Inicializar el hook useDispatch
    const initialValueForm  = useSelector((state) => state.form);
    console.log(initialValueForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialValueForm.formData.password === formData.password) {
            dispatch(setInitialValue({
                ...initialValueForm.formData,
                username: formData.username,
                email: formData.email
            }));
            setModalMessage(`Bienvenido: ${formData.username}`);
            setInputsDisabled(true); // Deshabilitar los inputs para que no cambie el contenido de cada input
            setIsSuccess(true); // Indica que la validación fue exitosa
        } else {
            setModalMessage("Username/Password incorrectos!!!.");
            setIsSuccess(false); // Indica que la validación no fue exitosa
        }

        setShowModal(true);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <ModalInfo 
                visible={showModal}
                message={modalMessage} 
                onClose={onCloseModalInfo}
                isSuccess={isSuccess} 
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="div-form">
                        <label className="label-form">Module:</label>
                        <input className="input-form"
                            type="text"
                            name="module"
                            value={initialValueForm.formData.module}
                            required
                            disabled
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="div-form">
                        <label className="label-form">Username:</label>
                        <input className="input-form"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            disabled={inputsDisabled}
                        />
                        
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="div-form">
                        <label className="label-form">Email:</label>
                        <input className="input-form"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={inputsDisabled} 
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="div-form">
                        <label className="label-form">Password:</label>
                        <input className="input-form input-password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={inputsDisabled} 
                        />
                        <button
                            type="button"
                            className="button-password"
                            onClick={togglePasswordVisibility}
                        >
                                {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        className="button-form"
                        type="submit"
                        disabled={inputsDisabled}
                    >
                        Login
                    </button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;