<template>
  <DashboardLayout>
    <div class="container">
      <div class="alert" v-if="message">
        <p class="text-dark-green">
          {{ message }}
        </p>
      </div>
      <h1 class="text-dark-green title">Marketing Consultants</h1>
      <router-link
        :to="{ name: 'NewMarketer' }"
        class="bg-dark-green add_marketer-btn flex rounded-full"
      >
        <span class="">
          <font-awesome-icon icon="plus" />
        </span>
        <span class="">Add New Marketing Consultant</span>
      </router-link>
      <div class="content-container">
        <div class="flex w-full search-container">
          <label aria-label="Search for a marketer" class="w-full">
            <input type="text" placeholder="Search" class="input" />
          </label>
          <button class="btn" aria-label="Search for a marketer">
            <font-awesome-icon icon="magnifying-glass" />
          </button>
        </div>
        <div class="table-container">
              <table
               v-if="contentLoading"
                class="w-full table"
              >
                <thead class="thead">
                  <tr>
                  <th colspan="100%">
                         <div class="skeleton-loading table-content"></div>
                  </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="n in perPage"
                    :key="n"
                  >
                  <td colspan="100%">
                         <div class="skeleton-loading table-content"></div>
                  </td>
                  </tr>
                </tbody>
              </table>
          <table class="table w-full" v-else>
            <thead>
              <tr>
                <th class="th">Name</th>
                <th class="th">Email</th>
                <th class="th">Phone No</th>
                <th class="th">Username</th>
                <th class="th">&nbsp;</th>
                <th class="th">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="marketer in visibleMarketers"
                :key="marketer.marketing_consultant_id"
              >
                <td class="td">{{ marketer.firstname + marketer.lastname }}</td>
                <td class="td">{{ marketer.email }}</td>
                <td class="td">{{ marketer.phonenumber }}</td>
                <td class="td">{{ marketer.username }}</td>
                <td class="td">
                  <button
                    class="btn del-btn"
                    aria-label="Delete a marketer"
                    @click="delMarketer(marketer.username)"
                  >
                    <font-awesome-icon icon="trash-can" />
                  </button>
                </td>
                <td class="td">
                  <router-link
                    aria-label="View marketer detail"
                    :to="{
                      name: 'MarketerDetail',
                      params: { id: marketer.marketing_consultant_id },
                    }"
                  >
                    <font-awesome-icon icon="angle-right" class="angle-icon" />
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex pagination-container w-full">
          <label for="no-of-rows" class="">Rows per page:</label>
          <select
            name="selectRows"
            id="no-of-rows"
            class="select-rows"
            v-model="perPage"
            @change="getVisibleMarketers()"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <span class="">
            {{ currentPage * perPage + 1 }}-{{ pageMarketersEnd }}of{{
              availableMarketers.length
            }}
          </span>
          <button
            class="btn"
            :disabled="currentPage <= 0"
            @click="updatePage(currentPage - 1)"
            aria-label="go to previous page"
          >
            <font-awesome-icon
              icon="angle-left"
              :class="currentPage <= 0 ? 'text-gray-200' : ''"
            />
          </button>
          <button
            class="btn"
            aria-label="go to next page"
            :disabled="currentPage >= totalPages - 1"
            @click="updatePage(currentPage + 1)"
          >
            <font-awesome-icon
              icon="angle-right"
              :class="currentPage >= totalPages - 1 ? 'text-gray-200' : ''"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>




<script>
import MarketerService from "../../services/marketers.service";
import DashboardLayout from "../../layouts/DashboardLayout";
export default {
  components: { DashboardLayout },
  data() {
    return {
      allMarketers: [],
      availableMarketers: [],
      visibleMarketers: [],
      currentPage: 0,
      perPage: 10,
      contentLoading: false,
      message: null,
      errMssg: null,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allMarketers.length / this.perPage);
    },
    pageMarketersEnd() {
      return this.allMarketers.length >
        parseInt(this.currentPage * this.perPage) + parseInt(this.perPage)
        ? parseInt(this.currentPage * this.perPage) + parseInt(this.perPage)
        : this.allMarketers.length;
    },
  },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.getAllMarketers();
    },
    showPrevPage() {
      return this.currentPage <= 0 ? false : true;
    },
    showNextPage() {
      return this.currentPage >= this.totalPages - 1 ? false : true;
    },
    getAllMarketers() {
      this.contentLoading = true;
      MarketerService.getAllMarketers().then(
        (response) => {
          this.allMarketers = response.data.marketers;
          this.availableMarketers = this.allMarketers;
          this.getVisibleMarketers();
          this.contentLoading = false;
        },
        (error) => {
          this.errMssg =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.contentLoading = false;
        }
      );
    },
    delMarketer(username) {
      MarketerService.delMarketer(username).then(
        (response) => {
          this.message = response.data.message;
          this.getAllMarketers();
          setInterval(() => {
            this.message = null;
          }, 3000);
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
    getVisibleMarketers() {
      let startPoint = this.currentPage * this.perPage;
      let endPoint = parseInt(startPoint) + parseInt(this.perPage);
      this.visibleMarketers = this.availableMarketers.slice(
        startPoint,
        endPoint
      );
    },
  },
  created() {
    this.getAllMarketers();
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
.add_marketer-btn {
  padding: 15px 25px;
  gap: 5px;
  text-decoration: none;
  align-items: center;
  margin-left: auto;
  width: max-content;
}
.content-container {
  background: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 30px 0;
  padding: 10px;
}
.search-container {
  border-bottom: 1px solid #000000;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  max-width: 500px;
  margin-left: auto;
}
.input {
  width: 100%;
  border: none;
  padding: 15px 0;
  background: transparent;
  font-size: 18px;
  outline: none;
}
.table-container {
  max-width: 100%;
  overflow: auto;
  margin: 15px 0;
}
.skeleton-loading {
  position: relative;
  background-color: #f5f5f5;
  overflow: hidden;
}
.skeleton-loading::after {
  display: block;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  animation: 2s loading linear 0.5s infinite;
  background: linear-gradient(90deg, transparent, #ededed, transparent);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transform: translateX(-100%);
  z-index: 1;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.table-content.skeleton-loading {
  padding: 8px;
  height: 0.8rem;
  margin: 0.8rem 0;
  border-radius: 3px;
  width: 100%;
}
.table {
  min-width: 700px;
  border-collapse: collapse;
  text-align: left;
}
.td,
.th {
  padding: 15px 5px;
  border-bottom: 1px solid #000000;
  min-width: max-content;
  padding-right: 20px;
}
.btn {
  background: transparent;
  padding: 0 3px;
  margin: 0;
  font-size: 18px;
  border-radius: 5px;
}
.del-btn {
  color: #ff0000;
}
.angle-icon {
  color: #551010;
}
.pagination-container {
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  gap: 15px;
}
.select-rows {
  border: none;
  border-bottom: 1px solid #000000;
}
.no-of-rows {
    font-weight: 500;
}
</style>