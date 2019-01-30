import * as React from 'react';
import { Provider } from '../../src/';
import { FluxComponent } from '@toba/state';
import { userState, UserState, Action } from '../../src';

interface State {
   user: UserState;
   notifications: string[];
}

export class NavBar extends FluxComponent<any, State> {
   constructor(props: any) {
      super(props, { user: userState, notifications: [] });
   }

   render() {
      return (
         <nav>
            {this.state.user !== null && this.state.user.loggedIn ? (
               <div style={{ textAlign: 'right' }}>
                  {this.state.user.name}
                  {this.state.user.photoURL !== null && (
                     <img src={this.state.user.photoURL} />
                  )}
                  <button onClick={this.do(Action.Logout)}>Logout</button>
               </div>
            ) : (
               <button onClick={this.do(Action.Login, Provider.Facebook)}>
                  Facebook Login
               </button>
            )}
            <hr />
         </nav>
      );
   }
}
