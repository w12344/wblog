<!--
 * @Author: wuzhiqiang
 * @Date: 2020-11-19 14:56:29
 * @LastEditTime: 2020-11-24 17:25:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Header\Index.vue
-->
<template>
  <div class="banner-box">
    <div class="contpost">
      <div class="grid-content bg-purple">
        <div class="recommed big-slider">
          <el-carousel height="335px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="item in bannerList" :key="item">
              <div class="big-slider-item">
                <a href="https://qicao.cn/sanwen/7.html" :style="{ backgroundImage: 'url(' + item.src + ')' }" class="big-slider-img"
                  ><i class="mask"></i>
                  <div class="title"><span class="badge arc_v2">推荐</span>心里的远方</div></a
                >
                <div class="entyr-icon"><i class="icon iconfont icon-shoucang"></i></div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="recommend small-slider">
          <div class="small-slider-item">
            <a href="https://qicao.cn/sanwen/7.html" style="background-image: url(https://qicao.cn/images/2.jpg)" class="small-slider-img"
              ><i class="mask"></i>
              <div class="title"><span class="badge arc_v2">推荐</span>心里的远方</div></a
            >
            <div class="entyr-icon"><i class="icon iconfont icon-shoucang"></i></div>
          </div>
          <div class="small-slider-item">
            <a href="https://qicao.cn/sanwen/7.html" style="background-image: url(https://qicao.cn/images/2.jpg)" class="small-slider-img"
              ><i class="mask"></i>
              <div class="title"><span class="badge arc_v2">推荐</span>心里的远方</div></a
            >
            <div class="entyr-icon"><i class="icon iconfont icon-shoucang"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      bannerList: [
        { key: '', src: require('../../assets/images/home/banner1.jpg') },
        { key: '', src: require('../../assets/images/home/banner1.jpg') },
        { key: '', src: require('../../assets/images/home/banner1.jpg') },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.banner-box {
  padding-top: 147px;
  .contpost {
    box-sizing: border-box;
    background-color: #fff !important;
    box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
    border-radius: 8px;
    padding: 20px 20px 15px 20px;
    .grid-content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .big-slider {
        width: 65.5% !important;
        &-item {
          height: 335px !important;
        }
        img {
          width: 100%;
        }
      }
      .small-slider,
      .big-slider {
        width: 32.5%;
        &-item {
          height: 160px;
          overflow: hidden;
          margin-bottom: 15px;
          border-radius: 5px;
          position: relative;
          a {
            background-image: url('../../assets/images/home/banner1.jpg');
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
            .mask {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 5%, rgba(0, 0, 0, 0.3));
            }
            .title {
              color: hsla(0, 0%, 100%, 0.9);
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 10px;
              font-size: 14px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              text-align: left;
              box-sizing: border-box;
              width: 100%;
              .arc_v2 {
                background: #54b5db;
                color: #fff;
              }
              .badge {
                border-radius: 2px;
                font-weight: 400;
                padding: 2px 3.5px;
                font-size: 12px;
                margin: 0 4px 0 0;
                position: relative;
                top: -1px;
              }
            }
          }
        }
      }
    }
  }
}
</style>