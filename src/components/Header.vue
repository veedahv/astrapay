<template>
  <header class="header">
    <div class="flex header-container w-full">
      <div class="flex header-left">
        <button class="btn hamburger" @click="openAside">
          <font-awesome-icon icon="bars" class="icon" />
        </button>
        <h1 class="text-dark-green logo">PEERCOVER</h1>
      </div>
      <div class="flex header-right">
        <div class="notification-container p-1">
          <font-awesome-icon icon="bell" class="bell" />
          <span class="notification-value rounded-full flex"> 0 </span>
        </div>
        <div class="flex admin-container">
          <div class="dp flex rounded-full">
            <font-awesome-icon icon="user" />
          </div>
          <div class="">
            <span class="block user-role font-light text-xs text-dark-lighter">
              Hi, {{ auth.user.firstname }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { mapState } from "vuex";
// import get
export default {
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    openAside() {
      this.$emit("openAside");
    },
  },
};
</script>

<style scoped>
.header {
  background: #fff;
}
.flex {
  align-items: center;
}
.header-left {
  gap: 20px;
}
.hamburger {
  background: transparent;
  color: #551010;
  font-size: 20px;
}
.logo {
  font-size: 24px;
  font-weight: 600;
}
.header-container {
  justify-content: space-between;
  padding: 10px;
}
.notification-container {
  position: relative;
}
.bell {
  color: #808080;
}
.notification-value {
  justify-content: center;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(-50%, -50%);
  background: #ff0000;
  color: #ffffff;
  width: 12px;
  height: 12px;
  font-size: 10px;
}
.header-right {
  gap: 10px;
}
.admin-container {
  gap: 5px;
}
.dp {
  width: 30px;
  height: 30px;
  justify-content: center;
  background: #c7c5c5;
}
</style>