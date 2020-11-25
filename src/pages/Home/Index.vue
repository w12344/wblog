<!--
 * @Author: your name
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-11-25 18:41:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="sit-box page-component__scroll">
    <div class="site-main spimes-container">
      <PageHeader></PageHeader>
      <div class="container container-box">
        <div class="container-box-left">
          <PageBanner></PageBanner>
          <NewArticle></NewArticle>
        </div>
        <div class="container-box-right">
          <div class="widget-area">
            <div class="theiaStickySidebar">
              <HotArticle></HotArticle>
              <MostThumbs></MostThumbs>
              <TagList></TagList>
              <HotCommentPage></HotCommentPage>
              <RecentComment></RecentComment>
            </div>
          </div>
        </div>
      </div>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PageHeader from '../../components/Header/Index.vue';
import NewArticle from './components/newArticle/index.vue';
import PageBanner from '../../components/Banner/Index.vue';
import PageFooter from '../../components/Footer/Index.vue';
import HotArticle from './components/hotArticle/Index.vue';
import MostThumbs from './components/mostThumbs/Index.vue';
import TagList from './components/tagList/Index.vue';
import HotCommentPage from './components/hotCommentPage/Index.vue';
import RecentComment from './components/recentComment/Index.vue';

@Component({
  components: {
    PageHeader,
    PageBanner,
    PageFooter,
    NewArticle,
    HotArticle,
    MostThumbs,
    HotCommentPage,
    TagList,
    RecentComment
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.el-backtop {
  height: 0;
}
.container {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 147px;
  .container-box-left {
    width: 75%;
    background-color: white;
    padding: 20px 20px 15px 20px;
  }
  .container-box-right {
    position: relative;
    overflow: visible;
    box-sizing: border-box;
    min-height: 1px;
    width: 25%;
    padding: 0 15px;
    .theiaStickySidebar {
      padding-top: 0px;
      padding-bottom: 1px;
      position: static;
      transform: none;
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