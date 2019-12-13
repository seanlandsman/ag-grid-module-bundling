import Vue from "vue";
import App from './App.vue';

import {LicenseManager} from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("your license key");

new Vue({
    render: h => h(App)
}).$mount('#app');
