// 引入mutation的type
import { REQUEST, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
// 包含了多个直接修改状态数据方法的对象
export default {
  // 1.发送请求的时候改变了状态数据
  [REQUEST] (state) {
    // 第一次更改状态数据
    state.firstView = false
    state.loading = true
  },
  // 2.发送请求成功,并有响应的数据的时候,改变了状态数据
  [REQ_SUCCESS] (state, users) {
    // 第二次更新状态数据
    state.loading = false
    state.users = users
  },
  // 3.请求失败的时候,改变了状态数据
  [REQ_ERROR] (state, error) {
    // 再次更新状态数据
    state.loading = false
    state.errorMsg = error
  }

}
