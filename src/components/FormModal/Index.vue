<!--
 * @Author: WZQ
 * @Date: 2020-11-19 14:56:29
 * @LastEditTime: 2020-12-01 14:20:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\Header\Index.vue
-->
<template>
  <div>
    <el-dialog :title="modelTitle" :visible.sync="dialogFormVisible" :width="modelWidth" top="20vh">
      <slot name="content"></slot>
      <div slot="footer" class="dialog-footer">
        <el-button v-if="cancleBtnVisible" @click="handleCancleChange">{{cancleBtnText}}</el-button>
        <el-button v-if="submitBtnVisible" type="primary" @click="handleSubmitChange">{{submitBtnText}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop(String) modelTitle!: string; //弹窗文字
  @Prop({ default: false }) dialogFormVisible!: boolean; //弹窗显示和隐藏
  @Prop({ default: true }) cancleBtnVisible!: boolean; //取消按钮状态
  @Prop({ default: '确定' }) submitBtnText!: boolean; //弹窗显示和隐藏
  @Prop({ default: '取消' }) cancleBtnText!: boolean; //取消按钮状态
  @Prop({ default: true }) submitBtnVisible!: boolean; //确认按钮状态
  @Prop(Function) handleCancle!: Function; //取消事件
  @Prop(Function) handleOk!: Function; //确定事件
  @Prop(String) modelWidth!: string; //弹窗宽度


  private dialogVisible: boolean = this.dialogFormVisible;

  // 取消事件
  private handleCancleChange = () => {
    this.dialogVisible = false;
    !this.cancleBtnVisible && this.handleCancle && this.handleCancle();
  };

  // 确定事件
  private handleSubmitChange = () => {
    this.dialogVisible = false;
    !this.submitBtnVisible && this.handleOk && this.handleOk();
  };
}
</script>
<style scoped lang="scss">
</style>