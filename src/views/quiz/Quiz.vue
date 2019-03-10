<template>
  <div class="page">
    <Header :title="title" :showBack="true"></Header>
    <div class="quiz-box" v-for="(items, index) in quiz_list" :key="index" v-show="index === current_index">
      <div class="quiz">
        <p class="quiz-title">{{ index + 1 }}. {{ items.title }}</p>

        <ul class="quiz-options">
          <li v-for="(item, index) in items.options" @click="checkAnswer(index, items)" :class="['option', answer_state_list[current_index][index]]">
            <span class="option-index">{{ changeToLetter(index) }}</span>
            <span class="option-content">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="btn-box">
        <button @click="preEvent" class="btn" :class="{ disabled: !btn_state.pre }">
          上一题
        </button>
        <button @click="nextEvent" class="btn" :class="{ disabled: !btn_state.next }">
          下一题
        </button>
      </div>
      <div class="explain" v-show="index === current_index && reason_state == true">
        <p><span class="title">最佳解释：</span>{{ items.reason }}</p>
      </div>
    </div>
    <!-- 显示菜单按钮 -->
    <div class="menu-btn" @click="showMenu"></div>
    <!-- 底部nav -->
    <div class="footer">
      <div class="btn" @click="collection(current_index)">
        收藏<i :class="[
            'iconfont',
            getCollectionState(current_index) ? 'iconxingxing' : 'iconxingxing1'
          ]"></i>
      </div>
      <div class="btn" @click="showReason">查看解析</div>
      <div class="btn" @click="showErrorMenu">
        错题本<span v-if="error_list.length">({{ error_list.length }})</span>
      </div>
    </div>
    <Menu ref="list" class="menu">
      <div slot="modalbody">
        <h5>题目列表</h5>
        <ul>
          <li v-for="(item, index) in quiz_list" :key="index">
            <div @click="changeCurrentIdex(item.index)" :class="['item', getAnswerState(answer_state_list[index])]">
              {{ item.index }}
            </div>
          </li>
        </ul>
      </div>
    </Menu>
    <Menu ref="error_list" class="menu">
      <div slot="modalbody">
        <h5>错题本</h5>
        <ul>
          <li v-for="(item, index) in error_list" :key="index">
            <div class="item error" @click="changeCurrentIdex(item.index)">
              {{ item.index }}
            </div>
          </li>
        </ul>
      </div>
    </Menu>
  </div>
</template>

