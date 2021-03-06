import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (event) => {
        let selected = event.target.files[0];
        if (selected && types.includes(selected.type)) {
            console.log(selected);
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };
    return (
        <>
            <form action="">
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </>
    );
}

export default UploadForm;
