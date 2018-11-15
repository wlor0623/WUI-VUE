<template>
  <section class="wlor-input" :class="wrapClasses" @click.self="$refs.input.focus()">
    <!-- 前缀 -->
    <div class="prepend-icon" @click="prependCallback" v-if="prepend">
      <slot name="prepend"></slot>
    </div>
    <!-- 输入框 -->
    <div class="inner-input" @click.self="$refs.input.focus()">
      <input :type="type" :autofocus="autofocus" :placeholder="placeholder" class="input" ref="input" :readonly="readonly" :disabled="disabled" :maxlength="maxlength" :value="currentValue" @input="onInput" @focus="onFocus" @blur="onBlur" @keydown="onKeydown">
      <i class="empty" @click="clear" v-show="showEmpty"></i>
    </div>
    <!-- 后缀 -->
    <div class="append-icon" @click="appendCallback" v-if="append">
      <slot name="append"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "Vinput",
  // inheritAttrs: false,
  data() {
    return {
      currentValue:
        this.value === undefined || this.value === null ? "" : this.value,
      focused: false,
      prepend: true,
      append: true
    };
  },

  props: {
    type: {
      type: [String, Number],
      default: "text"
    },
    placeholder: {
      type: [String],
      default: null
    },
    maxlength: {
      // 最大长度
      type: [String, Number],
      default: null
    },
    hasChinese: {
      // 是否能输入中文
      type: Boolean,
      default: false
    },
    disabled: {
      // 禁用
      type: Boolean,
      default: false
    },
    readonly: {
      // 只读
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    },
    limit: {
      type: [String],
      default: null
    },
    prependWidth: {
      type: [String],
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  //渲染前
  created() {
    const that = this;
  },
  computed: {
    showEmpty() {
      return (
        this.currentValue !== "" &&
        this.focused &&
        !this.readonly &&
        !this.disabled
      );
    },
    wrapClasses() {
      return [
        {
          [`wlor-prepend`]: this.prepend,
          [`wlor-append`]: this.append
        }
      ];
    }
  },
  //渲染后
  mounted() {
    this.prepend = this.$slots.prepend !== undefined;
    this.append = this.$slots.append !== undefined;
  },
  //方法
  methods: {
    // 清空
    clear() {
      this.currentValue = "";
      this.$emit("input", "");
    },
    onInput(e) {
      // 去中文
      if (!this.hasChinese) {
        e.target.value = e.target.value.replace(/[\u4E00-\u9FA5]/g, "");
      }
      if (this.limit) {
        switch (this.limit) {
          case "number":
            e.target.value = e.target.value.replace(/[a-zA-Z]/g, "");
            break;
          case "pureNumber":
            e.target.value = e.target.value.replace(/[a-zA-Z.]/g, "");
            break;
          case "letter":
            e.target.value = e.target.value.replace(
              /[^\u4e00-\u9fa5a-zA-Z0-9]/g,
              ""
            );
            break;
          default:
            break;
        }
      }
      // 长度限制
      if (this.maxlength) {
        if (e.target.value.length > this.maxlength) {
          e.target.value = e.target.value.slice(0, this.maxlength);
          this.currentValue = e.target.value.slice(0, this.maxlength);
          this.$emit("input", e.target.value.slice(0, this.maxlength));
          return;
        }
      }
      this.currentValue = e.target.value;
      this.$emit("input", e.target.value);
    },
    onKeydown(e) {},
    onFocus(e) {
      this.focused = true;
      this.$emit("focus", e);
    },
    onBlur(e) {
      setTimeout(() => {
        this.focused = false;
      }, 200);
      this.$emit("blur", e);
    },
    appendCallback() {
      this.$emit("appendCallback");
    },
    prependCallback() {
      this.$refs.input.focus();
      this.$emit("prependCallback");
    }
  },
  //组件
  components: {},
  watch: {
    value(newVal, oldVal) {
      if (!this.hasChinese) {
        this.currentValue = this.value.replace(/[\u4E00-\u9FA5]/g, "");
      }
      if (this.limit) {
        switch (this.limit) {
          case "number":
            this.currentValue = this.currentValue.replace(/[a-zA-Z]/g, "");
            break;
          case "pureNumber":
            this.currentValue = this.currentValue.replace(/[a-zA-Z.]/g, "");
            break;
          case "letter":
            this.currentValue = this.currentValue.replace(
              /[^\u4e00-\u9fa5a-zA-Z0-9]/g,
              ""
            );
            break;
          default:
            break;
        }
      }
      // 长度限制
      if (this.maxlength) {
        if (this.value.length > this.maxlength) {
          this.currentValue = this.value.slice(0, this.maxlength);
          this.$emit("input", this.value.slice(0, this.maxlength));
          return;
        }
      }
      this.currentValue = this.value.trim();
      this.$emit("input", this.value.trim());
    }
  }
  //销毁前
  //beforeDestroy:{
  //
  //}
};
</script>
<style lang="less" scoped>
.wlor-input {
  position: relative;
  display: flex;
  width: 100%;
  height: 45px;
  border: 1px solid #dddddd;
  color: #555;
  box-sizing: border-box;
  &.wlor-prepend {
    padding: 0px 5px;
    > .prepend-icon {
      height: 45px;
      line-height: 45px;
      vertical-align: middle;
      display: table-cell;
      text-align: center;

      > .icon {
        font-size: 20px;
      }
    }
  }

  &.wlor-append {
       padding: 0px 5px;
    > .append-icon {
      height: 45px;
      line-height: 45px;
      vertical-align: middle;
      display: table-cell;
      text-align: center;
      box-sizing: border-box;

      > .icon {
        font-size: 20px;
      }

      > span {
        display: block;
      }

      > i {
        display: block;
      }
    }
  }
  > .inner-input {
    position: relative;
    width: 100%;
    height: 45px;
    flex: 1;
    > .input {
      padding: 5px 10px;
      padding-right: 28px;
      height: 45px;
      border-radius: 0;
      border: none;
      font-size: 14px;
      background-color: transparent;
      position: relative;
      color: #555;
      width: 100%;
    }
    > .empty {
      position: absolute;
      right: 8px;
      top: 14px;
      width: 16px;
      height: 16px;
      background-size: 100%;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAu1JREFUWAntmD9rWzEUxZ9rk2LHdC6hi8FeYvBWyNisKQQ651t0LXRo6OpvkTkQyOw10NE4iwteSto5+A8NNu45RVeR75P0ZGM3HSIQepKu7vnpStZ7cpY9p3gESvHufO9gMNhbLpfHyKfIh8gHpVLpgJZ4vsMz8y3yFXKv3W4/5L2EW5KBAPJ6Pp9/hsgZhF+FXT72wPYetheVSuULwH499oSfCoGGw+HL2Wz2CY4/ws1+2FW0ZwK4brVa/dpqtX7HLKNAjMpisbgEzFHMSWofoG7K5fKHWLSCQP1+vwOQa+Q3qYIpdoD6AbuTTqfT99l7gUxkvm0bRgAIhUi99UXqhRhJyT1jlmmrkRH/LDlRalDLbedzDshs4K3sGS3m1gF1RC23jc8rS2Z+2t/R7v011Wq1DE44Q+3HW8fSZPhlZdPp1NuPxgmOhKa7dCsR4jkDoyBMs9nMGo1GRqGiRBvacgwnEkj7RtN2WyBEZw9OzmyPemBkxuNxVq/XC6EEhrYcw7GhRE1qS78FwjLwdRA8gblMo9GoEErDcExsiamJfOwDOpXGUFkEtS6M6MCv1XYjdCgGsTIEtSkMteDTaldEHI1/39hSj5UCxU0re4r2smeKlkn7drVthDDDZCA6FCjZ6JvC0JerbYHY8YTJHmwWCDO+WwdI7xmJVOo55WpB+6fULRAEkoE0DPdMypEgorp0tV2gW23oq/tguJ/0nlonUvBptV2gKx+A2xaCEZtNoeDXartAPXTci3NdFsGI/bpQ1ETuyXgLhDfuA5xdSIcu+dZO/WlrKI4NJWpSW/pXXtv/3ecHv0sQvq7Q6pLfNZx9aqJt5FuIB2LX/RaiX7tkIsKrCgxvpL6rkhrU0v5zQLw38aqCAbwd7CTRNzV8d7QcEAnM0r3fBZTxeaKXSma+sqmlUUpu8n99UfRGSIA4C6zzO8zqHG0Tad+g5FX6nL5CkRGf0QiJEUtzJDz9nw0ulAHb6d8xWu+5riPwB9Mv+62QtoXLAAAAAElFTkSuQmCC);
    }
  }
}
</style>
