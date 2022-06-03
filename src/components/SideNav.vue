<template>
    <div class="h-full bg-white">
        <div class="">
            <a href="" class="logo">
                <div class="flex items-center gap-4 px-4">
                    <!-- <img src="@/assets/icons/logo.svg" alt="" class="logo w-9"> -->
                    <span class="text-2xl font-medium text-dark-lighter">GSC Admin</span>
                </div>
            </a>
            <ul class="mt-8">
                <li class="pl-3">
                    <!-- <router-link :to="{ name: 'Overview'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl"> -->
                        <div class="flex w-full items-center gap-3 px-4">
                            <!-- <img src="@/assets/icons/account_balance.svg" alt="" class="w-6 nav-img"> -->
                            <!-- <img src="@/assets/icons/account_balance-active.svg" alt="" class="w-6 nav-img-active hidden"> -->
                            <span class="capitalize text-md font-normal">Dashboard</span>
                        </div>
                    <!-- </router-link> -->
                </li>
                <!-- <li class="pl-3">
                    <router-link :to="{ name: 'Overview'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 px-4">
                            <img src="@/assets/icons/account_balance.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/account_balance-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">Overview</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3">
                    <router-link :to="{ name: 'Savings'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 pl-4">
                            <img src="@/assets/icons/view_day.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/view_day-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">Savings</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3">
                    <router-link :to="{ name: 'ManageLoans'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 pl-4">
                            <img src="@/assets/icons/backup_table.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/backup_table-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">Manage Loans</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3">
                    <router-link :to="{ name: 'ManageUsers'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 pl-4">
                            <img src="@/assets/icons/User_box.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/User_box-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">Manage Users</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3">
                    <router-link :to="{ name: 'ManageArticles'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 pl-4">
                            <img src="@/assets/icons/orders.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/orders-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">Manage Articles</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3">
                    <router-link :to="{ name: 'Transactions'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 pl-4">
                            <img src="@/assets/icons/orders.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/orders-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">transactions</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3">
                    <router-link :to="{ name: 'Settings'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-3 pl-4">
                            <img src="@/assets/icons/settings.svg" alt="" class="w-6 nav-img">
                            <img src="@/assets/icons/settings-active.svg" alt="" class="w-6 nav-img-active hidden">
                            <span class="capitalize text-md font-normal">settings</span>
                        </div>
                    </router-link>
                </li>
                <li class="pl-3"> -->
                    <!-- <router-link :to="{ name: 'AdminLogin'}" class="nav-links block text-dark-lighter py-5 rounded-l-xl">
                        <div class="flex w-full items-center gap-4 px-4">
                            <img src="@/assets/icons/Logout.svg" alt="" class="">
                            <img src="@/assets/icons/Logout-active.svg" alt="" class="hidden">
                            <span class="capitalize text-md font-normal">logout</span>
                        </div>
                    </router-link> -->
                    <!-- <a @click.prevent="logout" class="nav-links block text-dark-lighter py-5 rounded-l-xl cursor-pointer">
                        <div class="flex w-full items-center gap-4 px-4">
                            <img src="@/assets/icons/Logout.svg" alt="" class="">
                            <img src="@/assets/icons/Logout-active.svg" alt="" class="hidden">
                            <span class="capitalize text-md font-normal">logout</span>
                        </div>
                    </a> -->
                <!-- </li> -->
            </ul>
        </div>
    </div>
</template>


<script>
export default {
//   data() {
//     return {
//       email: '',
//       password: ''
//     }
//   },
//   methods: {
//     logout() {
      
//                     // this.$store.dispatch('authCtrlLogOutUser')  
//          this.$store.dispatch("auth/logout").then(
//          () => {
//             //    this.$router.push({ name: 'AdminLogin' });
//              // this.$router.push("/profile");\
//          },
//          (error) => {
//            this.loading = false;
//            this.message =
//              (error.response &&
//                error.response.data &&
//                error.response.data.message) ||
//              error.message ||
//              error.toString();
//          }
//        );
//     //   this.$router.push({ name: 'AdminLogin' });
//     },
//      onSubmit() {
//         this.loading = true;
//       // this.$store.dispatch("auth/login", user).then(
//     },
//   },
}
</script>


<style scoped>

* {
  /* font-family: 'DM Sans', sans-serif; */
  font-family: 'Inter', sans-serif;
}

a.nav-links {
  /* font-weight: bold; */
  /* color: #2c3e50; */
  border: none;
  border-left: 12px solid transparent;
  /* border-left-width: 15px; */
}

a.nav-links.router-link-exact-active {
  /* color: #42b983; */
  border-left-color: var(--secondary);
  background-color: var(--light);
  color: var(--secondary);
}
a.nav-links.router-link-exact-active .nav-img-active {
    display: inline-block;
}
a.nav-links.router-link-exact-active .nav-img {
    display: none;
}
a.nav-links.router-link-active {
  /* color: #42b983; */
  border-left-color: var(--secondary);
  background-color: var(--light);
  color: var(--secondary);
}
a.nav-links.router-link-active .nav-img-active {
    display: inline-block;
}
a.nav-links.router-link-active .nav-img {
    display: none;
}
</style>
