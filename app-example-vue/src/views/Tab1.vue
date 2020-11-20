<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-text class="hello-world">
        <h1>
          {{ result }}
        </h1>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText} from '@ionic/vue';
import axios from 'axios';
import './Tab1.css'


export default {
  name: 'Tab1',
  result: '',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonText},
  data() {
    return {
      result: ''
    };
  },
  created() {
    axios.get("http://151.115.48.28:3000").then(res => this.result = res.data.message)
  }
}
</script>
