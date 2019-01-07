import firebase from '@firebase/app';
//import { FirebaseApp } from '@firebase/app-types';
import '@firebase/auth';
import { FirebaseApp } from '@firebase/app-types';

export interface AuthConfig {
   apiKey: string;
   projectID: string;
   senderID: string;
}

export const initialize = (config: AuthConfig): FirebaseApp =>
   firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: `${config.projectID}.firebaseapp.com`,
      databaseURL: `https://${config.projectID}.firebaseio.com`,
      projectId: config.projectID,
      storageBucket: `${config.projectID}.appspot.com`,
      messagingSenderId: config.senderID
   });
