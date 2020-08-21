import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../Components/ExploreContainer';
import './Style.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Content of Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Login page" />
      </IonContent>
    </IonPage>
  );
};

export default Login;