<!--
 * @Author: WZQ
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-11-27 15:07:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="login-box typecho-login-wrap">
    <div class="typecho-login">
      <h1><a href="http://typecho.org" class="i-logo">Typecho</a></h1>
      <form action="https://qicao.cn/index.php/action/login?_=c8bc4f9282ada562b5ecc3e1ad45eff0" method="post" name="login" role="form">
        <p>
          <label for="name" class="sr-only">用户名</label>
          <input type="text" id="name" name="name" value="" placeholder="用户名" class="text-l w-100" autofocus="" />
        </p>
        <p>
          <label for="password" class="sr-only">密码</label>
          <input type="password" id="password" name="password" class="text-l w-100" placeholder="密码" />
        </p>
        <p class="submit">
          <button type="submit" class="btn btn-l w-100 primary">登录</button>
          <input type="hidden" name="referer" value="" />
        </p>
        <p>
          <label for="remember"><input type="checkbox" name="remember" class="checkbox" value="1" id="remember" /> 下次自动登录</label>
        </p>
      </form>
      <p class="more-link">
        <router-link  :to="{name:'home'}">返回首页</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default class Login extends Vue {
}
</script>
<style lang="scss" scoped>
.typecho-login-wrap {
  display: table;
  margin: 0 auto;
  height: 100vh;
  .typecho-login {
    display: table-cell;
    padding: 30px 0 100px;
    width: 280px;
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
    form {
      p {
        display: block;
        margin-block-start: 14px;
        margin-block-end: 14px;
        .sr-only {
          border: 0;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          position: absolute;
          width: 1px;
        }
        .text-l{
          height:40px;
        }
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