<script>
  import {
    Toast,
    MessageBox
  } from "mint-ui";
  import Header from "_c/Header.vue";
  import Menu from "_c/Menu.vue";
  import Service from "@/service/service.js";
  import store from "@/store.js";
  // 引入Vue，利用set()解决数组更新不及时问题
  import Vue from "vue";
  export default {
    components: {
      Header,
      Menu
    },
    data() {
      return {
        title: "选择题考试",
        current_index: 0, //当前题目下标
        btn_state: {
          pre: false,
          next: true
        },
        quiz_list: [], //选择题数组
        quiz_list_id: 0, //试卷的编号
        collection_state_list: [], //是否收藏
        collection_list: [], //收藏夹
        reason_state: false, //是否显示解析
        error_list: [], //错题本
        answer_state_list: [], //二维数组
        answer_state_lock: [], //记录题目是否已答
        multiple_count: 0 //记录多选的选项
      };
    },
    methods: {
      // 数字转字母
      changeToLetter(item) {
        return String.fromCharCode(item + 65);
      },
      //  上一题
      preEvent() {
        if (!this.btn_state.pre) return;
        // 切换题目后清空多选计数
        this.multiple_count = 0;
        this.reason_state = false;
        if (this.current_index > 0) {
          this.current_index--;
        }
        this.checkState();
      },
      //  下一题
      nextEvent() {
        if (!this.btn_state.next) return;
        // 切换题目后清空多选计数
        this.multiple_count = 0;
        this.reason_state = false;
        if (this.current_index < this.quiz_list.length - 1) {
          this.current_index++;
        }
        this.checkState();
      },
      // 检查第一题和最后一题按钮状态
      checkState() {
        this.btn_state.pre = this.current_index == 0 ? false : true;
        this.btn_state.next =
          this.current_index == this.quiz_list.length - 1 ? false : true;
      },
      // 判断选择对错
      checkAnswer(index, items) {
        if (this.answer_state_lock[this.current_index]) {
          return;
        }
        // 多选
        if (typeof items.answer == "object") {
          let len = items.answer.length;
          // 选择的是正确选项之一
          if (items.answer.includes(index)) {
            this.changeArrValue(
              this.answer_state_list,
              this.current_index,
              index,
              "answer-right"
            );
            this.multiple_count++;
            if (this.multiple_count >= len) {
              // 全选对后锁定状态
              this.answer_state_lock[this.current_index] = true;
            }
          } else {
            // 选项错误
            this.changeArrValue(
              this.answer_state_list,
              this.current_index,
              index,
              "answer-error"
            );
            for (let i = 0; i < len; i++) {
              this.changeArrValue(
                this.answer_state_list,
                this.current_index,
                items.answer[i],
                "answer-right"
              );
            }
            this.error_list.push(items);
            this.answer_state_lock[this.current_index] = true;
          }
        } else {
          //单选
          if (index == items.answer) {
            // set方法对二维数组无效，换做splice，不利用array也无法触发视图更新（如下两条注释）
            // Vue.set(this.answer_state_list[this.current_index], index, "answer-right");
            // this.answer_state_list[this.current_index].splice(index, 1, "answer-right");
            this.changeArrValue(
              this.answer_state_list,
              this.current_index,
              index,
              "answer-right"
            );
          } else {
            this.changeArrValue(
              this.answer_state_list,
              this.current_index,
              index,
              "answer-error"
            );

            this.changeArrValue(
              this.answer_state_list,
              this.current_index,
              items.answer,
              "answer-right"
            );

            this.error_list.push(items);
          }
          this.answer_state_lock[this.current_index] = true;
        }
      },
      // 改变二维数组的值
      changeArrValue(arr, index, jndex, value) {
        let array = arr[index];
        array[jndex] = value;
        arr.splice(index, 1, array);
      },
      showMenu() {
        this.$refs.list.modelOpen();
      },
      collection(cIndex) {
        if (!store.state.username) {
          MessageBox.confirm("收藏夹功能需要登录")
            .then(action => {
              this.$router.push("/login");
            })
            .catch(error => {
              // console.log(error);
            });
          return;
        }
        let state = this.collection_state_list[this.quiz_list[cIndex].id];

        if (state) {
          this.collection_list.splice(
            this.collection_list.indexOf(this.quiz_list[cIndex]),
            1
          );
        } else {
          this.collection_list.push(this.quiz_list[cIndex]);
        }
        Vue.set(this.collection_state_list, this.quiz_list[cIndex].id, !state);
      },
      showReason() {
        this.reason_state = true;
      },
      showErrorMenu() {
        if (this.error_list.length > 0) {
          this.$refs.error_list.modelOpen();
        } else {
          Toast({
            message: "您还没有错题",
            position: "bottom"
          });
        }
      },
      changeCurrentIdex(index) {
        this.current_index = index - 1;
      },
      getAnswerState(item) {
        if (item.includes("answer-error")) {
          return "error";
        } else if (item.includes("answer-right")) {
          return "right";
        } else {
          return "";
        }
      },
      getCollectionState(cIndex) {
        if (this.quiz_list[cIndex]) {
          return this.collection_state_list[
            this.quiz_list[this.current_index].id
          ];
        }
      }
    },
    activated() {
      // 根据url参数获取试题id，再去获取试题列表
      this.quiz_list_id = this.$route.params.quiz_list_id;
      Service.getQuizById(this.quiz_list_id).then(res => {
        if (res.code == 1) {
          this.quiz_list = res.quiz_list;
          // 初始化二维数组用于存放每个题目每个选项的状态
          for (let i = 0; i < this.quiz_list.length; i++) {
            this.answer_state_list[i] = [];
          }
        } else {
          Toast({
            message: "试题不见了，请重试",
            position: "bottom"
          });
        }
      });
      Service.getCollectionState({
        username: store.state.username
      }).then(res => {
        if (res.code == 1) {
          this.collection_state_list = res.data;
          // console.log(this.collection_state_list);
        }
      });
    },
    deactivated() {
      this.btn_state = {
          pre: false,
          next: true
        },
        this.error_list = [];
      this.current_index = 0;
      // 离开时清除答题状态
      this.answer_state_lock = [];
      //清除题目列表防止下次进入时试题列表切换闪屏
      this.quiz_list = [];
      Service.setCollectionState({
        username: store.state.username,
        list: this.collection_state_list
      }).then(res => {
        // console.log("finish");
        // this.collection_state_list=[];
      });
    }
  };
