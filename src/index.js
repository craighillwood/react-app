import config from './config';

console.log('hello world!!!');

import(/* webpackChunkName: "lazy-hello" */ './lazy-hello').then(module => {
  console.log('lazy loaded!');
});
