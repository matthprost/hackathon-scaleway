import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
    const [result, setResult] = useState({ message: '' })
    useEffect(() => {
        fetch('http://151.115.48.28:3000/').then(res => res.json()).then(res => setResult(res))
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonText class="hello-world">
                    <h1>{ result.message }</h1>
                </IonText>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
