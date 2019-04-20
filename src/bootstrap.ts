import tsConfigPaths from 'tsconfig-paths';
import tsConfig from '../tsconfig.json';

tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,
});
