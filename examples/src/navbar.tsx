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
      super(props, { user: userState }, { notifications: [] });
   }

   render() {
      return (
         <nav>
            {this.state.user === null ? (
               <button onClick={this.do(Action.Login, Provider.Facebook)}>
                  Facebook Login
               </button>
            ) : (
               <div>
                  {this.state.user.name}
                  <button onClick={this.do(Action.Logout)}>
                     Facebook Login
                  </button>
               </div>
            )}
         </nav>
      );
   }
}
