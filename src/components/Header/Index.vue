<!--
 * @Author: WZQ
 * @Date: 2020-11-19 14:56:29
 * @LastEditTime: 2020-11-27 16:34:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Header\Index.vue
-->
<template>
  <div class="top-bar">
    <div class="container-box container clearnav secnav">
      <div class="header_nav">
        <div class="top-bar-left pull-left navlogo">
          <a href="https://qicao.cn/" class="logo box">
            <!-- <img src="https://qicao.cn/images/logo.png" class="logo-light" id="logo-light" alt="七草博客" /> -->
            <b class="shan"></b>
          </a>
        </div>
        <div class="search-box">
          <div class="search-warp clearfix">
            <form method="get" action="">
              <div class="search-area">
                <el-input class="search-input" v-model="keyWord" placeholder="搜索感兴趣的知识和文章"></el-input>
              </div>
            </form>
            <i class="el-icon-search"></i>
          </div>
          <div class="search-btn">
            <a href="https://qicao.cn/guestbook.html" class="btn btn-blue btn-article"><i class="icon iconfont icon-bianji"></i> 给我留言</a>
          </div>
        </div>
      </div>
      <transition name="bounce">
        <div class="menu_nav">
          <div class="new_header container clearnav">
            <div class="top-bar-left pull-left navs">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <div v-for="(menuItem, menuIndex) in menuList" :key="menuIndex">
                  <el-menu-item index="1" v-if="!menuItem.isSubmenu">
                    <i :class="['menu-icon', 'icon iconfont', menuItem.icon]"></i>
                    <span class="menu-name">{{ menuItem.menuName }}</span>
                    <i v-if="menuItem.hot" :class="['menu-icon', 'icon iconfont icon-new']"></i>
                  </el-menu-item>
                  <el-submenu index="2" v-else>
                    <template slot="title"><i class="icon iconfont icon-gengduo"></i></template>
                    <template v-if="menuItem.childrenList">
                      <el-menu-item v-for="(menuChildItem, menuChildIndex) in menuItem.childrenList" :key="menuChildIndex">{{ menuChildItem.menuName }}</el-menu-item>
                    </template>
                  </el-submenu>
                </div>
              </el-menu>
              <div class="line"></div>
            </div>
            <div class="top-bar-right pull-right text-right">
              <div class="top-admin">
                <div class="nav-item" v-for="(navItem, navIndex) in navList" :key="navIndex" @click="handleNavItemChange(navItem)">
                  <i :class="'el-icon-' + navItem.icon"></i>
                  <span class="nav-item-text">{{ navItem.navName }}</span>
                </div>
                <el-switch v-model="themeStatus" active-color="#3b5160" inactive-color="#3b5160"> </el-switch>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div id="percentageCounter" :style="{ width: scrollVal + '%' }"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavParams, NavListItem } from '../../const/home';

@Component
export default class Header extends Vue {
  private activeIndex: string = '1';
  private activeIndex2: string = '1';
  private keyWord: string = '';
  private scrollTop: string = '';
  private menuList: Array<NavParams> = [
    { key: 'home', menuName: '首页', icon: 'icon-shouye', path: '', isSubmenu: false, hot: false },
    { key: 'home', menuName: '范文', icon: '', path: '', isSubmenu: false, hot: false },
    { key: 'home', menuName: '简历', icon: '', path: '', isSubmenu: false, hot: true },
    { key: 'home', menuName: '诗词', icon: '', path: '', isSubmenu: false, hot: false },
    { key: 'home', menuName: '名言', icon: '', path: '', isSubmenu: false, hot: false },
    { key: 'home', menuName: '作文', icon: '', path: '', isSubmenu: false, hot: false },
    { key: 'home', menuName: '散文', icon: '', path: '', isSubmenu: false, hot: false },
    { key: 'home', menuName: '励志', icon: '', path: '', isSubmenu: false, hot: false },
    {
      key: 'home',
      menuName: '....',
      icon: '',
      path: '',
      hot: false,
      isSubmenu: true,
      childrenList: [
        { key: 'home', menuName: '首页', icon: '', path: '', isSubmenu: false },
        { key: 'home', menuName: '范文', icon: '', path: '', isSubmenu: false },
        { key: 'home', menuName: '诗词', icon: '', path: '', isSubmenu: false },
      ],
    },
  ];
  private themeStatus: boolean = true;
  private navList: Array<NavListItem> = [
    { key: 'home', navName: '排行榜', icon: 's-data', path: '' },
    { key: 'home', navName: '统计', icon: 'notebook-2', path: '' },
    { key: 'home', navName: '登录', icon: 'user', path: '/login' },
  ];
  mounted() {
    //获取当前位置距离顶部距离的百分比
    let totalH = document.body.scrollHeight || document.documentElement.scrollHeight;
    let clientH = window.innerHeight || document.documentElement.clientHeight;
    window.addEventListener('scroll', (e) => {
      let validH = totalH - clientH;
      let scrollH = document.body.scrollTop || document.documentElement.scrollTop;
      this.scrollTop = ((scrollH / validH) * 100).toFixed(2);
    });
  }

