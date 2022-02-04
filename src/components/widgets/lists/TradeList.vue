<script>
import { defineComponent, ref } from "vue";
import ApiService from "@/core/services/ApiService";
import ticket from "@/components/widgets/ticket/ticket.vue";

// import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "TradeList",
  inject: ["moment"],
  components: {
    ticket,
  },
  props: {
    widgetClasses: String,
    list: Array,
  },
  setup() {
    const cloudinaryName = ref(process.env.VUE_APP_CLOUDINARY_NAME);
    const loading = ref(true);
    const colors = {
      buyOrderPlaced: "text-primary",
      buyOrderPartiallyFilled: "text-success",
      buyOrderFilled: "text-success",

      profitSellOrderPlaced: "text-primary",
      profitSellOrderPartiallyFilled: "text-success",
      profitSellOrderFilled: "text-success",

      stopSellOrderPlaced: "text-warning",
      stopSellOrderPartiallyFilled: "text-danger",
      stopSellOrderFilled: "text-danger",

      profitSellOrderCanceled: "text-gray-500",
      stopSellOrderCanceled: "text-gray-500",

      error: "text-danger",
    };
    const getActivityIconColorAndSizeObj = (activity) => {
      let obj = {};
      obj[colors[activity.type]] = true;
      obj["fa"] = true;
      obj["far"] = true;
      obj["fas"] = true;
      obj["fa-genderless"] = true;
      obj["fs-1"] = true;

      if (activity.type === "profitSellOrderPartiallyFilled") {
        obj["fas-plus-circle"] = true;
        obj["fa-genderless"] = false;
      }
      if (activity.type === "profitSellOrderFilled") {
        obj["fa-check-circle"] = true;
        obj["fa-genderless"] = false;
      }
      if (activity.type === "stopSellOrderPartiallyFilled") {
        obj["fa-minus-circle"] = true;
        obj["fa-genderless"] = false;
      }
      if (activity.type === "stopSellOrderFilled") {
        obj["fa-times-circle"] = true;
        obj["fa-genderless"] = false;
      }
      if (activity.helpDeskRequestUrl) {
        obj["fa-exclamation"] = true;
        obj["fa-genderless"] = false;
      }

      return obj;
    };

    return {
      getActivityIconColorAndSizeObj,
      cloudinaryName,
    };
  },
});
</script>

