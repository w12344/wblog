<!--
 * @Author: your name
 * @Date: 2020-11-25 17:10:18
 * @LastEditTime: 2020-11-25 17:47:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\pages\Home\components\tagList\Index.vue
-->
<template>
  <div class="tag-box">
    <section class="widget widget-hunter-topics">
      <h4 class="widget-title"><i class="icon iconfont icon-paihangbang"></i> <span>标签TAG</span></h4>
      <div class="items">
        <div class="item active-item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E4%BD%9C%E6%96%87/" rel="tag"
              ><h2><i class="clr_orange">#</i> 作文</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E7%94%B3%E8%AF%B7%E4%B9%A6/" rel="tag"
              ><h2><i class="clr_orange">#</i> 申请书</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E5%B0%8F%E5%AD%A6%E7%94%9F/" rel="tag"
              ><h2><i class="clr_orange">#</i> 小学生</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E6%9C%8B%E5%8F%8B%E5%9C%88/" rel="tag"
              ><h2><i class="clr_orange">#</i> 朋友圈</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E5%91%98%E5%B7%A5/" rel="tag"
              ><h2><i class="clr_orange">#</i> 员工</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E7%94%9F%E6%B4%BB/" rel="tag"
              ><h2><i class="clr_orange">#</i> 生活</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E8%BD%AC%E6%AD%A3/" rel="tag"
              ><h2><i class="clr_orange">#</i> 转正</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E5%BF%83%E9%87%8C/" rel="tag"
              ><h2><i class="clr_orange">#</i> 心里</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E8%BF%9C%E6%96%B9/" rel="tag"
              ><h2><i class="clr_orange">#</i> 远方</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E8%82%96%E7%94%B3%E5%85%8B/" rel="tag"
              ><h2><i class="clr_orange">#</i> 肖申克</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E6%95%91%E8%B5%8E/" rel="tag"
              ><h2><i class="clr_orange">#</i> 救赎</h2></a
            >
          </div>
        </div>
        <div class="item">
          <div class="wall-item">
            <a href="https://qicao.cn/tag/%E5%AD%94%E5%AD%90/" rel="tag"
              ><h2><i class="clr_orange">#</i> 孔子</h2></a
            >
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
export default class tagList extends Vue {}
</script>
<style scoped lang="scss">
.tag-box {
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
    .items {
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      .active-item {
        .wall-item {
          a {
            background: rgb(84, 181, 219);
            h2{
                color:white!important;
            }
          }
        }
      }
      .item {
        width: 29%;
        padding: 0 5px;
        border-bottom: 0px dashed #eee;
        position: relative;
        padding-bottom: 4px;
        margin-bottom: 10px;
        .wall-item {
          background: #fafafa;
          a {
            color: #fff;
            display: block;
            border-radius: 3px;
            padding: 6px;
            width: 37px;
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
  }
}
</style>