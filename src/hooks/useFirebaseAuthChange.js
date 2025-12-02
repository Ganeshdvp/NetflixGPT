import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser} from '../utils/userSlice';

export const useFirebaseAuthChange = () => {
  const dispatch = useDispatch();

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid:uid, fullName:displayName, email:email, photoURL:photoURL }));
      } else {
        dispatch(removeUser());
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
};
