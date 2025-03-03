// 权限配置页面
// import { MessagePlugin } from 'tdesign-vue-next';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import { getPermissionStore, getToken } from '@/store';
import router from '@/router';

const permissionStore = getPermissionStore();
const userStore = getToken();

// 页面加载进度
NProgress.configure({ showSpinner: false });

const { whiteListRouters } = permissionStore;
// 登录状态效验
/* router.beforeEach(async (to, from, next) => { // to代表用户去的页面的路由信息 form是用户当前页面的理由信息 next为路由跳转的控制函数
    NProgress.start(); // 开始加载进度条
    const { token } = userStore; // 获取用户token
    
    if (token) { // 已登录状态
      if (to.path === '/login') { // 如果要去登录页
        userStore.logout(); // 执行登出操作
        localStorage.removeItem('openeds') // 清理本地存储
        localStorage.removeItem('defaultIndex')
        permissionStore.restore(); // 重置权限状态
        next(); // 放行到登录页,此时to = /login
        return;
      }
      next(); // 直接放行到目标页 因为此时已经登录
    } else { // 未登录状态
      if (whiteListRouters.indexOf(to.path) !== -1) { // 检查是否在白名单
        next(); // 放行白名单路由
      } else {
        next(`/login?redirect=${to.path}`); // 重定向到登录页并携带原路径
      }
      NProgress.done(); // 立即结束进度条
    }
  }); */

router.afterEach(() => {
  NProgress.done();// 每次路由跳转完成后关闭进度条
});
