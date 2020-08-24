import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonList } from '@ionic/react';
import './Style.scss';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar color="secondary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="primary">
        
        <IonList color="dark" className="Container">
          <IonItem color="primary" className="InputSize">
            <IonLabel position="floating">E-mail</IonLabel>
            <IonInput type="email" />
          </IonItem>

          <IonItem color="primary" className="InputSize">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" />
          </IonItem>          
        </IonList>

        <IonButton className="CustomButton" size="default" color="light" expand="block">
            Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;