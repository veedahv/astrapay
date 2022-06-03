<template>
  <div class="min-h-screen body-container bg-light-green">
    <aside class="aside bg-white w-1/5" v-if="showAside">
      <div class="py-5">
        <SideBar @closeAside="showAside = false"></SideBar>
      </div>
    </aside>
    <div class="w-4/5 px-4 py-5 body-container">
      <Header @openAside="showAside = true"></Header>
      <main class="main mt-5 h-full bg-light-green">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import SideBar from "../components/SideBar";
export default {
  components: {
    Header,
    SideBar,
  },
  data() {
    return {
      showAside: false,
    };
  },
};
</script>

<style>
.body-container {
  position: relative;
}
.min-h-screen {
  min-height: 100vh;
}
.aside {
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: #fff;
}
</style>