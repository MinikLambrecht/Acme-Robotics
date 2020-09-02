import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonBadge, IonLabel, IonButton, IonList, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import './Style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      attempts: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isHidden: !state.isHidden,
      attempts: state.attempts + 1
    }));
  }

  render() {
    const hidden = this.state.isHidden;

    return (
      <IonPage>
        <IonHeader collapse="condense">
          <IonToolbar color="secondary">
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen color="primary">
          
          <IonCard color="tertiary">
            <IonCardContent color="primary">
              {!hidden 
              ? 
                <IonItem className="test" color="tertiary">
                  <IonLabel className="ErrorLabel" type="text" color="danger">
                    E-mail or Password is wrong!
                  </IonLabel>

                  <IonBadge color="primary">
                    x{this.state.attempts}
                  </IonBadge>
                </IonItem>
              : 
                "" 
              }
              
              <IonList color="dark" className="Container">

                <IonItem color="tertiary" className="InputSize">
                  <IonLabel position="floating">E-mail</IonLabel>
                  <IonInput type="email" required={true} />
                </IonItem>

                <IonItem color="tertiary" className="InputSize">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="password" required={true} />
                </IonItem>          
              </IonList>

              <IonButton className="SignInButton" type="button" size="default" onClick={this.handleClick} color="success">
                  Sign In
              </IonButton>

              <IonButton className="SignUpButton" type="button" size="default" color="medium">
                  Sign Up
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    )
  };
};

export default Login;