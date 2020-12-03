<!--
 * @Author: WZQ
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-12-02 15:58:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="login-box typecho-login-wrap">
    <div class="typecho-login">
      <h1><a href="http://typecho.org" class="i-logo">Typecho</a></h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input type="text" id="name" name="name" v-model="ruleForm.username" value="" placeholder="用户名" class="w-100" autofocus="" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" id="password" v-model="ruleForm.password" name="password" class="w-100" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="handleLoginChange('ruleForm')" class="btn btn-l w-100 primary">登录</el-button>
        </el-form-item>
        <p class="rember">
          <label for="remember"><input type="checkbox" name="remember" class="checkbox" value="1" id="remember" /> 下次自动登录</label>
          <label for="remember">没有账号,<router-link :to="{ name: 'register' }">前往注册</router-link></label>
        </p>
      </el-form>
      <!-- <p class="more-link">
        <router-link :to="{ name: 'home' }">返回首页</router-link>
      </p> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { validatePass, validateUsername } from '../../utils/utils';
import { loginData } from '../../const/home';
import { Component } from 'vue-property-decorator';
import { Getter, Action, State, namespace } from 'vuex-class';
import { login } from '../../api/home';

const loginModal = namespace('userStore');

@Component
export default class Login extends Vue {
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
.form-row {
  margin-bottom: 10px;
  .row-babel {
    font-size: 14px;
  }
  .row-text {
    font-weight: bold;
  }
}
/deep/.el-form {
  .el-form-item {
    &__content {
      margin-left: 0 !important;
    }
  }
}
.typecho-login-wrap {
  display: table;
  margin: 0 auto;
  height: 100vh;
  .typecho-login {
    display: table-cell;
    padding: 30px 0 100px;
    width: 320px;
    text-align: center;
    vertical-align: middle;
    h1 {
      margin: 0 0 28px;
      a {
        width: 169px;
        height: 40px;
        display: inline-block;
        background: url('../../assets/images/home/typecho-logo.svg') no-repeat;
        text-indent: -9999em;
        -moz-background-size: auto 40px;
        -o-background-size: auto 40px;
        -webkit-background-size: auto 40px;
        background-size: auto 40px;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=15);
        opacity: 0.15;
      }
    }
    .el-form {
      .el-form-item {
        display: block;
        .submit {
          background-color: #467b96;
          cursor: pointer;
          border-radius: 2px;
          color: #fff;
        }
        .primary {
          background-color: #467b96 !important;
          cursor: pointer;
          -moz-border-radius: 2px;
          -webkit-border-radius: 2px;
          border-radius: 2px;
          color: #fff;
        }
      }
      .rember {
        display: flex;
        justify-content: space-between;
      }
    }
    .more-link {
      margin-top: 28px;
      color: #ccc;
      a {
        margin: 0 3px;
      }
    }
  }
}
</style>