import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";

import {useEffect, useState} from 'react'
//initialize the firebase 
initializeFirebase()

const Usefirebase = () => {
  const [user,setUser]=useState({});
  const [isloding,setIsloding]=useState(true)
  const [error,setError]=useState('')

  const auth = getAuth();
  const Gogoleprovider = new GoogleAuthProvider();


  const registeruser =(email,password,name,history)=>{
          setIsloding(true)
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
              setError('');
              const newUser ={email,displayName:name};
              setUser(newUser);
              //save user to the databse
              saveUser(email,name)
              
              //send name to firebase after creati
              

              updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              history.replace('/');

                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })

            .finally(()=> setIsloding(false))
    }

    const Signinuser =(email,password,location,history)=>{
            setIsloding(true)

                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {

                      const destination =location?.state?.from || '/';
                      history.replace(destination);
                      setError(' ');

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError(errorMessage);

                    })
                    
                    .finally(()=> setIsloding(false))
                    ;
                }


    const gooleSignin=(location,history)=>{

      setIsloding(true)

      signInWithPopup(auth, Gogoleprovider )
        .then((result) => {
          const user =result.user;
          setError(' ');
        
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        
        }).finally(()=> setIsloding(false));

    }

    //observed user state

    useEffect(()=>{
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              
             
              setUser(user)
            
            }
             else {
             setUser({})
            }
            setIsloding(false)
    
    
          });
          return()=>unsubcribed
     },[])



    const saveUser =(email,displayName)=>{
   
      const user = {user,displayName};

      fetch('https://quiet-bayou-99262.herokuapp.com/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()
      

    }




    const logout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsloding(false))
          
          ;
    }





  return{
      user,
      isloding,
      registeruser,
      error,
      logout,
      Signinuser,
      gooleSignin
  }

};

export default Usefirebase;