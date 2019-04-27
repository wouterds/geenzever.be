// tslint:disable-next-line
require('dotenv').config();
import { register } from 'tsconfig-paths';
import tsConfig from '../tsconfig.json';

register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

// tslint:disable-next-line
require('services/translation').init();
