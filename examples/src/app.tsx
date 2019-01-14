import * as React from 'react';
import * as ReactDOM from 'react-dom';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Provider, initialize } from '../../src/';
import { FirebaseAuth, User, Error as AuthError } from '@firebase/auth-types';
import { FirebaseApp } from '@firebase/app-types';

interface State {
   user: User | null;
   error: AuthError | null;
}

const app: FirebaseApp = initialize({
   projectID: 'toba-test-752e6',
   apiKey: 'AIzaSyCRUHTQMU3JtDRj_GUSpP7E-u1sHGzK-rc',
   senderID: '758268537371',
   provider: [Provider.Facebook, Provider.Google]
});

export class ExampleApp extends React.Component<any, State> {
   auth: FirebaseAuth;

   constructor(props: any) {
      super(props);

      this.auth = app!.auth!();
      this.state = {
         user: null,
         error: null
      };
   }

   signin = async () => {
      const provider = new firebase!.auth!.FacebookAuthProvider();
      try {
         const res = await this.auth.signInWithPopup(provider);
         this.setState({ user: res.user, error: null });
      } catch (err) {
         this.setState({ user: null, error: err });
      }
   };

   render() {
      return (
         <div>
            <h2>Example Application</h2>
            {this.state.user !== null && (
               <div>{this.state.user.displayName}</div>
            )}
            {this.state.error !== null && <div>{this.state.error.message}</div>}
            <button onClick={this.signin}>Facebook Login</button>
         </div>
      );
   }
}

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(<ExampleApp />, document.getElementsByTagName('body')[0]);
});
