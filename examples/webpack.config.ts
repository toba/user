import * as path from 'path';
import { buildTester } from '@toba/build';

export default {
   ...buildTester({
      to: path.resolve(__dirname, 'dist')
   }),
   mode: 'production'
};
