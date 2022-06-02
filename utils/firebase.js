import {app, database} from '../firebaseConfig'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'

export const collectionRef = collection(database, 'products');

export const saveProduct = (data) => {
    addDoc(collectionRef, {
        data: data
    })
}

export const checkFavourite = () => {

}

