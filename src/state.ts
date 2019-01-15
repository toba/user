import '@firebase/auth';
import firebase from '@firebase/app';
import { is } from '@toba/tools';
import { StateStore, flux } from '@toba/state';
import {
   FirebaseAuth,
   User,
   AuthProvider,
   UserCredential
} from '@firebase/auth-types';
import { Provider } from './providers';
import { Action } from './actions';

export interface State {
   id: string | null;
   loggedIn: boolean;
   name: string | null;
   email: string | null;
   photoURL: string | null;
   emailVerified: boolean;
   initialized: boolean;
}

const emptyState = Object.freeze<State>({
   id: null,
   loggedIn: false,
   initialized: false,
   name: null,
   email: null,
   photoURL: null,
   emailVerified: false
});

/**
 * @see https://firebase.google.com/docs/auth/web/manage-users
 */
class UserState extends StateStore<State> {
   providers: Map<string, AuthProvider> = new Map();
   auth: FirebaseAuth;

   constructor() {
      super(emptyState);
   }

   initialize(...providerID: string[]) {
      if (
         this.state.initialized === false &&
         firebase !== undefined &&
         firebase.auth !== undefined &&
         firebase.apps.length > 0
      ) {
         this.auth = firebase.auth();
         this.onAuthChange(this.auth.currentUser);
         this.providers.set(
            Provider.Facebook,
            new firebase.auth.FacebookAuthProvider()
         );
         this.auth.onAuthStateChanged(this.onAuthChange);
         this.setState({ initialized: true });
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
         this.clear();
      }
   };

   clear = () => {
      this.setState({ ...emptyState, initialized: true });
   };

   async handler(action: Action, data?: any) {
      switch (action) {
         case Action.Login:
            if (this.providers.has(data)) {
               const provider = this.providers.get(data)!;
               try {
                  this.auth.signInWithRedirect(provider);
                  // onAuthChange will handle response
               } catch (err) {
                  this.clear();
               }
            } else {
               console.error(`Provider "${data}" is not defined`);
            }
            return;

         case Action.Connect:
            if (is.array<string>(data)) {
               this.initialize(...data);
            } else {
               console.error(
                  'Provider IDs must be supplied to initialize authentication'
               );
            }
            return;

         case Action.Logout:
            this.auth.signOut();
            return;
      }
      return;
   }
}

export const userState = flux.subscribe(new UserState());
