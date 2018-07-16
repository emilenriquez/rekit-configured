import { DefaultPage } from './';

export default {
  path: '/',
  name: 'Login',
  childRoutes: [
    {
      path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true
    }
  ]
};
