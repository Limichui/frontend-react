import { useState } from "react";
import { useSelector } from 'react-redux';
import { motion } from "motion/react";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        //console.log('datos del formulario', formData);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    }

    const initialValueForm  = useSelector((state) => state.form);
    //console.log(initialValueForm);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <ModalInfo 
                visible={showModal}
                message="Formulario enviado!!!"
                onClose={onCloseModalInfo}
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
                        <input className="input-form"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{y: 100}}
                    animate={{y: 0}}
                    transition={{duration: 0.5}}
                >
                    <button className="button-form" type="submit">Login</button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;