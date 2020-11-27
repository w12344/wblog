<!--
 * @Author: your name
 * @Date: 2020-11-24 18:51:04
 * @LastEditTime: 2020-11-26 15:33:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Footer\Index.vue
-->
<template>
  <footer class="site-footer">
    <el-backtop>
      <a href="#" id="scroll-to-top" class=""><i class="el-icon-arrow-up"></i></a>
    </el-backtop>
    <div class="site-info clearfix">
      <div class="container">
        <div class="footer-left">
          <div class="footer-l-top">
            <a target="_blank" href="https://qicao.cn/about.html">关于我们</a> <a target="_blank" href="https://qicao.cn/guestbook.html">给我留言</a>
            <a target="_blank" href="https://qicao.cn/links.html">友情链接</a> <a target="_blank" href="https://qicao.cn/pm.html">联系我们</a>
          </div>
          <div class="footer-l-btm">
            <p>各种日常写作指导，同时提供范文参考。 页面执行：42 ms</p>
            <p>Copyright © 2020 <a href="https://qicao.cn">七草博客(Qicao.cn)</a> All Rights Reserved.<br /></p>
          </div>
          <!-- <script type="text/javascript">
            document.write(
              unescape("%3Cspan id='cnzz_stat_icon_1427792'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/stat.php%3Fid%3D1427792%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E")
            );
          </script> -->
          <span id="cnzz_stat_icon_1427792"
            ><a href="https://www.cnzz.com/stat/website.php?web_id=1427792" target="_blank">站长统计</a
            ><a href="https://www.cnzz.com/stat/website.php?web_id=1427792" target="_blank"> | 今日IP[27] | 今日PV[74] | 昨日IP[15] | 昨日PV[109] | </a
            ><a href="https://www.cnzz.com/stat/website.php?web_id=1427792&amp;method=online" target="_blank">当前在线[5]</a></span
          >
          <!-- <script src="https://v1.cnzz.com/stat.php?id=1427792&amp;online=1&amp;show=line" type="text/javascript"></script> -->
          <!-- <script src="https://c.cnzz.com/core.php?web_id=1427792&amp;show=line&amp;online=1&amp;t=z" charset="utf-8" type="text/javascript"></script> -->
        </div>
        <div class="footer-right">
          <div><img src="https://qicao.cn/images/qicao.png" /></div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script >
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuList: [
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
          menuName: '...',
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
      ],
      themeStatus: true,
      navList: [
        { key: 'home', navName: '排行榜', icon: 's-data', path: '' },
        { key: 'home', navName: '统计', icon: 'notebook-2', path: '' },
        { key: 'home', navName: '登录', icon: 'user', path: '' },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss">
.el-backtop {
  height: 0;
}
.site-footer {
  margin-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 39;
  background-color: #fff;
  .container {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 15px;
    .footer-left {
      text-align: left;
      max-width: 857px;
      a {
        color: #555;
        line-height: 20px;
      }
      .footer-l-top {
        padding: 24px 0;
        margin-bottom: 15px;
        border-bottom: 1px solid #eee;
        a {
          display: inline-block;
          color: #333;
          margin-right: 20px;
          font-size: 14px;
          padding: 0;
          line-height: 30px;
        }
      }
      .footer-l-btm {
        margin-bottom: 10px;
        line-height: 1.2;
        list-style: none;

        p {
          line-height: 20px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .footer-right {
      max-width: 314px;
      width: 120px;
      padding-top: 22px;
      img {
        max-width: 100%;
        height: auto;
        transition: opacity 0.3s;
        vertical-align: middle;
      }
    }
  }
}

#scroll-to-top {
  border-radius: 3px;
  position: fixed;
  bottom: 150px;
  right: 2%;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 37px;
  color: rgba(0, 0, 0, 0.4);
  display: block;
  z-index: 50;
  color: #fff;
  background-color: #54b5db;
  border-color: #54b5db;
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
