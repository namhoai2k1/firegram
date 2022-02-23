import { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
    const [imgselected, setImgselected] = useState(null);
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setImgselected={setImgselected} />
            {imgselected && <Modal imgselected={imgselected} setImgselected={setImgselected}/>}
        </div>
    );
}

export default App;
