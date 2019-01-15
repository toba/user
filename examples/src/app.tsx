import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, initialize } from '../../src/';
import { FluxComponent } from '@toba/state';
import { userState, UserState, Action } from '../../src';

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
      this.emit(Action.Initialize, [Provider.Facebook, Provider.Google]);
   }

   render() {
      return (
         <div>
            <h2>Example Application</h2>
            {this.state.user !== null && <div>{this.state.user.name}</div>}
            {this.state.error !== null && <div>{this.state.error.message}</div>}
            <button onClick={this.do(Action.Login, Provider.Facebook)}>
               Facebook Login
            </button>
         </div>
      );
   }
}

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(<ExampleApp />, document.getElementsByTagName('body')[0]);
});
