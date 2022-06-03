<template>
  <main class="">
    <div class="flex login-container">
      <div class="bg-dark-green text-white content-container flex">
        <div class="content">
          <h1 class="logo">PEERCOVER</h1>
          <h2 class="title">
            Car <br />
            Insurance
          </h2>
          <div class="price-container">
            <p class="">Prices from</p>
            <p class="amount">N10,000</p>
          </div>
        </div>
      </div>
      <div class="form-container">
        <form class="login-form" @submit.prevent="onSubmit()">
          <h2 class="text-dark-green form-title">WELCOME BACK</h2>
          <p class="form-text">Input your details to proceed</p>
          <label for="username" aria-label="username">
            <input
              type="text"
              id="username"
              class="input w-full"
              placeholder="Username"
              v-model="username"
            />
          </label>
          <label for="password" aria-label="password">
            <input
              type="password"
              id="password"
              class="input w-full"
              placeholder="Password"
              v-model="password"
            />
          </label>
          <a href="" class="text-dark-green forgot_password">
            Forgot password?
          </a>
          <button class="bg-dark-green w-full btn" :disabled="loading">
            {{ loading ? "Loading..." : "Log In" }}
          </button>
          <small class="err" v-if="errMssg">
            {{ errMssg }}
          </small>
        </form>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      message: "",
      errMssg: null,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.$store
        .dispatch("auth/login", {
          username: this.username,
          password: this.password,
        })
        .then(
          () => {
            this.errMssg = null;
          },
          (error) => {
            this.loading = false;
            this.errMssg =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
    },
  },
  beforeMount() {
    if (this.$store.state.auth.status.loggedIn) {
      this.$router.push({ name: "AllMarketers" });
    }
  },
};
</script>

<style scoped>
.err {
    color: #ff0000;
}
.login-container {
  min-height: 100vh;
  flex-direction: column;
}
.login-container > * {
  flex: 1 1 0;
}
.form-container {
  padding: 30px;
}
.content-container {
  padding: 30px;
  align-items: center;
  justify-content: flex-start;
}
.logo {
  margin-bottom: 25px;
  font-size: 24px;
}
.title {
  font-size: 24px;
}
.price-container {
  font-size: 20px;
  margin-top: 35px;
}
.form-title {
  text-align: center;
}
.form-text {
  color: #3b3939;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
}
.amount {
  font-size: 34px;
}
.input {
  padding: 15px 25px;
  margin: 20px 0;
  border: 2px solid #333333;
  font-size: 18px;
  border-radius: 5px;
}
.forgot_password {
  text-align: right;
  display: block;
}
.btn {
  padding: 15px 25px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 5px;
}
@media (min-width: 768px) {
  .login-container {
    flex-direction: row;
  }
  .form-container {
    padding: 100px 60px;
  }
  .content-container {
    padding: 60px;
  }
}
@media (min-width: 768px) {
  .form-container {
    padding: 140px 90px;
  }
  .content-container {
    padding: 90px;
  }
}
</style>