<template>
  <DashboardLayout>
    <div class="container">
      <div class="alert" v-if="message">
        <p class="text-dark-green">
          {{ message }}
        </p>
      </div>
      <h1 class="text-dark-green title">Marketing Consultant</h1>
      <div class="form-container w-full">
        <form class="" @submit.prevent="createNewMarketer()">
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="firstname" class="label">Firstname</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="firstname"
                id="firstname"
                class="w-full input"
                v-model="newMarketer.firstname"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="lastname" class="label">Lastname</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="lastname"
                id="lastname"
                class="w-full input"
                v-model="newMarketer.lastname"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="username" class="label">Username</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="username"
                id="username"
                class="w-full input"
                v-model="newMarketer.username"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="phone-no" class="label">Phone No</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="phone number"
                id="phone-no"
                class="w-full input"
                v-model="newMarketer.phonenumber"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="email" class="label">Email</label>
            </div>
            <div class="w-2_3">
              <input
                type="email"
                name="email"
                id="email"
                class="w-full input"
                v-model="newMarketer.email"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="gender" class="label">Gender</label>
            </div>
            <div class="w-2_3">
              <select
                name="gender"
                id="gender"
                class="w-full input"
                v-model="newMarketer.gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="address" class="label">Address</label>
            </div>
            <div class="w-2_3">
              <textarea
                name="address"
                id="address"
                rows="10"
                class="w-full input"
                v-model="newMarketer.address"
              ></textarea>
            </div>
          </div>
          <div class="input-group flex" v-if="err">
            <div class="w-1_3"></div>
            <div class="w-2_3">
              <small class="err"> All fields are required </small>
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3"></div>
            <div class="w-2_3">
              <button class="bg-dark-green w-full btn">CREATE MARKETER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import MarkerterService from "../../services/marketers.service";
import DashboardLayout from "../../layouts/DashboardLayout";
export default {
  components: { DashboardLayout },
  data() {
    return {
      newMarketer: {
        addedBy: "admin",
        firstname: "",
        lastname: "",
        username: "",
        phonenumber: "",
        email: "",
        gender: "",
        address: "",
      },
      message: null,
      errMssg: null,
      err: false,
    };
  },
  methods: {
    createNewMarketer() {
      this.contentLoading = true;

      console.log(this.newMarketer);
      if (
        this.newMarketer.firstname === "" ||
        this.newMarketer.lastname === "" ||
        this.newMarketer.username === "" ||
        this.newMarketer.phonenumber === "" ||
        this.newMarketer.email === "" ||
        this.newMarketer.gender === "" ||
        this.newMarketer.address === ""
      ) {
        this.err = true;
        return;
      } else {
        this.err = false;
      }

      MarkerterService.createMarketer(this.newMarketer).then(
        (response) => {
          this.message = response.data.message;
          this.newMarketer = {
            addedBy: "admin",
            firstname: "",
            lastname: "",
            username: "",
            phonenumber: "",
            email: "",
            gender: "",
            address: "",
          };
          setInterval(() => {
            this.message = null;
          }, 3000);
        },
        (error) => {
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
    if (!this.$store.state.auth.status.loggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
.title {
  font-weight: 500;
  font-size: 34px;
  margin-bottom: 50px;
}
.w-1_3 {
  width: 33%;
  flex: 1 1 auto;
}
.w-2_3 {
  width: 66%;
  flex: 1 1 auto;
}
.form-container {
  max-width: 600px;
}
.input-group {
  margin: 20px 0;
}
.label {
  padding: 10px 0;
  display: inline-block;
}
.input {
  border: none;
  padding: 15px 25px;
  background: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  outline: none;
}
.btn {
  padding: 15px 25px;
  margin: 20px 0;
  font-size: 18px;
  border-radius: 5px;
}
@media (max-width: 576px) {
  .input-group {
    flex-direction: column;
    gap: 5px;
  }
  .w-1_3 {
    width: 100%;
    flex: none;
  }
  .w-2_3 {
    width: 100%;
    flex: none;
  }
}
</style>