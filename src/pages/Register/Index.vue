<!--
 * @Author: WZQ
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-12-02 14:00:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\components\HelloWorld.vue
-->
<template>
  <div class="register-box typecho-register-wrap">
    <div class="typecho-register">
      <h1><a href="/" class="i-logo">Typecho</a></h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input placeholder="请输入密码" autocomplete="new-password" type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input placeholder="请输入确认密码" autocomplete="new-password" type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item prop="telphone">
          <el-input placeholder="请输入手机号" v-model="ruleForm.telphone"><template slot="prepend">86</template></el-input>
        </el-form-item>
        <el-form-item>
          <Range successIcon="el-icon-circle-check" @successFun="handleSuccessChange" startIcon="el-icon-d-arrow-right"></Range>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="btnStatus" @click="submitForm('ruleForm')" class="btn btn-l w-100 primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <FomrModal :dialogFormVisible="modalVisible" modelTitle="验证手机" modelWidth="30%" :cancleBtnVisible="false" submitBtnText="提交">
      <div slot="content">
        <el-row class="form-row">
          <el-col :span="3"><span class="row-label">手机号:</span></el-col>
          <el-col :span="12"
            ><span class="row-text">{{ ruleForm.telphone }}</span></el-col
          >
        </el-row>
        <el-form class="form-row">
          <el-form-item>
            <el-row>
              <el-col :span="3"><span class="row-label">验证码:</span></el-col>
              <el-col :span="12"><el-input v-model="ruleForm.telcode" autocomplete="off"></el-input></el-col>
              <el-col :span="3" offset="1"
                ><el-button type="primary">{{ sendCodeTitle }}</el-button></el-col
              >
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </FomrModal>
  </div>
</template>
<script lang="ts">
import { validatePass, checkPhone, validateUsername, validateCheckPass } from '../../utils/utils';
import { Component, Watch, Vue } from 'vue-property-decorator';
import Range from '../../components/Range/Index.vue';
import { registerSend } from '../../api/home';
import FomrModal from '../../components/FormModal/Index.vue';

@Component({
  components: {
    Range,
    FomrModal,
  },
})
export default class Register extends Vue {
  private btnStatus: boolean = false; //按钮状态
  private modalVisible: boolean = false; //弹窗状态
  private sendCodeTitle: String = '发送'; //验证码验证文字
  //注册信息
  private ruleForm: any = {
    password: '',
    checkPass: '',
    username: '',
    telphone: '',
    telcode: '',
  };
  //注册验证规则
  private rules: any = {
    password: [{ validator: validatePass('请输入密码'), trigger: 'blur' }],
    checkPass: [{ validator: validateCheckPass('请输入确认密码', this.ruleForm), trigger: 'blur' }],
    telphone: [{ validator: checkPhone('请输入手机号'), trigger: 'blur' }],
    username: [{ validator: validateUsername('请输入4到16位包含字母数字或者下划线的用户名'), trigger: 'blur' }],
  };

  //提交事件
  private async submitForm(formName: string) {
    let form: any = this.$refs[formName];
    form.validate((valid: any) => {
      if (valid) {
        const { password, username, telphone } = this.ruleForm;
        this.handleRegister({ password, username, telphone });
      } else {
        this.$message.error('输入的信息有误,请重新填写!');
        return false;
      }
    });
  }

  private async handleRegister(params: any) {
    await registerSend(params).then((response: any) => {
        const { code, data, errorMsg,success } = response.data;
        if (success === true) {
          this.$message({ type: 'success', message: '注册成功', center: true });
          this.$router.push('/login')
        } else {
          console.log(errorMsg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private handleSuccessChange() {
    this.btnStatus = false;
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
.typecho-register-wrap {
  display: table;
  margin: 0 auto;
  height: 100vh;
  .typecho-register {
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
    .primary {
      background-color: #467b96 !important;
      cursor: pointer;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      color: #fff;
    }
    .is-disabled {
      background-color: #aeb2b3 !important;
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