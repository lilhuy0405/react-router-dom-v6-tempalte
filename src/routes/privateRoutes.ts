import { About, Home, PostDetail, Posts, Profile } from '../pages'

const privateRoute = {
  home: {
    path: '/',
    component: Home,
    requiredLogin: false
  },
  hotPost: {
    path: '/about',
    component: About,
    requiredLogin: false
  },
  newPost: {
    path: '/posts/:id',
    component: PostDetail,
    requiredLogin: true
  },
  create: {
    path: '/posts',
    component: Posts,
    requiredLogin: true
  },
  profile: {
    path: '/profile',
    component: Profile,
    requiredLogin: true
  }

}

export default privateRoute
