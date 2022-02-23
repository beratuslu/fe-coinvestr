<script>
import { defineComponent, ref, computed } from "vue";
import TicketDropdown from "@/components/dropdown/TicketDropdown.vue";
import ApiService from "@/core/services/ApiService";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "ticket",
  inject: ["moment"],
  props: {
    widgetClasses: String,
    copyTradeId: Number,
  },
  components: {
    // TicketDropdown,
  },
  setup(props) {
    const loading = ref(false);
    const ticket = ref({});
    const store = useStore();
    const route = useRoute();
    const cloudinaryName = ref(process.env.VUE_APP_CLOUDINARY_NAME);

    const authenticatedUser = computed(() => {
      return store.getters.authenticatedUser;
    });

    const isSelfProfile = computed(() => {
      return store.getters.authenticatedUser.userName == route.params.userName;
    });

    const getData = () => {
      ApiService.get(`api/v1/copy-trade-tickets/${props.copyTradeId}`)
        .then((response) => {
          ticket.value = response.data[0];
        })
        .catch((err) => {
          console.log(err);
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    };
    const postComment = () => {
      ApiService.post(`api/v1/copy-trade-tickets/post-comment`, {
        ticketId: ticket.value.id,
        copyTradeId: ticket.value.copyTradeId,
        message: ticket.value.newComment,
      })
        .then((response) => {
          ElMessage.success("Success!");
          ticket.value.comments.push(response.data[0]);
          ticket.value.status = "OPEN";
          ticket.value.newComment = "";
        })
        .catch((err) => {
          console.log(err);
          ElMessage.error(err.message || "Server error");
        });
      // .finally(() => {});
    };
    const archiveTicket = () => {
      ApiService.post(`api/v1/copy-trade-tickets/archive-ticket`, {
        copyTradeId: ticket.value.copyTradeId,
      })
        .then((response) => {
          ticket.value.status = response.data[0].status;
          ElMessage.success("Success!");
        })
        .catch((err) => {
          console.log(err);
          ElMessage.error(err.message || "Server error");
        });
      // .finally(() => {});
    };
    getData();
    return {
      authenticatedUser,
      ticket,
      cloudinaryName,
      isSelfProfile,
      postComment,
      archiveTicket,
    };
  },
});
</script>

