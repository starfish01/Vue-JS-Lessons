/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/start',
    // Relative to /src/views
    view: 'Start'
  },
  {
    path: '/css-setup',
    name: 'CSS Setup',
    view: 'CSSSetup'
  },
  {
    path: '/js-setup',
    name: 'JS Setup',
    view: 'JSSetUp'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
