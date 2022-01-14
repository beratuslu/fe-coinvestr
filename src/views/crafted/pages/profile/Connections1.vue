<script>
import { defineComponent, computed, ref, watch, inject } from "vue";
import ConnectionCard from "@/components/cards/ConnectionCard.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useRoute, useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import ConnectionList from "@/components/widgets/lists/ConnectionList.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "connectionList",
  components: {
    ConnectionList,
  },
  setup() {
    const route = useRoute();
    const loading = ref(false);
    // const connectionList = ref([]);
    const connectionType = ref(route.name);
    const userName = ref(route.params.userName);
    const store = useStore();
    const $vfm = inject("$vfm");
    const modalOpen = ref(false);
    const modalOpened = ref(false);

    const getData = () => {
      loading.value = true;

      ApiService.get(`api/v1/profile/${userName.value}`)
        .then(({ data }) => {
          console.log(
            "🚀 ~ file: Connections1.vue ~ line 34 ~ .then ~ data",
            data
          );
          connectionList.value = data[connectionType.value];
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          loading.value = false;
        });
    };
    // getData();
    const openModal = (params) => {
      console.log("open midaksss");
      // modalOpen.value = true;
      $vfm.show("example", { userName: "vue-final-modal" }).then(() => {
        console.log("asdasdasdddddd");
        // modalOpened.value = true;
      });
    };

    const connectionList = computed(() => {
      return store.getters.currentProfile[connectionType.value];
    });

    watch(
      () => route.path,
      (prev, current) => {
        connectionType.value = route.name;
        // connectionList.value = [];
        // getData();
      }
    );

    return {
      connectionList,
      connectionType,
      loading,
      openModal,
      modalOpen,
      modalOpened,
    };
  },
});
</script>

<template>
  <!--begin::Followers toolbar-->
  <!-- <div class="d-flex flex-wrap flex-stack mb-6">
    <h3 class="fw-bolder my-2">
      {{ connectionType == "followers" ? `Followers` : `Followings` }}
      <span class="fs-6 text-gray-400 fw-bold ms-1"
        >({{ connectionList.length }})</span
      >
    </h3>

    <div class="d-flex my-2">
      <select
        name="status"
        data-control="select2"
        data-hide-search="true"
        class="form-select form-select-white form-select-sm w-125px"
      >
        <option value="Active" selected>Active</option>
        <option value="Approved">In Progress</option>
        <option value="Declined">To Do</option>
        <option value="In Progress">Completed</option>
      </select>
    </div>
  </div> -->
  <!--end::Followers toolbar-->

  <!--begin::Row-->

  <div class="row g-6 mb-6 g-xl-9 mb-xl-9">
    <!--begin::Followers-->

    <ConnectionList
      :list="connectionList"
      widget-classes="card-xl-stretch mb-xl-8"
    ></ConnectionList>
    <!-- <ConnectionCard
      v-for="item in connectionList"
      :key="item.id"
      :name="`${item.name} ${item.lastName}`"
      position="Happy trading."
      :online="false"
      :avatar="
        item.profilePhoto
          ? `https://res.cloudinary.com/${cloudinaryName}/image/upload/w_300,h_300,c_fill,g_custom/${profilePhoto}.jpg`
          : `media/avatars/blank.png`
      "
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></ConnectionCard> -->

    <!--end::Followers-->
  </div>
  <!--end::Row-->
</template>

<style>
.vfm-enter-active1,
.vfm-leave-active1 {
  transition: opacity 3s;
}
.vfm-enter1,
.vfm-leave-to1 {
  opacity: 0;
}

/* .modal123 {
  height: 150px;
  width: 1px;
  opacity: 0;
  transition: all 0.75s ease;
}

.modal123.show {
  opacity: 1;
  height: 150px;
  width: 500px;
} */
/* .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  max-width: 650px;
  min-width: 650px;
  margin: 0;
  max-height: 300px;
  padding: 16px;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
}
.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 8px 8px 0 0;
  cursor: pointer;
}
.modal-close::hover {
  color: gray;
} */
</style>

