<!--
 * @Author: WZQ
 * @Date: 2020-11-19 14:56:29
 * @LastEditTime: 2020-12-04 18:04:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Header\Index.vue
-->
<template>
  <div>
    <section class="widget abautor">
      <h4 class="widget-title"><i class="icon iconfont icon-icon-test24"></i> <span>作者信息</span></h4>
      <div class="widget-list">
        <div class="av_v">
          <a class="av_v_img" href="https://qicao.cn/author/2"
            ><img
              class="widget-about-image"
              src="https://cdn.v2ex.com/gravatar/17dc77c99294ca7b88675ed9fc32ecfa?s=96&amp;d=mp&amp;r=g"
              srcset="https://cdn.v2ex.com/gravatar/17dc77c99294ca7b88675ed9fc32ecfa?s=96&amp;d=mp&amp;r=g"
              height="70"
              width="70"
            />
          </a>
          <div class="av_v_honor"><img src="https://qicao.cn/images/vip.svg" title="注册用户" /></div>
        </div>
        <div class="widget-about-intro">
          <div class="name">吴志强<span class="autlv aut-1">Lv.1</span></div>
          <div class="widget-about-desc">文章 5 篇 <i>|</i> 747 °c 访问</div>
          <div class="widget-article-newest"><span>最新文章</span></div>
          <ul class="posts-widget">
            <li>
              <div class="widget-posts-text">
                <a class="widget-posts-title" href="https://qicao.cn/lizhi/34.html" title="感谢那些曾来过你朋友圈的人"><i class="icon iconfont icon-icon-test29"></i> 感谢那些曾来过你朋友圈的人</a>
                <div class="widget-posts-meta"><i>0 评论</i></div>
              </div>
            </li>
            <li>
              <div class="widget-posts-text">
                <a class="widget-posts-title" href="https://qicao.cn/fanwen/31.html" title="简历基本信息包括什么？"><i class="icon iconfont icon-icon-test29"></i> 简历基本信息包括什么？</a>
                <div class="widget-posts-meta"><i>0 评论</i></div>
              </div>
            </li>
            <li>
              <div class="widget-posts-text">
                <a class="widget-posts-title" href="https://qicao.cn/sanwen/30.html" title="青春的旋律"><i class="icon iconfont icon-icon-test29"></i> 青春的旋律</a>
                <div class="widget-posts-meta"><i>0 评论</i></div>
              </div>
            </li>
            <li>
              <div class="widget-posts-text">
                <a class="widget-posts-title" href="https://qicao.cn/sanwen/29.html" title="成长的道路，选择梦的翅膀"><i class="icon iconfont icon-icon-test29"></i> 成长的道路，选择梦的翅膀</a>
                <div class="widget-posts-meta"><i>0 评论</i></div>
              </div>
            </li>
            <li>
              <div class="widget-posts-text">
                <a class="widget-posts-title" href="https://qicao.cn/fanwen/28.html" title="待人接物的基本礼仪"><i class="icon iconfont icon-icon-test29"></i> 待人接物的基本礼仪</a>
                <div class="widget-posts-meta"><i>0 评论</i></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Comments extends Vue {}
</script>
<style scoped lang="scss">
.widget {
  &-title {
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
      color: #333;
    }
    i {
      font-size: 19px;
      color: #000;
    }
    &::before {
      display: block;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      right: 0;
      z-index: 1;
      border-top: 1px solid #54b5db;
      width: 20px;
    }
  }
  &-list {
    .av_v {
      position: relative;
      width: 70px;
      height: 70px;
      margin: auto;
      &_img {
        display: block;
        width: 70px;
        height: 70px;
        margin-right: 12px;
        margin: auto;
        .widget-about-image {
          margin: 0 auto;
          display: block;
          width: 70px;
          height: 70px;
          border-radius: 99px;
        }
      }
      &_honor {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 24px;
        height: 24px;
        img {
          max-width: 100%;
          height: auto;
          transition: opacity 0.3s;
        }
      }
    }
    .widget-about-intro {
      text-align: center;
      margin: 15px 0 10px;
      .name {
        font-weight: 600;
      }
      .widget-about-desc {
        font-size: 12px;
        line-height: 1;
        margin: 7px 0;
        font-weight: normal;
      }
      .widget-article-newest {
        text-transform: uppercase;
        margin: 12px 0;
        position: relative;
        &::before {
          display: block;
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 1;
        }
        span {
          padding: 0 10px 0 10px;
          background: #ffffff;
          position: relative;
          z-index: 2;
          color: rgb(68, 142, 246);
        }
      }
      .posts-widget {
        list-style: none;
        padding: 0;
        line-height: 2.5;
        li {
          margin: 10px 0;
          overflow: hidden;
          line-height: 24px;
          font-size: 12px;
          .widget-posts-meta {
            font-size: 12px;
            color: #969696;
            font-style: normal;
            float: right;
          }
          .widget-posts-title {
            max-width: 75%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float: left;
            line-height: inherit;
            color: #333;
          }
        }
      }
    }
  }
}
</style>