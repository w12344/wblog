<!--
 * @Author: WZQ
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-12-04 17:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="site-main page-component__scroll">
    <PageHeader></PageHeader>
    <div class="container">
      <el-row class="details-container">
        <el-col :span="18">
          <div class="grid-content col-md-9 contpost">
            <div class="col-md-9" id="content">
              <article class="post">
                <header class="entry-header page-header">
                  <div class="">
                    <span class="badge badge-hot"><a href="https://qicao.cn/category/sanwen/">散文</a></span>
                  </div>
                  <h1 class="entry-title page-title">成长的道路，选择梦的翅膀</h1>
                  <div class="contimg">
                    <a href="https://qicao.cn/author/2"
                      ><img
                        src="https://cdn.v2ex.com/gravatar/17dc77c99294ca7b88675ed9fc32ecfa?s=96&amp;d=mp&amp;r=g"
                        srcset="https://cdn.v2ex.com/gravatar/17dc77c99294ca7b88675ed9fc32ecfa?s=96&amp;d=mp&amp;r=g"
                        class="avatar"
                        height="35"
                        width="35"
                    /></a>
                  </div>
                  <div class="entry-meta contpost-meta">
                    <div class="site-content">
                      <a href="https://qicao.cn/author/2"> 七草 <span class="autlv aut-1">Lv.1</span> </a><span class="separator">/</span> <time datetime="2020-10-22T23:12:00+08:00">10-22</time> <span class="separator">/</span>
                      <a href="https://qicao.cn/sanwen/29.html#comments">0 评论</a> <span class="separator">/</span> 240 阅读
                    </div>
                    <div class="site-lins">
                      <span><a href="https://qicao.cn/" title="七草博客">首页</a> <span class="sep">›</span> <a href="https://qicao.cn/category/sanwen/">散文</a> <span class="sep">›</span></span>
                    </div>
                  </div>
                  <div class="postArticle-meta">
                    <time><span class="month">10</span> <span class="day">22</span></time>
                  </div>
                  <div class="border-theme"></div>
                </header>
                <div>
                  <div class="entry-content clearfix">
                    <p>
                      　　风的刮过带走了时间，雨的滑落洗走了时间。在这一瞬一变之间，万物自然而然的经历了一天。随着日历的一页页翻过，随着四季有一次历完，我们仿佛得到了些什么，同时，又失去了什么……<br />　　我们奔跑在田野中，相互追逐，相互打闹，偶尔被藤蔓绊倒有时会哭，有时会笑。童年的我们，梦想无限，幻想无限，整日沉浸在公主与王子的美梦中。现在回想，虽觉幼稚，但那时的我们没有过多的担忧，想怎么样就怎么样，毫不压抑，毫不保留。那时的我们是纯真的。与生俱来的孩子的纯真。<br />　　上学后，进入城市，就像打开一扇藏满珠宝的门，我们贪婪地纵身其中，拼命地汲取未知世界的养料。我们投入其中，忘乎所以，浑然不知在这一吸一放之间，我们了解了太多以前未知的世界，那时我们眼中，只有这些美味的食物，虽拼命的吃，却丝毫不会忘记消化。那时的我们是奋进的。之所以如此，虽不明具体原因，但心中已有头绪。<br />　　大学里，我们爬上了人生的半山腰，虽仍有些艰难，但此时较之前段路好走很多。在前进途中，我们不忘看看路旁的风景及山下的美色。一路行来，人生路上的事情已看了许多，却预感心中那份强烈的渴望。从小到大，为何如此行来?从难到易，为何坚持不懈?博览群书，到底如何实用?心中渴望，为何一直不解?一切的一切，就就像基因的成长，时间越长，物质越繁;时间愈久，明白的越多。<br />　　毕业后的我，又一次站在了人生的分岔口。在千军万马过独木桥时代的我，只是一个平凡的人，遥想当年轻狂的话语：“立志成为一个对祖国，对社会有贡献的人。”我很迷茫，今后的我该何去何从?有到哪去实现我的报复呢?<br />　　……<br />　　现在，我翻开一张张年轻时的照片，有微笑，有哭泣，有成功，有失意，上面记录了我这一生的经历。我的思绪随着合上相册的那一刻开始回归。望着镜子中满墙的荣誉，我很开心。这些荣誉见证了我的付出，我的努力。虽然皱纹已爬上眼角，虽然头发已渐渐斑白，但我没有悲伤，没有惋惜。我用我全部的精力献给了我的事业。在经历了这么多年的凤凤雨雨后，我才懂得了，是什么支持着我一路走来，是什么让我在最无助的时候向命运发起挑战。这是信念，是梦想。我对梦想始终坚持不懈，不论何时，不论何地，哪怕我穷困潦倒，哪怕我遍体鳞伤，我都坚信着自己的梦想。我给梦想插上了顽强的翅膀，这才成就了我不一样的人生，虽然平淡，但我无愧于人生，无愧于宝贵的青春，这就足够了。<br />　　我不奢求做一个伟人，只要尽我全力，我甘愿做一滴露水，尽自己的天职——滋养大地!
                    </p>
                    <div class="dianzan text-center">
                      <el-button type="button" id="agree-btn" data-cid="29" data-url="https://qicao.cn/sanwen/29.html"><i class="icon iconfont icon-dianzan"></i> <span>赞</span> <span class="agree-num">0</span></el-button>
                    </div>
                    <div class="Copyrightnew">本文来自投稿，不代表本站立场，如若转载，请注明出处：https://qicao.cn/sanwen/29.html</div>
                  </div>
                </div>
                <footer class="sider-footer" style="left: -42px; opacity: 1; transition: all 1s ease 0s; top: 150px; width: 28px; position: fixed">
                  <div class="pos-r clearfix">
                    <div class="share-box">
                      <div class="weixin mouh" id="share-weixin">
                        <i class="icon iconfont icon-icon-test38"></i>
                        <!-- <div class="wx-t-x pos-a hide box" id="weixin-box"><img class="qrcode fl bor-3" src="https://qicao.cn/usr/themes/spimes/poster/api.php?url=https://qicao.cn/sanwen/29.html" /></div> -->
                      </div>
                      <span class="dot"></span> <a href="javascript:Share('tqq')" class="qq"> <i class="icon iconfont icon-qq"></i> </a> <span class="dot"></span>
                      <a href="javascript:Share('sina')" class="weibo"> <i class="icon iconfont icon-weibo"></i> </a> <span class="dot"></span> <a href="#comments" class="taolunqu"> <i class="icon iconfont icon-taolunqu"></i> </a>
                      <span class="dot"></span> <a href="javascript:addFavorite2()" class="weibo"> <i class="icon iconfont icon-fuzhi"></i> </a>
                    </div>
                  </div>
                </footer>
                <footer class="entry-footer">
                  <div class="post-tags"><a href="https://qicao.cn/tag/%E6%88%90%E9%95%BF/">成长</a><a href="https://qicao.cn/tag/%E9%81%93%E8%B7%AF/">道路</a><a href="https://qicao.cn/tag/%E7%BF%85%E8%86%80/">翅膀</a></div>
                  <div class="readlist">
                    <div class="read_outer">
                      <a class="comiis_poster_a" href="javascript:;" title="生成封面"><i class="icon iconfont icon-tupian"></i> 封面</a>
                    </div>
                    <div class="read_outer">
                      <a class="read" href="javascript:;" title="阅读模式"><i class="icon iconfont icon-shuju"></i> 阅读</a>
                    </div>
                  </div>
                </footer>
              </article>
              <div class="entry-page">
                <div class="entry-page-prev j-lazy" style="background-image: url(https://qicao.cn/images/26.jpg)">
                  <a href="https://qicao.cn/fanwen/28.html"> <span>待人接物的基本礼仪</span> </a>
                  <div class="entry-page-info"><span class="pull-left">« 上一篇</span> <span class="pull-right">10-18</span></div>
                </div>
                <div class="entry-page-next j-lazy" style="background-image: url(https://qicao.cn/images/28.jpg)">
                  <a href="https://qicao.cn/sanwen/30.html"><span>青春的旋律</span> </a>
                  <div class="entry-page-info"><span class="pull-right">下一篇 »</span> <span class="pull-left">10-23</span></div>
                </div>
              </div>
              <div class="part-mor">
                <h3 class="section-title"><span>随机推荐 </span></h3>
                <div class="section-cont">
                  <div class="items">
                    <div class="item">
                      <div class="hunter-item">
                        <a href="https://qicao.cn/lizhi/18.html"
                          ><div class="hunter-thumb"><i class="thumb" style="background-image: url(https://qicao.cn/images/13.jpg)"></i></div>
                          <h2>如何维护朋友圈,增进彼此友谊</h2></a
                        >
                      </div>
                    </div>
                    <div class="item">
                      <div class="hunter-item">
                        <a href="https://qicao.cn/zuowen/16.html"
                          ><div class="hunter-thumb"><i class="thumb" style="background-image: url(https://qicao.cn/images/10.png)"></i></div>
                          <h2>小学生自我介绍</h2></a
                        >
                      </div>
                    </div>
                    <div class="item">
                      <div class="hunter-item">
                        <a href="https://qicao.cn/sanwen/29.html"
                          ><div class="hunter-thumb"><i class="thumb" style="background-image: url(https://qicao.cn/images/27.jpg)"></i></div>
                          <h2>成长的道路，选择梦的翅膀</h2></a
                        >
                      </div>
                    </div>
                    <div class="item">
                      <div class="hunter-item">
                        <a href="https://qicao.cn/kandian/11.html"
                          ><div class="hunter-thumb"><i class="thumb" style="background-image: url(https://qicao.cn/images/6.jpg)"></i></div>
                          <h2>欢迎光临七草博客,请遵守本博规定</h2></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Comments></Comments>
            </div></div
        ></el-col>
        <el-col class="box-right" :span="6"
          ><div class="grid-content col-md-3 widget-area">
            <div class="theiaStickySidebar">
              <AuthorInfo></AuthorInfo>
              <HotArticle></HotArticle>
              <MostThumbs></MostThumbs>
              <TagList></TagList>
              <HotCommentPage></HotCommentPage>
              <RecentComment></RecentComment>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { validatePass, validateUsername } from '../../utils/utils';
