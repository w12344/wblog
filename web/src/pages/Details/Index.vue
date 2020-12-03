<!--
 * @Author: WZQ
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-12-03 11:40:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="details-box container page-component__scroll">
    <div class="details-main">
      <PageHeader></PageHeader>
      <div class="details-container">
          
      </div>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { validatePass, validateUsername } from '../../utils/utils';
import { loginData } from '../../const/home';
import { Component } from 'vue-property-decorator';
import PageFooter from '../../components/Footer/Index.vue';
import PageHeader from '../../components/Header/Index.vue';
import { Getter, Action, State, namespace } from 'vuex-class';
import { login } from '../../api/home';

const loginModal = namespace('userStore');

@Component({
  components: {
    PageHeader,
    PageFooter,
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