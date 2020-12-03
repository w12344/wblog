<!--
 * @Author: your name
 * @Date: 2020-11-25 17:03:43
 * @LastEditTime: 2020-11-25 17:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\pages\Home\components\mostThumbs\Index.vue
-->
<template>
  <div class="article-box">
    <section class="widget">
      <h4 class="widget-title"><i class="icon iconfont icon-paihangbang"></i> <span>最多点赞</span></h4>
      <div class="list-rounded my-n2">
        <div class="py-2">
          <div class="ricon_rank rank1">1</div>
          <div class="list-item list-overlay-content">
            <div class="media media-2x1">
              <a class="media-content" href="https://qicao.cn/lizhi/9.html" style="background-image: url(https://qicao.cn/images/4.jpg)"><span class="overlay"></span></a>
            </div>
            <div class="list-content">
              <div class="list-body"><a href="https://qicao.cn/lizhi/9.html" class="list-title h-2x">斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a></div>
              <div class="list-footer">
                <div class="text-muted text-xs">280 阅读 ，<time class="d-inline-block">10-02</time></div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-2">
          <div class="ricon_rank rank1">1</div>
          <div class="list-item list-overlay-content">
            <div class="media media-2x1">
              <a class="media-content" href="https://qicao.cn/lizhi/9.html" style="background-image: url(https://qicao.cn/images/4.jpg)"><span class="overlay"></span></a>
            </div>
            <div class="list-content">
              <div class="list-body"><a href="https://qicao.cn/lizhi/9.html" class="list-title h-2x">斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a></div>
              <div class="list-footer">
                <div class="text-muted text-xs">280 阅读 ，<time class="d-inline-block">10-02</time></div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-2">
          <div class="ricon_rank rank1">1</div>
          <div class="list-item list-overlay-content">
            <div class="media media-2x1">
              <a class="media-content" href="https://qicao.cn/lizhi/9.html" style="background-image: url(https://qicao.cn/images/4.jpg)"><span class="overlay"></span></a>
            </div>
            <div class="list-content">
              <div class="list-body"><a href="https://qicao.cn/lizhi/9.html" class="list-title h-2x">斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a></div>
              <div class="list-footer">
                <div class="text-muted text-xs">280 阅读 ，<time class="d-inline-block">10-02</time></div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-2">
          <div class="ricon_rank rank1">1</div>
          <div class="list-item list-overlay-content">
            <div class="media media-2x1">
              <a class="media-content" href="https://qicao.cn/lizhi/9.html" style="background-image: url(https://qicao.cn/images/4.jpg)"><span class="overlay"></span></a>
            </div>
            <div class="list-content">
              <div class="list-body"><a href="https://qicao.cn/lizhi/9.html" class="list-title h-2x">斗罗大陆107集:一朵菊花,一个小鬼,也敢伤害我儿子</a></div>
              <div class="list-footer">
                <div class="text-muted text-xs">280 阅读 ，<time class="d-inline-block">10-02</time></div>
              </div>
            </div>
          </div>
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
export default class mostThumbs extends Vue {}
</script>
<style scoped lang="scss">
.article-box {
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
    .my-n2 {
      width: 234px;
      margin-bottom: -5px !important;
      .py-2 {
        padding: 5px 0 !important;
        position: relative;
        .ricon_rank {
          display: inline-block;
          position: absolute;
          top: 2px;
          left: -18px;
          width: 35px;
          height: 22px;
          line-height: 19px;
          z-index: 50;
          margin: 9px 10px 0 0;
          font-size: 12px;
          font-weight: 700;
          text-indent: 18px;
          text-align: center;
        }
        .rank1 {
          color: #fff;
          background: url('../../../../assets/images/home/list_icon1.png') 0 0 no-repeat;
        }
        .list-item {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
        }
        .list-overlay-content {
          border-radius: 3px;
          overflow: hidden;
          color: #fff;
          .media {
            border-radius: 3px !important;
            position: relative;
            display: block;
            overflow: hidden;
            &-content {
              display: inline-block;
              width: 100%;
              height: 117px;
              border-radius: inherit;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-color: rgba(120, 120, 120, 0.1);
              .overlay {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.66);
                position: absolute;
                opacity: 0.22;
                top: 0;
                left: 0;
                transition: opacity 0.3s ease-in-out;
              }
            }
          }
          .list-content {
            text-align: left;
            position: absolute;
            z-index: 1;
            left: 0;
            bottom: 0;
            padding: 7.5px;
            background: #222831;
            background: linear-gradient(to bottom, rgba(6, 6, 8, 0), rgba(6, 6, 8, 0.7));
            .list-body {
              .list-title {
                font-size: 12px;
                line-height: 1.4285714286;
                display: block;
                color: inherit;
              }
            }
            .list-footer {
              margin-top: 2.5px;
              .text-xs {
                color: rgba(255, 255, 255, 0.5) !important;
                font-size: 10px !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>