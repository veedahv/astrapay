import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faTrashCan);
library.add(faBars);
library.add(faBell);
library.add(faTableCellsLarge);
library.add(faPlus);
library.add(faUser);
library.add(faXmark);
library.add(faMagnifyingGlass);
library.add(faRightFromBracket);
library.add(faPhone);

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app');
