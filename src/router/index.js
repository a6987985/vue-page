import Vue from 'vue'
import Router from 'vue-router'
import Info from '../components/info.vue'
import Demos from '../components/demos.vue'
import Demo1 from '../components/demo1.vue'
import Demo2 from '../components/demo2.vue'
import Demo3 from '../components/demo3.vue'
import Demo4 from '../components/demo4.vue'
import Resume from '../components/resume.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/info'
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/demos',
      name: '/demos',
      component: Demos,
      children: [
        {
          path: 'canvasDraw',
          name: 'demo1',
          component: Demo1
        },
        {
          path: 'traversal',
          name: 'demo2',
          component: Demo2
        },
        {
          path: '3d',
          name: 'demo3',
          component: Demo3
        },
        {
          path: 'sortTable',
          name: 'demo4',
          component: Demo4
        },]
    }

  ]
})