</script>

<style scoped lang="scss">
  .quiz-box {
    font-size: 0.34rem;
    padding: 0.3rem 0;
    text-align: left;

    .quiz {
      width: 95%;
      padding: 0.3rem 0 0.1rem;
      margin: 0.3rem auto;
      background-color: #fff;
      max-height: 7rem;
      overflow: auto;

      .quiz-title {
        font-size: 0.35rem;
        margin-bottom: 0.3rem;
        padding: 0 0.2rem;
        text-indent: 0.1rem;
        line-height: 0.6rem;
      }

      .quiz-options {
        padding: 0.3rem;
        margin: 0.3rem 0.1rem;
        background-color: #ebeaea;

        .option {
          padding: 0.2rem;
          margin: 0.1rem 0 0;
          letter-spacing: 0.02rem;

          &-index {
            font-size: 0.36rem;
            font-weight: bolder;
            margin-right: 0.2rem;
          }

          &-content {
            line-height: 0.4rem;
          }

          &:active {
            background-color: #d3d4df;
          }
        }
      }
    }

    .btn-box {
      width: 85%;
      margin: 0.5rem auto;
      display: flex;
      justify-content: space-between;

      .btn {
        color: #fff;
        padding: 0.2rem 1rem;
        background-color: #00a400;
        border-radius: 0.15rem;
        text-align: center;
        font-weight: bold;
      }

      .disabled {
        color: #000;
        background-color: #ddd;
      }
    }

    .explain {
      padding: 0.3rem 0.3rem 0.5rem;
      max-height: 3rem;
      background-color: #fff;
      width: 100%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      font-size: 0.3rem;
      line-height: 0.4rem;
      overflow: auto;

      .title {
        font-size: 0.32rem;
        color: #00a400;
      }
    }
  }

  .menu-btn {
    position: fixed;
    z-index: 1000;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #fff url(../../assets/img/list.svg) no-repeat center center;
    background-size: 0.6rem;
    bottom: 10%;
    right: 0.3rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .footer {
    position: fixed;
    width: 100%;
    line-height: 0.8rem;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: 0.35rem;

    .btn {
      width: 100%;
      font-weight: bold;
      letter-spacing: 0.04rem;
      text-align: center;
      border: 1px solid #ddd;

      &:active {
        background-color: #ddd;
      }

      .iconfont {
        font-size: 0.4rem;
        padding-left: 0.2rem;
      }
    }
  }

  .answer-right {
    font-weight: bold;
    color: green;
  }

  .answer-error {
    color: red;
    font-weight: bold;
  }

  .menu {
    h5 {
      margin: 0;
      padding-top: 15px;
      line-height: 25px;
      text-align: center;
      color: #444;
    }

    ul {
      padding: 0.3rem 0;
      margin: 0 auto;
      width: 95%;
      font-size: 0;

      li {
        width: 20%;
        height: 1.2rem;
        display: inline-block;
        position: relative;

        .item {
          width: 0.8rem;
          height: 0.8rem;
          border: 1px solid #aaa;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          font-size: 0.36rem;
          color: #333;
          line-height: 0.8rem;
          text-align: center;

          &:active {
            background: #ccc;
            color: #333;
          }

          &.right {
            color: #00a400;
            border: 1px solid #00a400;
            background: rgba(0, 164, 0, 0.17);

            &:active {
              background: #00a400;
              color: #fff;
            }
          }

          &.error {
            color: #e8571b;
            border: 1px solid #e8571b;
            background: rgba(255, 96, 30, 0.17);

            &:active {
              background: #e8571b;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>