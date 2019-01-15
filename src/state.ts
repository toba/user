import '@firebase/auth';
import firebase from '@firebase/app';
import { is } from '@toba/tools';
import { StateStore, flux } from '@toba/state';
import { FirebaseAuth, User, AuthProvider } from '@firebase/auth-types';
import { Action } from './actions';

export interface State {
   id: string | null;
   loggedIn: boolean;
   name: string | null;
   email: string | null;
   photoURL: string | null;
   emailVerified: boolean;
}

const emptyState = Object.freeze<State>({
   id: null,
   loggedIn: false,
   name: null,
   email: null,
   photoURL: null,
   emailVerified: false
});

/**
 * @see https://firebase.google.com/docs/auth/web/manage-users
 */
class UserState extends StateStore<State> {
   providers: AuthProvider[] = [];
   auth: FirebaseAuth;
   initialized = false;

   constructor() {
      super(emptyState);
      this.initialize();
   }

   initialize() {
      if (
         this.initialized === false &&
         firebase !== undefined &&
         firebase.auth !== undefined &&
         firebase.apps.length > 0
      ) {
         this.auth = firebase.auth();
         this.onAuthChange(this.auth.currentUser);
         this.providers.push(new firebase.auth.FacebookAuthProvider());
         this.auth.onAuthStateChanged(this.onAuthChange);
         this.initialized = true;
      }
   }

   onAuthChange = (user: User | null) => {
      if (is.value<User>(user)) {
         this.setState({
            id: user.uid,
            loggedIn: true,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
         });
      } else {
         this.setState(emptyState);
      }
   };

   async handler<T>(action: Action, data?: T) {
      switch (action) {
         case Action.Login:
            const provider = this.providers[0];
            const res = await this.auth.signInWithPopup(provider);

            return;

         case Action.Initialize:
            this.initialize();
            return;

         case Action.Logout:
            return;
      }
      return;
   }
}

export const userState = flux.subscribe(new UserState());
