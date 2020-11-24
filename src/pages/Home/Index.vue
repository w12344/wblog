<!--
 * @Author: your name
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-11-24 17:36:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="sit-box">
    <div class="site-main spimes-container">
      <PageHeader></PageHeader>
      <div class="container">
        <div class="container-box-left">
          <PageBanner></PageBanner>
          <NewArticle></NewArticle>
        </div>
        <div class="container-box-right"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PageHeader from '../../components/Header/Index.vue';
import NewArticle from './components/newArticle/index.vue'
import PageBanner from '../../components/Banner/Index.vue';

@Component({
  components: {
    PageHeader,
    PageBanner,
    NewArticle
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;;
  .container-box-left{
    width:75%;
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