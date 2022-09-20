import { collection, addDoc } from 'firebase/firestore';

try {
    const docRef = await addDoc(collection(db, "products"), {
        
    });
    console.log("Document writtenwith ID: ", docRef.id);
} catch (e) {
    console.error('Error adding document: ', e);
}