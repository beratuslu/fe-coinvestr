<template>
  <div @mouseenter="alert1">{{ notifText }}</div>
</template>

<script>
import { defineComponent, ref, computed, inject, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "Notif",
  props: {
    notification: Object,
    store: Object,
  },
  components: {
    // Results,
    // Main,
    // Empty,
    // MenuComponent,
  },
  setup(props) {
    // const loading = ref(false);
    // const notifications = ref([]);

    const notifText = computed(() => {
      // return "asd";
      return props.store.getters.enumsAndConstants.notifications[
        props.notification.notifType
      ];
    });

    const alert1 = () => {
      alert("------------1");
    };
    return {
      alert1,
      notifText,
    };
  },
};
</script>

<style>
</style>