import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

function ProgressBar({ file, setFile }) {
    const { progress, url } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        />
    );
}

export default ProgressBar;
