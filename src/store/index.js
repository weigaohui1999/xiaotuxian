import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from '@/store/modules/user'
import cart from '@/store/modules/cart'
import category from '@/store/modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [createPersistedState({
    // 本地存储的名字
    key: 'xiaotuxian-store',
    //  指定要存储的模块
    paths: [user, cart, category]
  })]
})
