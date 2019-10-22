/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/login',
    name: 'login',
    view: 'Login'
  },
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/user-profile',
  //   meta: {
  //     requiresAuth: true
  //   },
  //   name: 'User Profile',
  //   view: 'UserProfile'
  // },
  {
    path: '/table-list',
    meta: {
      requiresAuth: true
    },
    name: 'table-list',
    view: 'TableList'
  },
  {
    path: '/typography',
    meta: {
      requiresAuth: true
    },
    name: 'typography',
    view: 'Typography'
  },
  // {
  //   path: '/icons',
  //   view: 'Icons'
  // },
  // {
  //   path: '/maps',
  //   view: 'Maps'
  // },
  {
    path: '/notifications',
    view: 'Notifications'
  }
]
