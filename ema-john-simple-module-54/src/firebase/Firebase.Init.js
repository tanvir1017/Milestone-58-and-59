import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.Config';

const initAuthentication = () => {
    initializeApp(firebaseConfig)
};

export default initAuthentication;



