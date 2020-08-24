import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonIcon, 
  IonLabel, 
  IonModal, 
  IonInput, 
  IonTextarea
} from '@ionic/react';
import './Style.scss';
import { Console } from 'console';

const Home: React.FC = () => {

  function setShowModal(show: boolean) {
    //Gather data and insert into modal


    setModal(show);
  }

  const [showModal, setModal] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonHeader collapse="condense">
          <IonToolbar color="secondary">
            <IonTitle>Logged in as [User].</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard color="tertiary">
          <IonCardHeader>
            <IonCardTitle>Broken PC</IonCardTitle>
            <IonCardSubtitle class="subtitle">ID: 5423 (Priority 1)</IonCardSubtitle>
          </IonCardHeader>

          <IonItem color="tertiary">
            <IonLabel>
              The PC belonging to our CEO will no longer start up and keeps turning on and off
            </IonLabel>
            <IonButton fill="outline" slot="end" onClick={() => setShowModal(true)}>View inquiry</IonButton>
          </IonItem>
        </IonCard>

        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <IonContent fullscreen color="primary" class="inputSize">
            <IonButton class="closeModalButton" onClick={() => setShowModal(false)} color="danger">Close</IonButton>
            
            <IonItem color="tertiary">
              <IonLabel position="floating">Title</IonLabel>
              <IonInput type="text" value="Broken PC" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary">
              <IonLabel position="floating">E-Mail</IonLabel>
              <IonInput type="email" value="lol@mail.fake" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary">
              <IonLabel position="floating">Role</IonLabel>
              <IonInput type="text" value="CEO" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary">
              <IonLabel position="floating">Description</IonLabel>
              <IonTextarea value="The PC belonging to our CEO will no longer start up and keeps turning on and off" readonly></IonTextarea>
            </IonItem>
            
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;