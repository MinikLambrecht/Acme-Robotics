import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonBadge, IonLabel, IonButton, IonList, IonCard, IonCardContent, IonCardHeader, IonText } from '@ionic/react';
import './Style.scss';

class Login extends React.Component {
  render() {
    return (
      <IonPage>
          <IonCard>
              <IonHeader>
                  <IonText>Hello bob</IonText>
              </IonHeader>
              <IonContent>
                  
              </IonContent>
          </IonCard>
      </IonPage>
    )
  };
};

export default Login;