<template>
  <div class="card card-ticket mt-7" :class="widgetClasses">
    <div
      class="
        card-body
        pb-0
        ps-0w
        border
        border-dashed
        border-start-0
        border-end-0
        border-bottom-0
        border-gray-300
      "
    >
      <div class="d-flex align-items-center mb-2">
        <div class="flex-grow-1">
          <!-- <span class="text-muted fw-bold fs-7">Status: </span> -->
          <span class="badge fs-8 fw-bolder badge-light-primary" :class="{}">{{
            ticket.status
          }}</span>

          <span v-if="ticket.status == 'ARCHIVED'">
            <el-tooltip>
              <template #content>
                <span>you can reopen it by adding a reply</span>
              </template>

              <span class="svg-icon svg-icon-2 svg-icon-primary me-4">
                <inline-svg src="media/icons/duotune/general/gen045.svg" />
              </span>
            </el-tooltip>
          </span>
        </div>

        <a
          @click="archiveTicket"
          class="btn btn-sm btn-light-success"
          :class="{ disabled: ticket.status == 'ARCHIVED' }"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
          </span>
          Close ticket
        </a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <div class="d-flex align-items-center flex-grow-1">
          <div class="symbol symbol-45px me-5">
            <!-- <img src="media/avatars/150-10.jpg" alt="" /> -->
            <img src="media/avatars/support3.png" alt="" />
          </div>

          <div class="d-flex flex-column">
            <a class="text-gray-800 text-hover-primary fs-6 fw-bolder"
              >Coinvestr Team</a
            >
            <span class="text-gray-400 fw-bold">{{
              moment(ticket.createTime).format("YYYY-MM-DD HH:mm:ss")
            }}</span>
          </div>
        </div>

        <div class="my-0">
          <!-- <button
            type="button"
            class="
              btn btn-sm btn-icon btn-color-primary btn-active-light-primary
            "
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen024.svg" />
            </span>
          </button>
          <Dropdown2></Dropdown2> -->

          <!-- <el-popover
            popper-class="px-0 py-0"
            placement="bottom"
            :width="202"
            trigger="click"
          >
            <template #reference>
              <button
                type="button"
                class="
                  btn btn-sm btn-icon btn-color-primary btn-active-light-primary
                "
              >
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotune/general/gen024.svg" />
                </span>
              </button>
            </template>

            <TicketDropdown />
          </el-popover> -->
        </div>
      </div>

      <div class="mb-7">
        <div class="text-gray-800 mb-5">
          {{ ticket.subject }}
        </div>

        <!-- <div class="d-flex align-items-center mb-5">
          <a
            href="#"
            class="
              btn btn-sm btn-light btn-color-muted btn-active-light-success
              px-4
              py-2
              me-4
            "
          >
            <span class="svg-icon svg-icon-3">
              <inline-svg src="media/icons/duotune/communication/com012.svg" />
            </span>
            12
          </a>

          <a
            href="#"
            class="
              btn btn-sm btn-light btn-color-muted btn-active-light-danger
              px-4
              py-2
            "
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen030.svg" />
            </span>
            150
          </a>
        </div> -->
      </div>

      <div class="mb-7 ps-101">
        <div
          v-for="comment in ticket.comments"
          :key="comment.id"
          class="d-flex mb-5"
        >
          <div class="symbol symbol-45px me-5">
            <router-link
              v-if="comment.userId > 0"
              :to="`/profile/${authenticatedUser.userName}/overview`"
              class="text-dark fw-bolder text-hover-primary fs-6"
            >
              <div class="me-21 symbol symbol-45px">
                <img
                  :src="
                    authenticatedUser.profilePhoto
                      ? `https://res.cloudinary.com/${cloudinaryName}/image/upload/w_300,h_300,c_fill,g_custom/${authenticatedUser.profilePhoto}.jpg`
                      : `media/avatars/blank.png`
                  "
                  alt=""
                />
              </div>
            </router-link>

            <img v-else src="media/avatars/support3.png" alt="" />
          </div>

          <div class="d-flex flex-column flex-row-fluid">
            <div class="d-flex align-items-center flex-wrap mb-1">
              <router-link
                v-if="comment.userId > 0"
                :to="`/profile/${authenticatedUser.userName}/overview`"
                ƒ
                class="text-gray-700 fw-bolder text-hover-primary fs-6 me-2"
              >
                <div class="">
                  {{
                    `${authenticatedUser.name} ${authenticatedUser.lastName}`
                  }}
                </div>
              </router-link>

              <a
                v-else
                disabled
                class="text-gray-800 text-hover-primary fw-bolder me-2"
                >Coinvestr Team</a
              >

              <span class="text-gray-400 fw-bold">{{
                moment(comment.createTime).format("YYYY-MM-DD HH:mm:ss")
              }}</span>
            </div>

            <span class="text-gray-800 fs-7 fw-normal pt-1">
              {{ comment.message }}
            </span>
          </div>
        </div>
      </div>

      <div class="separator mb-4"></div>

      <form class="position-relative mb-6 d-flex">
        <input
          @keypress.enter.prevent
          type="text"
          v-model="ticket.newComment"
          class="
            form-control
            border-01
            pe-10
            resize-none
            min-h-40px
            form-control-solid
            px-3
          "
          data-kt-autosize="true"
          rows="1"
          placeholder="Reply.."
        />

        <div class="position-absolute1 top-0 end-0 me-n5">
          <!-- @click="addNewMessage" -->
          <button
            @click="postComment"
            class="btn btn-primary"
            type="button"
            data-kt-element="send"
          >
            Send
          </button>
          <!-- 
          <span class="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
            <span class="svg-icon svg-icon-3 mb-3">
              <inline-svg src="media/icons/duotune/communication/com008.svg" />
            </span>
          </span>

          <span class="btn btn-icon btn-sm btn-active-color-primary ps-0">
            <span class="svg-icon svg-icon-2 mb-3">
              <inline-svg src="media/icons/duotune/general/gen018.svg" />
            </span>
          </span> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-ticket {
  .card-body {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
