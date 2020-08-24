import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonItemGroup } from '@ionic/react';
import './Style.scss';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary">
        <IonItemGroup className="CustomContainer">

          <IonItem color="primary" className="InputSize">
            <IonLabel position="floating">E-mail</IonLabel>
            <IonInput type="email" />
          </IonItem>

          <IonItem color="primary" className="InputSize">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" />
          </IonItem>
          
          <IonButton className="CustomButton" size="default" color="light" expand="block">
            Login
          </IonButton>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Login;