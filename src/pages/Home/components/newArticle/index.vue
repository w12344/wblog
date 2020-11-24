<!--
 * @Author: wuzhiqiang
 * @Date: 2020-11-19 14:56:29
 * @LastEditTime: 2020-11-24 18:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Header\Index.vue
-->
<template>
  <div class="article-box">
    <header class="site-header">
      <nav class="main-navigation">
        <ul class="menu-nav-inline">
          <li class="menu-item active"><a data-post="" href="https://qicao.cn/">最新文章 </a></li>
        </ul>
        <div class="primary-menu">
          <a href="https://qicao.cn/jianli/11.html"><i class="icon iconfont icon-shengyin"></i> 欢迎光临七草博客,请遵守本博规定</a>
        </div>
      </nav>
    </header>
    <ArticleItem></ArticleItem>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ArticleItem from "../../../../components/ArticleItem/Index.vue"

@Component({
  components: {
    ArticleItem
  },
})
export default class newArticle extends Vue {}
</script>
<style scoped lang="scss">
.article-box {
  .site-header {
    border-bottom: 1px solid rgba(99, 99, 99, 0.1);
    .main-navigation {
      line-height: 40px;
      margin: 10px 0px 0px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      .menu-nav-inline {
        position: relative;
        li {
          line-height: 40px;
          padding: 0 20px 0 0;
          white-space: nowrap;
          a {
            position: relative;
            display: block;
            color: #333;
          }
          a::after {
            position: absolute;
            left: 0;
            top: 99%;
            width: 100%;
            height: 2px;
            background: #3ca5f6;
            border-radius: 2px;
            content: '';
          }
        }
      }
      .primary-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        border-radius: 5px;
        a {
          font-size: 12px !important;
          margin: 0 15px;
        }
        ._container {
          height: 40px;
          text-align: center;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>