  get scrollVal() {
    return this.scrollTop;
  }

  private handleNavItemChange = (navItem: NavListItem) => {
    if (navItem.path === '/login') {
      this.$router.push(navItem.path);
    }
  };
  private handleSelect = (key: number, keyPath: string) => {
    console.log(key, keyPath);
  };
}
</script>
<style scoped lang="scss">
/deep/.el-menu {
  .icon-new {
    color: red;
    font-size: 28px;
  }
}
/deep/.el-switch {
  width: 36px;
  .el-switch__core::after {
    background-color: #54b5db;
  }
  &.is-checked {
    .el-switch__core::after {
      background-color: yellow;
    }
  }
}

/deep/.el-input {
  .el-input__inner {
    background-color: #f3f5f6;
    border: none;
  }
}

#percentageCounter {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 3px;
  z-index: 2;
  background-color: #448ef6;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
}
.clearnav {
  padding-left: 0px;
}

.top-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 69;
  box-shadow: 0px 5px 40px 0px rgba(17, 58, 93, 0.1) !important;
  background-color: #fff;
  .container-box {
    box-sizing: border-box;
    .header_nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .navlogo {
        .box {
          cursor: pointer;
        }
      }
      .search-box {
        display: flex;
        align-items: center;
        .search-warp {
          width: 480px;
          height: 36px;
          border-radius: 8px;
          padding-right: 56px;
          background-color: #f3f5f6;
          margin: 10px;
          position: relative;
          box-sizing: border-box;
          z-index: 1;
          .search-area {
            height: 36px;
            display: flex;
            font-size: 14px;
            color: #9199a1;
            border-radius: 5px 0 0 5px;
            position: relative;
            text-align: left;
          }
          i {
            position: absolute;
            right: 20px;
            top: 8px;
            font-size: 20px;
            color: #545c63;
          }
        }
        .search-btn {
          height: 38px;
          a {
            line-height: 20px;
            padding: 8px 15px;
            display: inline-block;
            color: #fff;
            font-size: 14px;
            border-radius: 8px;
            box-sizing: border-box;
            background: #54b5db;
          }
        }
      }
    }
    .menu_nav {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      .new_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .top-bar-menu {
          li {
            display: inline-block;
            padding: 0 15px;
            position: relative;
            .msg_remind {
              display: inline;
              width: 8px;
              height: 8px;
              background-color: #f01414;
              border-radius: 50%;
              position: absolute;
              top: 15px;
              left: 35px;
            }
            a {
              letter-spacing: 1px;
              text-transform: uppercase;
              font-size: 14px;
              line-height: 50px;
              color: #555;
            }
          }
        }
        ul {
          display: flex;
          li {
            .aui-nav-dow {
              opacity: 0;
              visibility: hidden;
              position: absolute;
              top: 50px;
              padding: 8px 10px;
              background: #fff;
              border-radius: 4px;
              z-index: 99;
              box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
            }
          }
        }
        .top-bar-right {
          .top-admin {
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #555;
            font-size: 14px;
            line-height: 50px;
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            .nav-item {
              cursor: pointer;
              .nav-item-text {
                color: #555;
                line-height: 20px;
                padding-right: 15px;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>