import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Auth = auth();
const FireStore = firestore();

export {Auth, FireStore};
