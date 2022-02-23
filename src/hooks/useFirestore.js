import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFirestore
            .collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                setDocs(snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })));
            });

        return () => unsubscribe();
    }, [collection]);

    return { docs };
}

export default useFirestore;