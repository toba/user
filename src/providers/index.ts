import firebase from '@firebase/app';
import '@firebase/auth';

const auth = firebase!.auth!;

/**
 * Available authentication providers.
 */
export const Provider = {
   Facebook: auth.FacebookAuthProvider.PROVIDER_ID,
   GitHub: auth.GithubAuthProvider.PROVIDER_ID,
   Google: auth.GoogleAuthProvider.PROVIDER_ID,
   Twitter: auth.TwitterAuthProvider.PROVIDER_ID
};

/**
 * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithRedirect
 */
export enum ErrorCode {
   /**
    * Thrown if authDomain configuration is not provided when calling
    * `firebase.initializeApp()`. Check Firebase Console for instructions on
    * determining and passing that field.
    */
   DomainNotConfigured = 'auth/auth-domain-config-required',
   /**
    * Thrown if this operation is not supported in the environment your
    * application is running on. `location.protocol` must be http or https.
    */
   OperationNotSupported = 'auth/operation-not-supported-in-this-environment',
   /**
    * Thrown if the app domain is not authorized for OAuth operations for your
    * Firebase project. Edit the list of authorized domains from the Firebase
    * console.
    */
   UnauthorizedDomain = 'auth/unauthorized-domain'
}
