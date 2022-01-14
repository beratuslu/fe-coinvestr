<script>
import { defineComponent, computed, ref } from "vue";
import FollowUserModal from "@/components/modals/forms/FollowUserModal.vue";
import ApiService from "@/core/services/ApiService";
import { ElMessage } from "element-plus";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
export default {
  name: "FollowingDropdown",
  // props: {
  //   isFollowed: Boolean,
  // },
  components: {
    // FollowUserModal,
  },
  setup(props) {
    const store = useStore();
    const loading = ref(false);
    const isFollowed = computed(() => {
      let arr = store.getters.currentProfile.followers.filter(
        (user) => user.id === store.getters.authenticatedUser.id
      );

      let isFollowed = false;
      if (arr.length) {
        isFollowed = true;
      }
      return isFollowed;
    });
    const currentProfile = computed(() => {
      return store.getters.currentProfile;
    });

    function unfollow(values) {
      loading.value = true;
      const postData = {
        traderId: currentProfile.value.id,
      };
      ApiService.post(`api/v1/profile/unfollow`, postData)
        .then((response) => {
          ElMessage.success(
            response.message || "You quit following this user!"
          );
          store.dispatch(Actions.GET_PROFILE, currentProfile.value.userName);
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    }

    return { isFollowed, unfollow };
  },
};
</script>
<template>
  <div
    class="
      menu
      menu-sub
      menu-sub-dropdown
      menu-column
      menu-rounded
      menu-gray-800
      menu-state-bg-light-primary
      fw-bold
      w-125px
      py-2
      fs-6
    "
    data-kt-menu="true"
  >
    <div class="menu-item px-2 my-1">
      <a @click="$vfm.show('followUserModal')" class="menu-link px-5 fs-7">
        Edit Copy
      </a>
    </div>
    <div class="menu-item px-2 my-1 fs-7">
      <a @click="unfollow" class="menu-link px-5 text-danger"> Unfollow </a>
    </div>
  </div>
</template>