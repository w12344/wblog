<!--
 * @Author: your name
 * @Date: 2020-11-25 17:51:23
 * @LastEditTime: 2020-11-25 18:10:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\pages\Home\components\hotCommentPage\Index.vue
-->
<template>
  <div class="comment-box">
    <section class="widget widget-hunter-topics">
      <h4 class="widget-title"><i class="icon iconfont icon-paihangbang"></i> <span>热评文章</span></h4>
      <ul class="posts-widget">
        <li>
          <div class="widget-posts-text">
            <a class="widget-posts-title" href="https://qicao.cn/lizhi/9.html" title="斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子"
              ><i class="el-icon-arrow-right" style="font-size: 12px; color: rgb(51, 51, 51)"></i>斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a
            >
            <div class="widget-posts-meta"><i>2 评论</i></div>
          </div>
        </li>
        <li>
          <div class="widget-posts-text">
            <a class="widget-posts-title" href="https://qicao.cn/lizhi/9.html" title="斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子"
              ><i class="el-icon-arrow-right" style="font-size: 12px; color: rgb(51, 51, 51)"></i>斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a
            >
            <div class="widget-posts-meta"><i>2 评论</i></div>
          </div>
        </li>
        <li>
          <div class="widget-posts-text">
            <a class="widget-posts-title" href="https://qicao.cn/lizhi/9.html" title="斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子"
              ><i class="el-icon-arrow-right" style="font-size: 12px; color: rgb(51, 51, 51)"></i>斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a
            >
            <div class="widget-posts-meta"><i>2 评论</i></div>
          </div>
        </li>
        <li>
          <div class="widget-posts-text">
            <a class="widget-posts-title" href="https://qicao.cn/lizhi/9.html" title="斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子"
              ><i class="el-icon-arrow-right" style="font-size: 12px; color: rgb(51, 51, 51)"></i>斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a
            >
            <div class="widget-posts-meta"><i>2 评论</i></div>
          </div>
        </li>
        <li>
          <div class="widget-posts-text">
            <a class="widget-posts-title" href="https://qicao.cn/lizhi/9.html" title="斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子"
              ><i class="el-icon-arrow-right" style="font-size: 12px; color: rgb(51, 51, 51)"></i>斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a
            >
            <div class="widget-posts-meta"><i>2 评论</i></div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts" scoped>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {},
})
export default class hotCommentPage extends Vue {}
</script>
<style scoped lang="scss">
.comment-box {
  .widget {
    font-size: 14px;
    line-height: 2;
    margin-bottom: 15px;
    background: #ffffff;
    border-radius: 8px;
    padding: 14px;
    box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
    &-title {
      text-align: left;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0px 0 12px;
      position: relative;
      span {
        display: inline-block;
        padding: 0 10px 0 0;
        background: #ffffff;
        position: relative;
        z-index: 2;
        font-weight: normal;
        color: #333;
      }
      &::before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        border-top: 1px solid #54b5db;
        width: 20px;
        left: 50%;
        right: 0;
        z-index: 1;
      }
    }
    .posts-widget {
      line-height: 2.5;
      li {
        margin: 10px 0;
        overflow: hidden;
        line-height: 24px;
        .widget-posts-title {
          max-width: 75%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          float: left;
          line-height: inherit;
          color: #333;
        }
        .widget-posts-meta {
          i {
            font-size: 13px;
            color: #969696;
            font-style: normal;
            float: right;
          }
        }
      }
    }
  }
}
</style>