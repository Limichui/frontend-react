import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, isSuccess, children }) => {

    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay" >
            <motion.div
                className={`modal ${isSuccess ? 'modal-success' : 'modal-error'}`}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div >
                    <p>{message} {children && <span className="modal-actions">{children}</span>}</p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;