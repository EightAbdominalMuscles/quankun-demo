export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      // 首页
      { path: '/', component: '../pages/index' },
      // qiankun
      { path: '/demo', component: 'demo',  microApp: 'demo'},
    ]
  },
]