import { loginData } from '../../const/home';
import { Component } from 'vue-property-decorator';
import PageFooter from '../../components/Footer/Index.vue';
import PageHeader from '../../components/Header/Index.vue';
import Comments from '../../components/Comments/index.vue';
import HotArticle from '../Home/components/hotArticle/Index.vue';
import AuthorInfo from '../../components/AuthorInfo/index.vue';
import MostThumbs from '../Home/components/mostThumbs/Index.vue';
import TagList from '../Home/components/tagList/Index.vue';
import InterAuthor from '../Home/components/InterAuthor/Index.vue';
import HotCommentPage from '../Home/components/hotCommentPage/Index.vue';
import RecentComment from '../Home/components/recentComment/Index.vue';
import { Getter, Action, State, namespace } from 'vuex-class';
import { login } from '../../api/home';

const loginModal = namespace('userStore');

@Component({
  components: {
    PageHeader,
    PageFooter,
    Comments,
    AuthorInfo,
    HotArticle,
    MostThumbs,
    TagList,
    InterAuthor,
    HotCommentPage,
    RecentComment,
  },
})
export default class Details extends Vue {
  @loginModal.Action('loginAction') loginAction!: Function;
  //登录信息
  private ruleForm: any = {
    username: '',
    password: '',
  };

