<template>
  <div class="page">
    <!-- 账户详情 -->
    <Header :title="title" :showBack="true"></Header>
    <div class="edit-box" @keyup.enter="saveProfile">
      <mt-field
        label="用户名"
        v-model="profile_form.username"
        readonly
        class="edit"
      ></mt-field>
      <mt-field
        label="昵称"
        placeholder="请输入昵称"
        v-model="profile_form.nickname"
        class="edit"
        :attr="{ maxlength: 15 }"
        :state="form_state.nickname"
      ></mt-field>
      <mt-field
        label="邮箱"
        placeholder="请输入邮箱"
        type="text"
        v-model="profile_form.email"
        class="edit"
        :state="form_state.email"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        v-model="profile_form.phone"
        class="edit"
        :attr="{ minlength: 11, maxlength: 11 }"
        :state="form_state.phone"
      ></mt-field>
      <mt-field
        label="生日"
        placeholder="请输入生日"
        type="date"
        v-model="profile_form.birthday"
        class="edit"
        :state="form_state.birthday"
      ></mt-field>
      <mt-field
        label="个性签名"
        placeholder="请输入个签(限50字)"
        type="textarea"
        rows="3"
        v-model="profile_form.introduction"
        class="edit"
        :attr="{ maxlength: 50 }"
        :state="form_state.introduction"
      ></mt-field>
    </div>
    <button @click="saveProfile" class="save-btn">保存</button>
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import store from "@/store.js";
import Service from "@/service/service.js";
import { Indicator, Toast } from "mint-ui";
import formCheck from "@/common/formCheck.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "个人信息",
      profile_form: {
        username: "",
        nickname: "",
        email: "",
        phone: "",
        birthday: "",
        introduction: ""
      },
      form_state: {
        nickname: "warning",
        email: "warning",
        phone: "warning",
        birthday: "warning",
        introduction: "warning"
      }
    };
  },
  methods: {
    saveProfile() {
      if (
        this.form_state.email == "success" &&
        this.form_state.phone == "success" &&
        this.form_state.birthday == "success" &&
        this.form_state.nickname == "success" &&
        this.form_state.introduction == "success"
      ) {
        Indicator.open();
        setTimeout(() => {
          Service.saveProfile(this.profile_form).then(res => {
            Indicator.close();
            if (res.code == 1) {
              this.$router.back(-1);
              Toast({ message: "保存成功", position: "bottom" });
            } else {
              Toast({ message: "保存失败", position: "bottom" });
            }
          });
        }, 500);
      } else {
        Toast({ message: "请检查您的输入", position: "bottom" });
        return;
      }
    }
  },
  watch: {
    profile_form: {
      handler(newValue, oldValue) {
        this.form_state.phone = formCheck.phoneCheck(this.profile_form.phone);
        this.form_state.email = formCheck.emailCheck(this.profile_form.email);
        this.form_state.birthday = formCheck.birthdayCheck(
          this.profile_form.birthday
        );
        this.form_state.nickname = formCheck.nicknameCheck(
          this.profile_form.nickname
        );
        this.form_state.introduction = formCheck.introductionCheck(
          this.profile_form.introduction
        );
      },
      deep: true
    }
  },
  //   mounted+nextTick会在keep-active下只执行一次，多次登录信息不能更新
  activated() {
    Service.getProfile({
      username: store.state.username,
      type: "get"
    }).then(res => {
      if (res.code == 1) {
        this.profile_form = {
          username: store.state.username,
          nickname: res.data.nickname,
          phone: res.data.phone,
          email: res.data.email,
          birthday: res.data.birthday,
          introduction: res.data.introduction
        };
      } else {
        Toast({
          message: "出错了，请重试",
          position: "bottom"
        });
      }
    });
  }
};
</script>

<style scoped lang="scss">
.edit {
  margin-top: 0.06rem;
  border-top: 1px solid #ccc;
}

.save-btn {
  width: 80%;
  height: 1rem;
  border-radius: 0.1rem;
  margin-top: 0.5rem;
  font-size: 0.4rem;
  font-weight: bolder;
  color: #fff;
  letter-spacing: 0.2rem;
  background-color: #18ac18;
}
</style>