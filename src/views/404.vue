<template>
  <DashboardLayout>
    <div class="err-container flex">
      <div class="">
        <h2 class="title">404</h2>
        <p class="text">Page not found</p>
        <router-link :to="{ name: 'AllMarketers' }" class="go-home">
          Go to home
        </router-link>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../layouts/DashboardLayout";
export default {
  components: { DashboardLayout },
  beforeMount() {
    if (!this.$store.state.auth.status.loggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.err-container {
  min-height: 70vh;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title {
  font-size: 90px;
    margin-bottom: 15px;
}
.text {
    font-size: 28px;
    margin-bottom: 5px;
}
.go-home {
    font-size: 20px;
  text-decoration: underline;
  color: #1c1cb3;
}
</style>