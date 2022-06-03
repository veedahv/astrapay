<template>
  <div class="h-full bg-white aside">
          <button class="close-btn" @click="closeAside">
            <font-awesome-icon icon="xmark" class="icon" />
          </button>
    <div class="">
      <a href="" class="logo flex text-dark-green"> PC </a>
      <ul class="mt-8">
        <li class="">
          <div class="flex dashboard_label">
            <font-awesome-icon icon="table-cells-large" class="icon" />
            <span class="capitalize text-md font-normal">DASHBOARD</span>
          </div>
        </li>
        <li class="pl-3">
          <a
            @click.prevent="logout"
            class="pointer"
          >
            <span class="flex logout dashboard_label pointer">
              <font-awesome-icon icon="right-from-bracket" class="icon" />
              <span class="capitalize text-md font-normal">LOGOUT</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    closeAside() {
      this.$emit('closeAside');
    },
    logout() {
      this.$store.dispatch("auth/logout").then(
        () => {
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>


<style scoped>
.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    font-size: 20px;
}
.aside {
    position: relative;
  padding: 10px 30px;
}
.logo {
  font-size: 60px;
  font-weight: 600;
  margin: 20px auto;
  justify-content: center;
  width: max-content;
}
.dashboard_label {
  gap: 20px;
  color: #555151;
  margin: 15px 0;
}
.icon {
  color: #551010;
}
</style>
