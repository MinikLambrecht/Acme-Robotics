import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonBadge, IonLabel, IonButton, IonList, IonCard, IonCardContent, IonCardHeader, IonText, IonImg } from '@ionic/react';
import '../../src/Pages/Profile/Style.scss';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
    //   <div>
    //     <img src={user.picture} alt={user.name} />
    //     <h2>{user.name}</h2>
    //     <p>{user.email}</p>
        
    //   </div>
            <IonPage>
          <IonCard>
              <IonImg src={user.picture} alt={user.name} />
              <IonHeader>
                  <IonText>{user.name}</IonText>
              </IonHeader>
              <IonContent>
                  <IonText>{user.email}</IonText>
                  
              </IonContent>
          </IonCard>
      </IonPage>
    )
  );
};

export default Profile;