  //注册验证规则
  private rules: any = {
    password: [{ validator: validatePass('请输入密码'), trigger: 'blur' }],
    username: [{ validator: validateUsername('请输入4到16位包含字母数字或者下划线的用户名'), trigger: 'blur' }],
  };

  //提交登录
  private handleLoginChange(formName: string) {
    let form: any = this.$refs[formName];
    form.validate((valid: any) => {
      if (valid) {
        this.handleLogin(this.ruleForm);
      } else {
        this.$message.error('输入的信息有误,请重新填写!');
        return false;
      }
    });
  }

  //登录事件
  private async handleLogin(params: any) {
    await login(params)
      .then((response: any) => {
        const { code, data, errorMsg, success } = response.data;
        if (success) {
          this.$message({ type: 'success', message: '登录成功', center: true });
          this.loginAction(data);
          setTimeout(() => {
            this.$router.push('/');
          }, 1000);
        } else {
          this.$message.error({ message: errorMsg, center: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
}
.site-main {
  padding-top: 147px;
  .details-container {
    .box-right {
      box-sizing: border-box;
      padding: 0 15px;
    }
    .contpost {
      background: #fff;
      box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
      border-radius: 8px;
      padding: 20px 20px 15px 20px;
      .post {
        .entry-header {
          position: relative;
          background-position: right top;
          background-repeat: no-repeat;
          background-size: auto 40%;
          .badge {
            border-radius: 2px;
            font-weight: 400;
            padding: 0.2em 0.35em;
            font-size: 12px;
            margin: 0 0.4rem 0 0;
            position: relative;
            top: -1px;
          }
          .page-title {
            font-size: 24px;
            color: #333;
            margin: 0;
            margin-bottom: 14px;
            margin-top: 14px;
            font-weight: 600;
            position: relative;
          }

          .entry-title {
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .entry-meta {
            font-size: 11px;
            color: #939393;
            letter-spacing: 2px;
            line-height: 1;
          }
          .contpost-meta {
            margin-bottom: 15px;
            height: 35px;
            line-height: 35px;
            a {
              color: #939393;
            }
            .separator {
              color: #e1e1e1;
              padding: 0 5px;
            }
            .site-content {
              line-height: 15px;
            }
            .site-lins {
              color: #9ca0ad !important;
            }
          }
          .postArticle-meta {
            position: absolute;
            bottom: 2px;
            right: 0;
            line-height: 36px;
            width: 85px;
            user-select: none;
            &::after {
              background-color: #0f2540;
              content: '';
              display: block;
              height: 36px;
              position: absolute;
              right: 44px;
              top: 0;
              -webkit-transform: rotate(20deg);
              transform: rotate(20deg);
              width: 1px;
            }
            time {
              color: #333;
              font-size: 32px;
              font-weight: 700;
              line-height: 36px;
            }
          }
          .border-theme {
            position: absolute;
            display: inline-block;
            left: 0;
            bottom: -16px;
            width: 100%;
            height: 1px;
            z-index: 2;
            background-color: rgba(0, 0, 0, 0.05);
          }
          .badge-hot {
            color: #fff;
            background-color: #448ef6;
            a {
              color: #fff;
            }
          }
          .contimg {
            float: left;
            margin: 0 10px 0 0;
            .avatar {
              border-radius: 50%;
            }
            img {
              max-width: 100%;
              height: auto;
              transition: opacity 0.3s;
            }
            a {
              color: #333;
            }
          }
        }
        .entry-content {
          text-align: justify;
          padding-top: 20px;
          padding: 10px 10px;
          p {
            font-size: 15px;
            position: relative;
            margin: 0 0 2em 0;
            color: rgba(0, 0, 0, 0.84);
            line-height: 2.2;
          }
          .dianzan {
            margin: 20px 0;
            button {
              border-radius: 8px;
              color: #54b5db;
              border: 1px solid #eee;
              background: #fff !important;
              .agree-num {
                font-size: 12px;
              }
            }
          }
          .Copyrightnew {
            background: #e8eef3;
            padding: 8px 20px;
            border-radius: 0 5px 5px 0;
            font-size: 12px;
            color: #999;
          }
        }
        .entry-footer {
          display: table;
          width: 100%;
          padding: 10px;
          .post-tags {
            a {
              margin-right: 15px;
              margin-bottom: 15px;
              line-height: 32px;
              display: inline-block;
              padding: 0 8px;
              background: #fafafa;
              border-radius: 3px;
              border: 1px solid #f2f2f2;
              color: #555;
              cursor: pointer;
              float: left;
              font-size: 11px;
            }
          }
          .readlist {
            #mClick.mobile_click,
            #mClick.mobile_close {
              float: right;
              color: #fff;
              padding: 0 10px;
              background: rgb(84, 181, 219);
              border-radius: 2px;
              font-size: 11px;
              line-height: 32px;
              cursor: pointer;
            }
            .read_outer {
              float: right;
              color: #fff;
              padding: 0 10px;
              background: rgb(84, 181, 219);
              border-radius: 2px;
              font-size: 12px;
              line-height: 32px;
              margin: 0 10px 0 0;
              a {
                color: #fff;
              }
            }
          }
        }
      }
      .entry-page {
        margin: 20px 0;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        .entry-page-next,
        .entry-page-prev {
          position: relative;
          float: left;
          width: 49%;
          box-sizing: border-box;
          padding: 60px 15px 10px;
          color: #fff;
          background-size: cover;
          background-position: 50%;
          border-radius: 3px;
          overflow: hidden;
          &::before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            content: '';
          }
          .entry-page-info {
            position: relative;
            font-size: 14px;
            line-height: 16px;
            overflow: hidden;
          }
          a {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            color: #fff;
            font-size: 15px;
            font-size: 12.5px;
            span {
              display: block;
              padding: 10px 15px 0;
              height: 50px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
      .part-mor {
        padding: 15px 0;
        border-radius: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        .section-title {
          margin-bottom: 5px;
        }
        .section-cont {
          margin: 0 -8px;
          .items {
            display: flex;
            .item {
              width: 100%;
              padding: 0 8px;
              .hunter-item {
                margin-bottom: 20px;
                position: relative;
                a {
                  display: block;
                  padding: 5px;
                  background: #fff;
                  position: relative;
                  z-index: 2;
                  border-radius: 5px;
                  .hunter-thumb {
                    border-radius: 5px;
                    overflow: hidden;
                    margin-bottom: 10px;
                    .thumb {
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
              }
            }
          }
        }
      }
    }
  }
}
</style>