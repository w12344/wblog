<!--
 * @Author: your name
 * @Date: 2020-11-25 17:51:23
 * @LastEditTime: 2020-11-25 18:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\pages\Home\components\hotCommentPage\Index.vue
-->
<template>
  <div class="comment-box">
    <section class="widget widget-hunter-topics">
      <h4 class="widget-title"><i class="icon iconfont icon-paihangbang"></i><span>最近评论</span></h4>
      <div class="comments">
        <div class="item">
          <div class="meta">
            <div class="meta-item">
              <span class="comment-avatar"><i class="thumb" style="background-image: url(https://cdn.v2ex.com/gravatar/fbbe2b6395880e77512d09227e69e2ec?s=96&amp;d=mp&amp;r=g)"></i></span> zizdog<span
                class="autlv aut-1"
                >Lv.1</span
              >
            </div>
            <span class="views">6天前</span>
          </div>
          <div class="comment-content">
            <p><a href="https://qicao.cn/guestbook.html#comment-11"></a></p>
            <p><a href="https://qicao.cn/guestbook.html#comment-11">弄的真不错。</a></p>
            <p></p>
          </div>
          <h2><i class="icon iconfont icon-taolunqu"></i><a href="https://qicao.cn/guestbook.html#comment-11"> 给我留言 </a></h2>
        </div>
      </div>
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
    .comments {
      .item {
        border-bottom: 1px dashed #eee;
        position: relative;
        padding-bottom: 4px;
        margin-bottom: 10px;
        .meta {
          display: flex;
          justify-content: space-between;
          color: #262626;
          font-size: 14px;
          line-height: 30px;
          margin-bottom: 5px;
          height: 30px;
          overflow: hidden;
          .comment-avatar {
            display: inline-block;
            width: 25px;
            vertical-align: middle;
            margin-right: 5px;
            .thumb {
              padding-top: 100%;
              border-radius: 100%;
              display: block;
              width: 100%;
              height: 0;
              padding-top: 66.7%;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              background-color: transparent;
              position: relative;
              overflow: hidden;
              transition: all 0.2s;
            }
          }
        }
        .comment-content {
          padding: 5px 10px;
          background: #f7f7f7;
          border-radius: 6px;
          font-size: 12px;
          color: #262626;
          margin-bottom: 5px;
          position: relative;
          transition: all 0.2s;
        }
        h2 {
          font-size: 12px;
          line-height: 23px;
          height: 23px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #333;
          font-weight: normal;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>