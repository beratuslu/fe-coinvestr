<script>
import { defineComponent, ref, watch } from "vue";
// import KTActivityItem1 from "@/layout/header/partials/activity-timeline/Item1.vue";
// import KTActivityItem2 from "@/layout/header/partials/activity-timeline/Item2.vue";
// import KTActivityItem3 from "@/layout/header/partials/activity-timeline/Item3.vue";
// import KTActivityItem4 from "@/layout/header/partials/activity-timeline/Item4.vue";
// import KTActivityItem5 from "@/layout/header/partials/activity-timeline/Item5.vue";
// import KTActivityItem6 from "@/layout/header/partials/activity-timeline/Item6.vue";
// import KTActivityItem7 from "@/layout/header/partials/activity-timeline/Item7.vue";
// import KTActivityItem8 from "@/layout/header/partials/activity-timeline/Item8.vue";
import TradeList from "@/components/widgets/lists/TradeList.vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Trades",
  components: {
    // TradeList,
    // KTActivityItem1,
    // KTActivityItem2,
    // KTActivityItem3,
    // KTActivityItem4,
    // KTActivityItem5,
    // KTActivityItem6,
    // KTActivityItem7,
    // KTActivityItem8,
  },
  setup() {
    const route = useRoute();
    const activeTab = ref(route.name);

    watch(
      () => route.path,
      (prev, current) => {
        activeTab.value = route.name;
      }
    );
    return {
      activeTab,
    };
  },
});
</script>

<template>
  <!--begin::Timeline-->
  <div class="card">
    <!--begin::Card head-->
    <div class="card-header card-header-stretch">
      <!--begin::Title-->
      <!-- <div class="card-title d-flex align-items-center">
        <span class="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
          <inline-svg src="media/icons/duotune/general/gen014.svg" />
        </span>

        <h3 class="fw-bolder m-0 text-gray-800">Jan 23, 2021</h3>
      </div> -->
      <!--end::Title-->

      <!--begin::Toolbar-->
      <div class="card-toolbar m-0">
        <!--begin::Tab nav-->
        <ul
          class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <router-link
              class="nav-link justify-content-center text-active-gray-800"
              :to="`/profile/beratuslu/trades/my-trades`"
              :class="{ active: activeTab == 'myTrades' }"
            >
              My Trades
            </router-link>
          </li>
          <li class="nav-item" role="presentation">
            <router-link
              class="nav-link justify-content-center text-active-gray-800"
              :to="`/profile/beratuslu/trades/copied-trades`"
              :class="{ active: activeTab == 'copiedTrades' }"
            >
              Copied Trades
            </router-link>
          </li>
        </ul>
        <!--end::Tab nav-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Card head-->

    <!--begin::Card body-->
    <router-view></router-view>
    <!--end::Card body-->
  </div>
</template>
