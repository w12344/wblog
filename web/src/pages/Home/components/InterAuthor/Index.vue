<!--
 * @Author: your name
 * @Date: 2020-11-27 15:18:12
 * @LastEditTime: 2020-11-27 15:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\pages\Home\components\InterAuthor\Index.vue
-->
<template>
  <div class="authors-box">
    <section class="widget hunter-widget-hunter-authors">
      <h4 class="widget-title"><i class="icon iconfont icon-paihangbang"></i> <span>标签TAG</span></h4>
      <div class="hunter-cont">
        <ul class="hunter-authors">
          <li>
            <div class="item">
              <div class="hunter-avatar">
                <a href="https://qicao.cn/author/1"
                  ><div class="vatar">
                    <img src="https://cdn.v2ex.com/gravatar/0261a00f2487afdf3009e297667cde0d?s=96&amp;d=mp&amp;r=g" /><img
                      class="va_v_honor"
                      src="https://qicao.cn/images/vip.svg"
                      title="认证用户"
                    /></div
                ></a>
              </div>
              <div class="item-main">
                <div>
                  admin
                  <h4>3127 °c 访问 <i>| 文章 23 篇</i></h4>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="hunter-avatar">
                <a href="https://qicao.cn/author/2"
                  ><div class="vatar">
                    <img src="https://cdn.v2ex.com/gravatar/17dc77c99294ca7b88675ed9fc32ecfa?s=96&amp;d=mp&amp;r=g" /><img
                      class="va_v_honor"
                      src="https://qicao.cn/images/vip.svg"
                      title="认证用户"
                    /></div
                ></a>
              </div>
              <div class="item-main">
                <div>
                  七草
                  <h4>309 °c 访问 <i>| 文章 5 篇</i></h4>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
export default class InterAuthor extends Vue {}
</script>
<style scoped lang="scss">
.authors-box {
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
    .hunter-cont {
      ul {
        line-height: 2.5;
        .item {
          border-bottom: 1px dashed #eee;
          position: relative;
          padding-bottom: 4px;
          display: flex;
          .hunter-avatar {
            line-height: 55px;
            a {
              color: #333;
              .vatar {
                position: relative;
                img {
                  width: 45px;
                  border-radius: 100%;
                }
                .va_v_honor {
                  position: absolute;
                  bottom: 3px;
                  right: 0px;
                  width: 18px;
                  height: 18px;
                }
              }
            }
          }
          .item-main {
            text-align: left;
            min-height: 60px;
            margin-left: 15px;
            color: #393939;
            h4 {
              font-size: 12px;
              line-height: 1;
              margin-bottom: 7px;
              font-weight: normal;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>