<template>
  <!--begin::Body-->
  <div class="card-body pt-5">
    <!--begin::Accordion-->
    <p v-if="!list.length">No trades.</p>
    <div v-else class="accordion" id="kt_accordion_1">
      <div class="accordion-item" v-for="(item, index) in list" :key="item.id">
        <div class="overflow-auto">
          <h2
            style="min-width: 1200px"
            class="accordion-header d-flex"
            :id="`kt_accordion_1_header_${item.id}`"
          >
            <button
              class="accordion-button fs-4 fw-bold"
              :class="{ collapsed: index != 0 }"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#kt_accordion_1_body_${item.id}`"
              :aria-expanded="index == 0"
              :aria-controls="`kt_accordion_1_header_${item.id}`"
            >
              <!-- Accordion Item #{{ item.id }} -->

              <!--begin::Item-->
              <div
                style="width: 200px"
                class="d-flex align-items-center col-xxl-3"
              >
                <!--begin::Avatar-->
                <router-link
                  :to="`/profile/${item.user.userName}/overview`"
                  class="text-dark fw-bolder text-hover-primary fs-6"
                >
                  <div class="symbol symbol-50px me-5">
                    <img
                      :src="
                        item.user.profilePhoto
                          ? `https://res.cloudinary.com/${cloudinaryName}/image/upload/w_300,h_300,c_fill,g_custom/${item.user.profilePhoto}.jpg`
                          : `media/avatars/blank.png`
                      "
                      alt=""
                    />
                  </div>
                </router-link>
                <!--end::Avatar-->

                <!--begin::Text-->
                <div class="">
                  <router-link
                    :to="`/profile/${item.user.userName}/overview`"
                    class="text-gray-700 fw-bolder text-hover-primary fs-6"
                  >
                    <div class="">
                      {{
                        item.user.userName.length > 12
                          ? `${item.user.userName.substring(0, 12)}...`
                          : item.user.userName
                      }}
                    </div>
                  </router-link>

                  <span class="text-muted d-block fw-bold">{{
                    item.description
                  }}</span>
                </div>
                <!--end::Text-->
              </div>
              <div class="text-gray-700 w-150px fs-6">
                {{ item.symbol.split("BTC")[0] }}_BTC
              </div>
              <div class="text-gray-700 w-150px fs-6">{{ item.buyPrice }}</div>
              <div class="text-gray-700 w-150px fs-6">
                {{ item.profitPrice }}
              </div>
              <div class="text-gray-700 w-150px fs-6">
                {{ item.stopLossPrice }}
              </div>
              <div class="text-gray-700 w-150px fs-6">
                {{ moment(item.createTime).format("YYYY-MM-DD HH:mm:ss") }}
              </div>
              <div class="w-250px d-flex align-items-center">
                <div class="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    :style="`width: ${item.status.profit}%`"
                    :aria-valuenow="item.status.profit"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="`width: ${item.status.stopLoss}%`"
                    :aria-valuenow="item.status.stopLoss"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-gray-700 fs-7 mb-0 ms-4">
                  %{{
                    (item.status.profit + item.status.stopLoss)
                      .toFixed(2)
                      .replace(/\.00$/, "")
                  }}
                </p>
              </div>

              <!--end::Item-->
            </button>
          </h2>
        </div>
        <div
          :id="`kt_accordion_1_body_${item.id}`"
          class="accordion-collapse collapse"
          :class="{ show: index == 0 }"
          :aria-labelledby="`kt_accordion_1_header_${item.id}`"
          :data-bs-parent="`#kt_accordion_1`"
        >
          <div class="accordion-body">
            <!--begin::Timeline-->
            <div class="timeline-label">
              <!--begin::Item-->
              <div
                class="timeline-item"
                v-for="activity in item.activities"
                :key="activity.id"
              >
                <div class="timeline-label fw-bolder text-gray-400 fs-6">
                  {{ moment(activity.createTime).format("HH:mm") }}
                </div>

                <div class="timeline-badge">
                  <!-- class="fa fa-genderless text-warning fs-1" -->
                  <i :class="getActivityIconColorAndSizeObj(activity)"></i>
                </div>

                <div class="fw-normal timeline-content text-muted ps-3">
                  <span
                    v-if="!activity.helpDeskRequestUrl"
                    className="activity text-gray-700 fw-bolder"
                  >
                    {{ activity.title }}
                  </span>
                  <span
                    v-if="!activity.helpDeskRequestUrl"
                    className="amountSymbol text-primary"
                  >
                    {{ activity.symbol.split("BTC")[0] }}
                    <strong>{{ activity.qty }}</strong>
                  </span>
                  <span class="text-gray-700" v-else>
                    We encountered an error while processing your copy trade. We
                    created a <strong>ticket below</strong>
                    to solve the problem together.
                  </span>
                  <span
                    v-if="!activity.helpDeskRequestUrl"
                    className="createDate text-gray-600"
                  >
                    {{
                      moment(activity.createTime).format("YYYY-MM-DD HH:mm:ss")
                    }}
                  </span>
                </div>
              </div>

              <!--end::Item-->
            </div>
            <ticket />
            <!--end::Timeline-->
          </div>
        </div>
      </div>
    </div>
    <!--end::Accordion-->
  </div>
  <!--end: Card Body-->
</template>

<style lang="scss" scoped>
.accordion-button {
  padding: 0.75rem 1.5rem;
}
.progress {
  background-color: #ddd;
  height: 0.6rem;
  width: 150px;
}
.timeline-content {
  span {
    margin-left: 10px;
    display: inline-block;

    &.activity {
      width: 200px;
    }
    &.amountSymbol {
      width: 120px;
    }
    &.createDate {
      width: 200px;
    }
  }
}
</style>
