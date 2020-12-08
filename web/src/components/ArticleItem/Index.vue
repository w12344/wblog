<!--
 * @Author: your name
 * @Date: 2020-11-24 17:46:44
 * @LastEditTime: 2020-12-08 17:33:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Article\Index.vue
-->
<template>
  <div class="site-container row">
    <article class="post-list contt blockimg" id="post_10">
      <div class="entry-container">
        <div class="block-image feaimg">
          <a
            id="post_a_10"
            class="block-fea scrollLoading"
            data-url="https://qicao.cn/images/5.jpg"
            href="https://qicao.cn/mingyan/10.html"
            title="本博发帖已启用先审后发机制,请勿灌水,谢谢合作"
            style="background-image: url(../../assets/home/arcites.jpg)"
          >
            <!-- <span class="vodlist_top"><em class="voddate voddate_year">名言</em></span> -->
          </a>
          <div class="entyr-icon"><i class="icon iconfont icon-tupian"></i></div>
        </div>
        <header class="entry-header">
          <span class="entry-title"
            ><a href="https://qicao.cn/mingyan/10.html"><span class="badge arc_v6">置顶</span>{{ articleItem.title }}</a></span
          >
        </header>
        <div class="entry-summary ss">
          <p>{{ articleItem.content }}</p>
        </div>
        <div class="entry-meta">
          <a href="https://qicao.cn/author/1"
            ><img
              src="https://cdn.v2ex.com/gravatar/0261a00f2487afdf3009e297667cde0d?s=96&amp;d=mp&amp;r=g"
              srcset="https://cdn.v2ex.com/gravatar/0261a00f2487afdf3009e297667cde0d?s=96&amp;d=mp&amp;r=g"
              class="avatar avatar-140 photo"
              height="25"
              width="25"
            />{{ articleItem.user_name }}</a
          ><span class="separator">/</span><a href="https://qicao.cn/category/mingyan/">{{ articleItem.classify }}</a
          ><span class="separator">/</span><time datetime="2020-10-02">{{ timerLeave }}</time> <span class="separator">/</span> 281 阅读
        </div>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ArticleItemData } from '../../const/home';
import { getDateDiff } from '../../utils/utils';

@Component
export default class ArticleItem extends Vue {
  @Prop({}) articleItem!: ArticleItemData; //文章详情

  get timerLeave() {
    return getDateDiff(this.articleItem.gmtCreate);
  }
}
</script>
<style scoped lang="scss">
.site-container {
  .post-list {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    .entry-container {
      display: block;
      position: relative;
      min-height: 118px;
      padding: 20px 0px 25px 230px;
      .laid_title_l {
        position: absolute;
        background: #448ef6;
        top: 2rem;
        left: -20px;
        width: 5px;
        height: 25px;
        display: none;
      }
      .block-image {
        width: 210px;
        height: 140px;
        position: absolute !important;
        padding-top: 0;
        margin-right: 20px;
        left: 0;
        .block-fea {
          position: absolute;
          border-radius: 5px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-color: rgba(120, 120, 120, 0.1);
        }
      }
      .feaimg {
        position: relative;
        display: block;
        overflow: hidden;
        padding: 0;
        align-items: flex-start;
        border-radius: 5px;
      }
      .entry-header {
        position: relative;
        background-position: right top;
        background-repeat: no-repeat;
        background-size: auto 40%;
        text-align: left;
        .entry-title {
          margin: 0;
          font-size: 18px;
          line-height: 26px;
          text-overflow: ellipsis;
          overflow: hidden;
          .badge {
            border-radius: 2px;
            font-weight: 400;
            padding: 2px 3.5px;
            font-size: 12px;
            margin: 0 4px 0 0;
            position: relative;
            top: -1px;
          }
          .arc_v6 {
            color: #fff;
            background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);
          }
          a {
            color: #333;
          }
        }
      }
      .entry-summary {
        text-align: left;
        text-indent: 25px;
        p {
          max-height: 65px;
          overflow: hidden;
          font-size: 13px;
          color: #999;
          line-height: 23px;
          margin: 7px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      .entry-meta {
        text-align: left;
        margin-bottom: 0px !important;
        font-size: 11px;
        margin-top:14px;
        color: #939393;
        letter-spacing: 2px;
        line-height: 1;
        a {
          color: #939393;
        }
        .avatar {
          margin-right: 5px;
          margin-top: -5px;
        }
        .separator {
          color: #e1e1e1;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>