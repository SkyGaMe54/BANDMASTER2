// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHVVXbFF3qG7V1INyQHQpU9oFPWKE_Xtk",
  authDomain: "bandmaster-9545c.firebaseapp.com",
  projectId: "bandmaster-9545c",
  storageBucket: "bandmaster-9545c.appspot.com",
  messagingSenderId: "852633219717",
  appId: "1:852633219717:web:a8b9f8f8f8f8f8f8f8f8f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function getImageUrl(imagePath: string): Promise<string | null> {
  try {
    const imageRef = ref(storage, `IMG BANDMASTER/${imagePath}`);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'URL de l\'image:', error);
    return null;
  }
}