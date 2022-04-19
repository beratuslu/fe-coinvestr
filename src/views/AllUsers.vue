<script>
import { defineComponent, onMounted } from "vue";
import AllUsersList from "@/components/widgets/lists/AllUsersList.vue";

import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default {
  name: "dashboard",
  components: {
    // ListWidget6,
    AllUsersList,
    // ListWidget1,
    // TableWidget5,
    // ListWidget5,
    // MixedWidget2,
    // MixedWidget5,
    // MixedWidget7,
    // MixedWidget10,
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
};
</script>

<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-12">
      <AllUsersList widget-classes="card-xl-stretch mb-xl-8"></AllUsersList>
    </div>
  </div>

  <!--end::Dashboard-->
</template>