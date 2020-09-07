import React from "react";
import { IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home, personCircle } from 'ionicons/icons';
import { useAuth0 } from "@auth0/auth0-react";

const LoginTabButton = () => {
    const { loginWithRedirect , logout, isAuthenticated } = useAuth0();
    if(isAuthenticated){
        return <IonLabel onClick={() => logout({ returnTo: window.location.origin })}>Logout</IonLabel>
    } else{
       return <IonLabel onClick={() => loginWithRedirect()}>Login</IonLabel>; 
    }
    
};
export default LoginTabButton;