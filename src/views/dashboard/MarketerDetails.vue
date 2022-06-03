<template>
  <DashboardLayout>
    <div class="container">
      <div class="alert" v-if="message">
        <p class="text-dark-green">
          {{ message }}
        </p>
      </div>
      <h1 class="text-dark-green title">View Marketing Consultant</h1>
      <div class="flex bg-dark-green rounded-full initials">
        <p class="">
          {{ marketer.firstname ? marketer.firstname.charAt(0) : "" }}.{{
            marketer.lastname ? marketer.lastname.charAt(0) : ""
          }}
        </p>
      </div>
      <div class="tab">PROFILE</div>
      <div class="form-container w-full">
        <form class="" @submit.prevent="updateMarketer">
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="name" class="label">Name</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="name"
                id="name"
                class="w-full input"
                v-model="marketer.name"
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
                v-model="marketer.username"
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
                v-model="marketer.email"
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
                v-model="marketer.phonenumber"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="account-name" class="label">Account Name</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="phone number"
                id="account-name"
                class="w-full input"
                v-model="marketer.account_name"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="account-number" class="label">Account Number</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="account number"
                id="account-number"
                class="w-full input"
                v-model="marketer.account_number"
              />
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3">
              <label for="bank-name" class="label">Bank Name</label>
            </div>
            <div class="w-2_3">
              <input
                type="text"
                name="bank name"
                id="bank-name"
                class="w-full input"
                v-model="marketer.bankname"
              />
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
                v-model="marketer.address"
              ></textarea>
            </div>
          </div>
          <div class="input-group flex">
            <div class="w-1_3"></div>
            <div class="w-2_3">
              <button class="bg-dark-green w-full btn">UPDATE MARKETER</button>
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
      marketer: {},
      contentLoading: true,
      message: null,
      errMssg: null,
    };
  },
  methods: {
    getMarketerDetails() {
      this.contentLoading = true;
      MarkerterService.getMarketer(this.$route.params.id).then(
        (response) => {
          this.marketer = response.data.marketer[0];
          this.contentLoading = false;
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    updateMarketer() {
      this.contentLoading = true;
      let update = {
        firstname: this.marketer.firstname,
        lastname: this.marketer.lastname,
        phonenumber: this.marketer.phonenumber,
        email: this.marketer.email,
        gender: this.marketer.gender,
        address: this.marketer.address,
        marketingConsultantId: this.marketer.marketing_consultant_id,
        bankname: this.marketer.bankname,
        bankcode: '001',
        accountNumber: this.marketer.account_number,
        accountName: this.marketer.account_name,
      };
      MarkerterService.updateMarketer(update).then(
        (response) => {
          this.message = response.data.message;
          this.contentLoading = false;
          setInterval(() => {
            this.message = null;
          }, 3000);
        },
        (error) => {
          console.log(error);
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
  created() {
    this.getMarketerDetails();
    console.log(this.$route.params.id);
  },
  beforeMount() {
    if (!this.$store.state.auth.status.loggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
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
.tab {
  border-bottom: 2px solid #ff0000;
  padding: 5px 10px;
  display: inline-block;
}
.form-container {
  max-width: 600px;
  margin: 0 auto;
}
.initials {
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin: auto;
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