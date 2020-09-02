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
  IonTextarea,
  IonItemDivider,
  IonGrid,
  IonCol,
  IonRow
} from '@ionic/react';
import './Style.scss';
import { Console } from 'console';

const Home: React.FC = () => {

  function dismissModal() {
    setModal(false);
  }

  function setShowModal(show: boolean, active: boolean , finish: boolean) {
    //Gather data and insert into modal
    if (finish) {

    }
    else if (active)
    {

    }

    setModal(show);
  }

  const [showModal, setModal] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonHeader collapse="condense">
          <IonToolbar color="secondary">
            <IonTitle>Logget ind som [Bruger].</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard color="tertiary">
          <IonCardHeader>
            <IonCardTitle>Broken PC</IonCardTitle>
            <IonCardSubtitle class="subtitle">ID: 5423 (Priority 1)</IonCardSubtitle>
          </IonCardHeader>

          <IonItem color="tertiary" class="desItem">
            <IonLabel class="description">
                The PC belonging to our CEO will no longer start up and keeps turning on and off
            </IonLabel>
            <IonButton class="viewButton" fill="outline" slot="end" onClick={() => setShowModal(true, false, false)}>Se sag</IonButton>
          </IonItem>
          
        </IonCard>

        <IonModal isOpen={showModal} id="CaseInfoModal" cssClass="modal" onDidDismiss={() => dismissModal()}>
          <IonContent fullscreen color="primary" class="inputSize">
            <br/>
            <IonButton class="closeModalButton" onClick={() => setShowModal(false, false, false)} color="danger">Luk</IonButton>
            <hr/>
            <br/>
            <IonItem color="tertiary" class="textItem">
              <IonLabel class="textItemLabel" position="floating">Prioritet</IonLabel>
              <IonInput class="textItemInput" type="text" value="1" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary"  class="textItem">
              <IonLabel class="textItemLabel" position="floating">Titel</IonLabel>
              <IonInput class="textItemInput" type="text" value="Broken PC" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary" class="textItem">
              <IonLabel class="textItemLabel" position="floating">E-Mail</IonLabel>
              <IonInput class="textItemInput" type="email" value="lol@mail.fake" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary" class="textItem">
              <IonLabel class="textItemLabel" position="floating">Rolle</IonLabel>
              <IonInput class="textItemInput" type="text" value="CEO" readonly></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary" class="textItem">
              <IonLabel class="textItemLabel" position="floating">Beskrivelse</IonLabel>
              <IonTextarea class="textItemArea" rows={4} cols={20} value="The PC belonging to our CEO will no longer start up and keeps turning on and off" readonly></IonTextarea>
            </IonItem>
            <br/>
            <hr/>
            <br/>
            <IonItem color="tertiary" class="textItem">
              <IonLabel class="textItemLabel" position="floating">Løsning</IonLabel>
              <IonInput class="textItemInput" type="text" value=""></IonInput>
            </IonItem>
            <br/>
            <IonItem color="tertiary" class="textItem">
              <IonLabel class="textItemLabel" position="floating">WIP</IonLabel>
              <IonInput class="textItemInput" type="text" value=""></IonInput>
            </IonItem>
            <br/>
            <hr/>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton class="ongoingCaseButton" onClick={() => setShowModal(false, true, false)} color="warning">Igang</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton class="finishCaseButton" onClick={() => setShowModal(false, false, true)} color="success">Færdig</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <br/>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;