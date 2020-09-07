import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonBadge, IonLabel, IonButton, IonList, IonCard, IonCardContent, IonCardHeader, IonText } from '@ionic/react';
import './Style.scss';
import Profile from '../../Components/ProfileComponent';
class Login extends React.Component {
  render() {
    return (
      <Profile />
      // <IonPage>
      //     <IonCard>
      //         <IonHeader>
      //             <IonText>Hello bob</IonText>
      //         </IonHeader>
      //         <IonContent>
                  
      //         </IonContent>
      //     </IonCard>
      // </IonPage>
    )
  };
};

export default Login;