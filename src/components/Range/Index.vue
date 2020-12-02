<!--
 * @Author: your name
 * @Date: 2020-11-30 13:57:50
 * @LastEditTime: 2020-11-30 18:15:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Range\Index.vue
-->
<template>
  <div class="jc-component__range">
    <div class="jc-range" :class="rangeStatus ? 'success' : ''">
      <div class="rangeTep" ref="rangeTep"></div>
      <i @mousedown="rangeMove" :class="rangeStatus ? successIcon : startIcon"></i>
      {{ rangeStatus ? successText : startText }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Range extends Vue {
  @Prop() successFun!: () => void; // 成功之后的函数
  @Prop(String) successIcon!: string; //成功图标
  @Prop({ default: '验证通过' }) successText!: string; //成功文字
  @Prop(String) startIcon!: string; //开始的图标
  @Prop({ default: '请按住滑块，拖动到最右边' }) startText!: string; //开始的文字
  @Prop(Function) errorFun!: Function; //失败之后的函数
  @Prop(String) status!: string; //或者用值来进行监听

  private disX: number = 0;
  private rangeStatus: Boolean = false;


  //滑块移动
  rangeMove(e: any) {
    let ele = e.target;
    let startX = e.clientX;
    let rangeRefs: any = this.$refs.rangeTep;
    let eleWidth = ele.offsetWidth;
    let parentWidth = ele.parentElement.offsetWidth;
    let MaxX = parentWidth - eleWidth;
    if (this.rangeStatus) {
      //不运行
      return false;
    }
    document.onmousemove = (e) => {
      let endX = e.clientX;
      this.disX = endX - startX;
      if (this.disX <= 0) {
        this.disX = 0;
      }
      if (this.disX >= MaxX - eleWidth) {
        //减去滑块的宽度,体验效果更好
        this.disX = MaxX;
      }
      ele.style.transition = '.1s all';
      ele.style.transform = 'translateX(' + this.disX + 'px)';
      e.preventDefault();
    };
    document.onmouseup = () => {
      if (this.disX !== MaxX) {
        this.disX = 0;
        ele.style.transition = '.5s all';
        ele.style.transform = 'translateX(' + 0 + 'px)';
        //执行成功的函数
        this.errorFun && this.errorFun();
      } else {
        this.rangeStatus = true;
        //执行成功的函数
        this.successFun && this.successFun();
      }
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
}
</script>
<style lang="scss" scoped>
@mixin jc-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.jc-component__range {
  position: relative;
  .jc-range {
    background-color: #e9e9e9;
    position: relative;
    transition: 1s all;
    user-select: none;
    color: #585858;
    @include jc-flex;
    height: 38px; /*no*/
    .rangeTep {
      position: absolute;
      left: 0;
      background-color: #599cbe;
      height: 100%;
    }
    &.success {
      background-color: #599cbe;
      color: #fff;
      i {
        color: #599cbe;
      }
    }
    i {
      position: absolute;
      left: 0;
      width: 50px; /*no*/
      height: 100%;
      color: #3fcd26;
      box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border: 1px solid #d8d8d8;
      cursor: pointer;
      font-size: 18px;
      @include jc-flex;
    }
  }
}
</style>