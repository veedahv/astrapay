<template>
  <router-view/>
</template>

<script>
export default {
  beforeMount() {
    if (!this.$store.state.auth.status.loggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  display: inline-block;
}
ul {
  list-style: none;
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
.rounded-full {
  border-radius: 9999px;
}
.flex {
  display: flex;
}
.text-white {
  color: #FFFFFF;
}
.bg-dark-green {
  background: #187018;
  color: #FFFFFF;
}
.bg-light-green {
  background: #ECFFEB;
}
.text-dark-green {
  color: #187018;
}
.text-light-green {
  color: #ECFFEB;
}
input,
select,
button {
  border: none;
  outline: none;
}
select,
a,
.pointer,
button {
  cursor: pointer;
}
.container {
  padding: 10px 40px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.alert {
    background: #ffffff;
    padding: 20px;
    max-width: 400px;
    width: 100%;
    text-align: center;
    position: fixed;
    top: 80px;
    right: 0px;
}
</style>
