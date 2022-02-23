import { motion } from 'framer-motion';
import React from 'react';

function Modal({ imgselected, setImgselected }) {
    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setImgselected(null);
        }
    };
    return (
        <motion.div
            className="backdrop"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={imgselected}
                alt="uploaded"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
}

export default Modal;
