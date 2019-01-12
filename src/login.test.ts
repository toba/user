import '@toba/test';
import { AuthConfig, initialize } from './login';
import { Provider } from './providers';

const config: AuthConfig = {
   projectID: 'toba-test-752e6',
   apiKey: 'AIzaSyCRUHTQMU3JtDRj_GUSpP7E-u1sHGzK-rc',
   senderID: '758268537371',
   provider: [Provider.Facebook, Provider.Google]
};

test('retrieves enabled login providers', async () => {
   const app = initialize(config);
   expect(app).toBeDefined();

   const auth = app.auth();
   expect(auth).toBeDefined();

   //const methods = await auth.fetchSignInMethodsForEmail('test@gmail.com');

   //expect(methods).toHaveLength(3);
});
