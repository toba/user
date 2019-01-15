import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, initialize, userState, UserState, Action } from '../../src/';
import { FluxComponent } from '@toba/state';
import { NavBar } from './navbar';

interface State {
   user: UserState;
   error: { message: string } | null;
}

initialize({
   projectID: 'toba-test-752e6',
   apiKey: 'AIzaSyCRUHTQMU3JtDRj_GUSpP7E-u1sHGzK-rc',
   senderID: '758268537371',
   provider: [Provider.Facebook, Provider.Google]
});

export class ExampleApp extends FluxComponent<any, State> {
   constructor(props: any) {
      super(props, { user: userState }, { error: null });
      this.emit(Action.Connect, [Provider.Facebook, Provider.Google]);
   }

   render() {
      return (
         <div>
            <NavBar />
            <h2>Example Application</h2>
         </div>
      );
   }
}

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(<ExampleApp />, document.getElementById('app-root'));
});
