import config from 'config';

import * as steem from '@whaleshares/wlsjs';

const path = require('path');
const ROOT = path.join(__dirname, '../..');

// Tell `require` calls to look into `/app` also
// it will avoid `../../../../../` require strings

// use Object.assign to bypass transform-inline-environment-variables-babel-plugin (process.env.NODE_PATH= will not work)
Object.assign(process.env, {NODE_PATH: path.resolve(__dirname, '..')});

require('module').Module._initPaths();

// Load Intl polyfill
// require('utils/intl-polyfill')(require('./config/init').locales);

global.$STM_Config = {
  fb_app: config.get('grant.facebook.key'),
  steemd_connection_client: config.get('steemd_connection_client'),
  steemd_connection_server: config.get('steemd_connection_server'),
  chain_id: config.get('chain_id'),
  address_prefix: config.get('address_prefix'),
  img_proxy_prefix: config.get('img_proxy_prefix'),
  ipfs_prefix: config.get('ipfs_prefix'),
  read_only_mode: config.get('read_only_mode'),
  upload_image: config.get('upload_image'),
  site_domain: config.get('site_domain'),
  facebook_app_id: config.get('facebook_app_id'),
  google_analytics_id: config.get('google_analytics_id'),
  wls_api_url: config.get('wls_api_url')
};

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const WebpackIsomorphicToolsConfig = require(
  '../../webpack/webpack-isotools-config'
);

global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  WebpackIsomorphicToolsConfig
);

global.webpackIsomorphicTools.server(ROOT, () => {
  steem.api.setOptions({url: config.steemd_connection_server});
  steem.config.set('address_prefix', config.get('address_prefix'));
  steem.config.set('chain_id', config.get('chain_id'));

  // const CliWalletClient = require('shared/api_client/CliWalletClient').default;
  // if (process.env.NODE_ENV === 'production') connect_promises.push(CliWalletClient.instance().connect_promise());
  try {
    require('./server');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
